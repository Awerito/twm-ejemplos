#!/usr/bin/env bash
set -euo pipefail

# Mirror the set of opted-in activity READMEs to public gists: create, update
# and DELETE, so the gists exactly track the activities. Opt-in via the marker
# "<!-- gist -->" in a README. The README->gist link lives in the gist
# description as "twm-gist:<dir>", so there is no mapping file. A renamed,
# removed or un-marked activity gets its gist deleted: nothing goes stale and
# nothing is left orphaned.
#
# Only gists tagged "twm-gist:" are ever touched; other gists are never listed
# as managed. Requires the gh CLI authenticated via GH_TOKEN with "gist" scope.

cd "$(dirname "$0")/../.."

login="$(gh api /user --jq .login)"
summary="${GITHUB_STEP_SUMMARY:-/dev/stdout}"
echo "## Gists de actividades" >>"$summary"

# Managed gists already on the account: dir -> id (from the "twm-gist:<dir>" tag).
declare -A gist_id
while IFS=$'\t' read -r id desc; do
    if [[ "$desc" =~ twm-gist:([^ ]+) ]]; then
        gist_id["${BASH_REMATCH[1]}"]="$id"
    fi
done < <(gh api --paginate /gists --jq '.[] | [.id, .description] | @tsv')

# Create or update a gist for each marked README; remember which dirs are wanted.
declare -A wanted
while IFS= read -r readme; do
    dir="$(dirname "${readme#./}")"
    wanted["$dir"]=1
    fname="${dir//\//-}.md"
    desc="Enunciado ${dir} twm-gist:${dir}"
    payload="$(jq -n --arg d "$desc" --arg f "$fname" --rawfile c "$readme" \
        '{description:$d, public:true, files:{($f):{content:$c}}}')"

    id="${gist_id[$dir]:-}"
    if [[ -n "$id" ]]; then
        gh api -X PATCH "/gists/$id" --input - <<<"$payload" >/dev/null
        echo "update  $dir -> $id"
    else
        id="$(gh api -X POST /gists --input - <<<"$payload" --jq .id)"
        echo "create  $dir -> $id"
    fi
    echo "- \`$dir\`: https://gist.github.com/$login/$id.js" >>"$summary"
done < <(grep -rl --include=README.md -- '<!-- gist -->' . | sort)

# Delete managed gists whose activity is gone (renamed / removed / unmarked).
for dir in "${!gist_id[@]}"; do
    if [[ -z "${wanted[$dir]:-}" ]]; then
        gh api -X DELETE "/gists/${gist_id[$dir]}" >/dev/null
        echo "delete  $dir -> ${gist_id[$dir]}"
        echo "- ~~\`$dir\`~~ (gist borrado)" >>"$summary"
    fi
done
