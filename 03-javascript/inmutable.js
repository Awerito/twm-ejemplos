// Inmutabilidad: Actualizar un objeto dentro de un array sin modificar el
// array original
const tasks = [
  { id: 1, text: "Estudiar", done: false },
  { id: 2, text: "Comer", done: false },
];

const updatedTasks = tasks.map((t) => (t.id === 1 ? { ...t, done: true } : t));

console.log("Tareas originales:", tasks);
console.log("Tareas actualizadas:", updatedTasks);
