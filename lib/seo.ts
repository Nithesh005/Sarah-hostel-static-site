import type { Metadata } from "next";
import { siteConfig, getFullAddress } from "@/config/site.config";

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const desc = description ?? siteConfig.description;
  const url = `${siteConfig.seo.siteUrl}${path}`;

  return {
    title,
    description: desc,
    keywords: [...siteConfig.seo.keywords],
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: desc,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description: desc,
    },
    alternates: { canonical: url },
  };
}

export function getJsonLd() {
  const { address, phone, map } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    image: `${siteConfig.seo.siteUrl}${siteConfig.heroImage.src}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.line1,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.pincode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: map.lat,
      longitude: map.lng,
    },
    url: siteConfig.seo.siteUrl,
    priceRange: "₹₹",
    amenityFeature: siteConfig.seo.keywords.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
  };
}

export function formatAddressMultiline(): string {
  return getFullAddress();
}
