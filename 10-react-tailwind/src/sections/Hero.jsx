import Button from "../components/Button";

export default function Hero() {
  return (
    <section id="inicio" className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
        Presenta tu producto con estilo
      </h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
        Landing moderna, responsive y con modo oscuro. Lista para usar como
        template.
      </p>
      <div className="mt-6 flex gap-3">
        <Button className="bg-pink-600 text-white hover:bg-pink-500">
          Comenzar
        </Button>
        <Button className="border border-gray-300 dark:border-gray-700">
          Ver más
        </Button>
      </div>
    </section>
  );
}
