"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { isNavGroup, isGroupActive } from "@/lib/navigation";

const navLinkClass = (active: boolean) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    active
      ? "bg-teal-50 text-teal-800"
      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
  }`;

const mobileLinkClass = (active: boolean) =>
  `block rounded-lg px-3 py-2.5 text-sm font-medium ${
    active
      ? "bg-teal-50 text-teal-800"
      : "text-slate-700 hover:bg-slate-50"
  }`;

type HeaderNavProps = {
  pathname: string;
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
};

export function HeaderNav({ pathname, variant, onNavigate }: HeaderNavProps) {
  const close = () => onNavigate?.();

  if (variant === "desktop") {
    return (
      <>
        {siteConfig.nav.map((entry) => {
          if (isNavGroup(entry)) {
            return (
              <NavDropdown
                key={entry.label}
                label={entry.label}
                items={entry.items}
                pathname={pathname}
                active={isGroupActive(entry.items, pathname)}
              />
            );
          }
          return (
            <Link
              key={entry.href}
              href={entry.href}
              className={navLinkClass(pathname === entry.href)}
            >
              {entry.label}
            </Link>
          );
        })}
      </>
    );
  }

  return (
    <ul className="flex flex-col gap-1">
      {siteConfig.nav.map((entry) => {
        if (isNavGroup(entry)) {
          return (
            <li key={entry.label}>
              <p className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {entry.label}
              </p>
              <ul className="flex flex-col gap-0.5 pb-1">
                {entry.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className={`${mobileLinkClass(pathname === item.href)} pl-5`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        }
        return (
          <li key={entry.href}>
            <Link
              href={entry.href}
              onClick={close}
              className={mobileLinkClass(pathname === entry.href)}
            >
              {entry.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
