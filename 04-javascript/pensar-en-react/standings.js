const players = [
  { name: "Félix Lebrun", points: 0 },
  { name: "Fan Zhendong", points: 0 },
  { name: "Tomokazu Harimoto", points: 0 },
];

// "component": pure function of props
const PlayerRow = ({ name, points }) => `${name} — ${points} pts`;

// render = f(state): pure, does not mutate
function renderStandings(list) {
  return [...list]
    .sort((a, b) => b.points - a.points)
    .map(PlayerRow)
    .join("\n");
}

// immutable update, like setState
function addPoints(list, name, n) {
  return list.map((p) =>
    p.name === name ? { ...p, points: p.points + n } : p,
  );
}

let state = players;
state = addPoints(state, "Félix Lebrun", 3);
console.log(renderStandings(state) + "\n---");
state = addPoints(state, "Fan Zhendong", 2);
state = addPoints(state, "Félix Lebrun", 1);
console.log(renderStandings(state) + "\n---");

console.log(renderStandings(players)); // original intact: 0-0-0
