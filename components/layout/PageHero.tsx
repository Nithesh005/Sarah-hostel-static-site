export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="border-b border-slate-200 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">{subtitle}</p>
      </div>
    </div>
  );
}
