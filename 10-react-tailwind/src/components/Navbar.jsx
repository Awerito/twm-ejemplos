export default function Navbar() {
  const toggle = () => document.documentElement.classList.toggle("dark");
  return (
    <header className="sticky top-0 z-10 backdrop-blur border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/40">
      <div className="max-w-6xl mx-auto h-12 px-4 flex items-center justify-between">
        <a href="#inicio" className="font-bold">
          ProductoX
        </a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#inicio" className="hover:underline">
            Inicio
          </a>
          <a href="#servicios" className="hover:underline">
            Servicios
          </a>
          <a href="#contacto" className="hover:underline">
            Contacto
          </a>
          <button onClick={toggle} className="px-3 py-1 rounded border">
            Theme
          </button>
        </nav>
      </div>
    </header>
  );
}
