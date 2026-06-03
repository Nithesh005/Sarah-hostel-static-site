/**
 * Central configuration — edit this file to update site-wide content.
 * All pages read from here for name, contact, location, gallery, and SEO.
 */

export const siteConfig = {
  /** Brand */
  name: "Sarah Men's Hostel",
  shortName: "Sarah Hostel",
  tagline: "Safe, affordable stay for students & working professionals",
  description:
    "Premium men's hostel with furnished rooms, homely food, WiFi, and 24/7 security. Ideal for students and working professionals.",

  /** Contact */
  phone: "+919585873734",
  phoneDisplay: "+91 95858 73734",
  whatsapp: "919585873734",
  email: "sarahhostel@gmail.com",

  /** Address */
  address: {
    line1: "5A South Street, And, near lady doak college, opposite to KV school, Singarayar Colony, Narimedu, Madurai, Tamil Nadu 625002",
    area: "Narimedu",
    city: "Madurai",
    state: "Tamil Nadu",
    pincode: "625002",
    country: "India",
  },

  /** Hero image */
  heroImage: {
    src: "/gallery/hero.jpg",
    alt: "Sarah Men's Hostel building exterior",
  },

  /** Google Maps — replace embedUrl with your location from Google Maps → Share → Embed */
  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9364237418363!2d78.12588517503032!3d9.939247990163082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c527504c8f27%3A0xc68f71750ea78b40!2sSARAH%20MEN%27S%20HOSTEL%2C!5e0!3m2!1sen!2sin!4v1780486206198!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Sarah+Men's+Hostel+Madurai",
    lat: 9.939248,
    lng: 78.125885,
  },

  /** Social (optional — leave empty string to hide) */
  social: {
    instagram: "",
    facebook: "",
  },

  /** Business hours shown on contact page */
  officeHours: {
    weekdays: "6:00 AM – 10:00 PM",
    sunday: "6:00 AM – 10:30 PM",
  },

  /** SEO */
  seo: {
    keywords: [
      "mens hostel",
      "boys hostel",
      "PG Chennai",
      "student accommodation",
      "working professional hostel",
      "XYZ hostel",
    ],
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  },

  /** Image gallery — add photos to public/gallery/ and list them here */
  gallery: [
    {
      src: "/gallery/room-triple.jpg",
      alt: "Spacious triple sharing room with beds and storage",
      category: "Rooms",
    },
    {
      src: "/gallery/room-double.jpg",
      alt: "Clean double sharing AC room",
      category: "Rooms",
    },
    {
      src: "/gallery/common-hall.jpg",
      alt: "Common hall for relaxation and TV",
      category: "Common Areas",
    },
    {
      src: "/gallery/dining.jpg",
      alt: "Hygienic dining area for residents",
      category: "Food",
    },
    {
      src: "/gallery/kitchen.jpg",
      alt: "Mess kitchen preparing fresh meals",
      category: "Food",
    },
    {
      src: "/gallery/exterior.jpg",
      alt: "Hostel building exterior with secure entrance",
      category: "Building",
    },
    {
      src: "/gallery/study-area.jpg",
      alt: "Quiet study area with desks and lighting",
      category: "Common Areas",
    },
    {
      src: "/gallery/washroom.jpg",
      alt: "Clean attached washroom facilities",
      category: "Amenities",
    },
  ],

  /**
   * Developer credit (subtle footer watermark).
   * Set show: false to hide. Update name and linkedInUrl with your details.
   */
  developer: {
    show: true,
    name: "Nithesh",
    linkedInUrl: "https://nithi.shop/",
  },

  /**
   * Header navigation — top-level links and grouped dropdowns.
   * Edit groups here; all pages stay in the sitemap via getFlatNavLinks().
   */
  nav: [
    { label: "Home", href: "/" },
    {
      label: "Your stay",
      items: [
        { label: "Rooms & Pricing", href: "/rooms" },
        { label: "Food Menu", href: "/food" },
        { label: "Amenities", href: "/amenities" },
        { label: "Rules", href: "/rules" },
      ],
    },
    {
      label: "Explore",
      items: [
        { label: "Gallery", href: "/gallery" },
        { label: "Location", href: "/location" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** Full address as single line */
export function getFullAddress(): string {
  const { line1, area, city, state, pincode } = siteConfig.address;
  return `${line1}, ${area}, ${city}, ${state} – ${pincode}`;
}
