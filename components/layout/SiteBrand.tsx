import { siteConfig } from "@/config/site.config";

type SiteBrandProps = {
  /** `dark` for light backgrounds (header); `light` for dark backgrounds (footer) */
  variant?: "dark" | "light";
  className?: string;
};

export function SiteBrand({ variant = "dark", className = "" }: SiteBrandProps) {
  const [brand, ...rest] = siteConfig.name.split(" ");
  const restName = rest.join(" ");
  const onDark = variant === "light";

  return (
    <span
      className={`inline-block leading-tight ${className}`}
      aria-label={siteConfig.name}
    >
      <span className="text-lg font-extrabold tracking-tight sm:text-xl">
        <span className={onDark ? "text-purple-400" : "text-purple-700"}>
          {brand}
        </span>{" "}
        <span className={onDark ? "text-white" : "text-slate-900"}>
          {restName}
        </span>
      </span>
    </span>
  );
}
