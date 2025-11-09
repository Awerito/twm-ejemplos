export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between text-sm">
        <span>© {new Date().getFullYear()} Usuario de Github</span>
        <div className="flex gap-3">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
