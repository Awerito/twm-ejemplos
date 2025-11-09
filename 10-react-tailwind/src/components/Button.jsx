export default function Button({ className = "", ...p }) {
  return (
    <button
      className={"px-4 py-2 rounded font-semibold transition " + className}
      {...p}
    />
  );
}
