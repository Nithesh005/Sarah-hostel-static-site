"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SiteBrand } from "@/components/layout/SiteBrand";
import { HeaderNav } from "@/components/layout/HeaderNav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center">
          <SiteBrand />
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Main"
        >
          <HeaderNav pathname={pathname} variant="desktop" />
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            href={`tel:${siteConfig.phone}`}
            variant="outline"
            className="!px-3"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">Call</span>
          </Button>
          <Button href={getWhatsAppUrl()} variant="whatsapp">
            WhatsApp
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <HeaderNav
            pathname={pathname}
            variant="mobile"
            onNavigate={() => setOpen(false)}
          />
          <div className="mt-4 flex flex-col gap-2">
            <Button href={`tel:${siteConfig.phone}`} variant="outline">
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </Button>
            <Button href={getWhatsAppUrl()} variant="whatsapp">
              WhatsApp Us
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
