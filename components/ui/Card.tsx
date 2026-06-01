export function Card({
  children,
  className = "",
  highlight = false,
}: {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
        highlight
          ? "border-teal-200 ring-2 ring-teal-600/20"
          : "border-slate-200"
      } ${className}`}
    >
      {children}
    </div>
  );
}
