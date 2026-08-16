const books = [
  { title: "El Quijote", pages: 863, year: 1605, read: true },
  { title: "Clean Code", pages: 464, year: 2008, read: false },
  { title: "Fahrenheit 451", pages: 256, year: 1953, read: true },
  { title: "El Hobbit", pages: 310, year: 1937, read: false },
];

// 1) read vs pending
const read = books.filter((b) => b.read);
const pending = books.filter((b) => !b.read);
console.log(`Leídos: ${read.length} | Pendientes: ${pending.length}`);

// 2) format with destructuring
const lines = books.map(
  ({ title, year, pages }) => `${title} (${year}) — ${pages} págs`,
);
console.log(lines.join("\n"));

// 3) totals with reduce
const pagesRead = read.reduce((sum, b) => sum + b.pages, 0);
const avgPages = books.reduce((sum, b) => sum + b.pages, 0) / books.length;
console.log(`Páginas leídas: ${pagesRead} | Promedio: ${avgPages.toFixed(1)}`);

// 4) immutable update
const updated = books.map((b) =>
  b.title === "Clean Code" ? { ...b, read: true } : b,
);
console.log("Original sin cambios:", books[1].read); // false
console.log("Copia actualizada:", updated[1].read); // true

// 5) closure
function makeReadingTracker() {
  let total = 0;
  return {
    add: (pages) => (total += pages),
    total: () => total,
  };
}

const tracker = makeReadingTracker();
tracker.add(50);
tracker.add(30);
console.log(`Sesión de lectura: ${tracker.total()} págs`);
