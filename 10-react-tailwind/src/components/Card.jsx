export default function Card({ title, children, footer }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="p-4">
        {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        {children}
      </div>
      {footer && (
        <div className="p-3 border-t border-gray-200 dark:border-gray-800">
          {footer}
        </div>
      )}
    </div>
  );
}
