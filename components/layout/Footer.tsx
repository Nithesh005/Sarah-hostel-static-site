import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig, getFullAddress } from "@/config/site.config";
import { DeveloperWatermark } from "@/components/layout/DeveloperWatermark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            className="mb-4 h-9 w-auto brightness-0 invert"
          />
          <p className="text-sm leading-relaxed text-slate-400">
            {siteConfig.tagline}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Quick links
          </h3>
          <ul className="space-y-2 text-sm">
            {siteConfig.nav.slice(1, 6).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-violet-400"
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
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
              <span>{getFullAddress()}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-violet-400" />
              <a
                href={`tel:${siteConfig.phone}`}
                className="hover:text-violet-400"
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-violet-400" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-violet-400"
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
