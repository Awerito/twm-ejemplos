export default function Input({ label, as = "input", className = "", ...p }) {
  const Tag = as;
  return (
    <label className="block text-sm">
      <span className="block mb-1">{label}</span>
      <Tag
        className={
          "w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 " +
          "focus:outline-none focus:ring-2 focus:ring-indigo-500 " +
          className
        }
        {...p}
      />
    </label>
  );
}
