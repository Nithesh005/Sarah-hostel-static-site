import { siteConfig } from "@/config/site.config";

export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; items: readonly NavLink[] };
export type NavEntry = NavLink | NavGroup;

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return "items" in entry;
}

export function isGroupActive(
  items: readonly NavLink[],
  pathname: string,
): boolean {
  return items.some((item) => item.href === pathname);
}

/** All page links (including Home) for sitemap, footer, etc. */
export function getFlatNavLinks(): NavLink[] {
  const links: NavLink[] = [];
  for (const entry of siteConfig.nav) {
    if (isNavGroup(entry)) {
      for (const item of entry.items) {
        links.push({ label: item.label, href: item.href });
      }
    } else {
      links.push({ label: entry.label, href: entry.href });
    }
  }
  return links;
}
