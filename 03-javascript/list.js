// Arrays: Métodos para manipular listas de objetos
const people = [
  { name: "Ana", age: 22 },
  { name: "Luis", age: 19 },
];

const formatted = people.map((p) => `${p.name} (${p.age})`);

console.log("Personas formateadas:", formatted);
