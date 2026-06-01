type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
};

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  centered = true,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header
          className={`mb-10 md:mb-12 ${centered ? "mx-auto max-w-2xl text-center" : ""}`}
        >
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
