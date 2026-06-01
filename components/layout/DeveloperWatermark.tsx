import { siteConfig } from "@/config/site.config";

/**
 * Subtle developer credit — shown in the footer and as a faint corner label on larger screens.
 */
export function DeveloperWatermark({ variant = "footer" }: { variant?: "footer" | "corner" }) {
  const { developer } = siteConfig;
  if (!developer.show) return null;

  const link = (
    <a
      href={developer.linkedInUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="underline-offset-2 transition-colors hover:text-violet-400 hover:underline"
    >
      {developer.name}
    </a>
  );

  if (variant === "corner") {
    return (
      <div
        className="pointer-events-none fixed bottom-[4.75rem] right-3 z-20 hidden select-none md:bottom-3 md:block"
        aria-hidden
      >
        <p className="pointer-events-auto text-[10px] leading-tight text-slate-400/45">
          Built by {link}
        </p>
      </div>
    );
  }

  return (
    <p className="text-[10px] leading-tight text-slate-600">
      Built by {link}
    </p>
  );
}
