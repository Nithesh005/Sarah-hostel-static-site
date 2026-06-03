import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig, getFullAddress } from "@/config/site.config";
import { getFlatNavLinks } from "@/lib/navigation";
import { DeveloperWatermark } from "@/components/layout/DeveloperWatermark";
import { SiteBrand } from "@/components/layout/SiteBrand";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="mb-4">
            <SiteBrand variant="light" />
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            {siteConfig.tagline}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Quick links
          </h3>
          <ul className="space-y-2 text-sm">
            {getFlatNavLinks()
              .filter((item) => item.href !== "/")
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-purple-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" />
              <span>{getFullAddress()}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-purple-400" />
              <a
                href={`tel:${siteConfig.phone}`}
                className="hover:text-purple-400"
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-purple-400" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-purple-400"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-3">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1.5 text-center text-xs text-slate-500 sm:flex-row sm:gap-3">
          <span>© {year} {siteConfig.name}. All rights reserved.</span>
          <span className="hidden text-slate-700 sm:inline" aria-hidden>
            ·
          </span>
          <DeveloperWatermark variant="footer" />
        </div>
      </div>
    </footer>
  );
}
