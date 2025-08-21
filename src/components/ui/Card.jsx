export function Card({ children, className = "", onClick }) {
  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
