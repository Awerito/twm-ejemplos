import Card from "../components/Card";

export default function Features() {
  return (
    <section id="servicios" className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card title="Rápido">Vite + React: DX ágil y builds veloces.</Card>
        <Card title="Flexible">Tailwind para iterar estilos sin fricción.</Card>
        <Card title="Dark mode">Toggle por clase, sin dependencias.</Card>
      </div>
    </section>
  );
}
