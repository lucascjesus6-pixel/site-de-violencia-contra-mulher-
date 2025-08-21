export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium focus:outline-none transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
