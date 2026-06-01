/**
 * Central configuration — edit this file to update site-wide content.
 * All pages read from here for name, contact, location, gallery, and SEO.
 */

export const siteConfig = {
  /** Brand */
  name: "XYZ Men's Hostel",
  shortName: "XYZ Hostel",
  tagline: "Safe, affordable stay for students & working professionals",
  description:
    "Premium men's hostel at XYZ with furnished rooms, homely food, WiFi, and 24/7 security. Ideal for students and working professionals.",

  /** Contact */
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "contact@xyzhostel.com",

  /** Address */
  address: {
    line1: "123, Main Road, Near City Bus Stand",
    area: "XYZ Nagar",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600001",
    country: "India",
  },

  /** Logo — place your file at public/logo.svg or update src */
  logo: {
    src: "/logo.svg",
    alt: "XYZ Men's Hostel logo",
    width: 140,
    height: 40,
  },

  /** Hero image */
  heroImage: {
    src: "/gallery/hero.jpg",
    alt: "XYZ Men's Hostel building exterior",
  },

  /** Google Maps — replace embedUrl with your location from Google Maps → Share → Embed */
  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.992257793119!2d80.270462!3d13.082680!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d49a5%3A0x10596c3add742577!2sChennai%2C%20Tamil%20Nadu!2e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=XYZ+Men's+Hostel+Chennai",
    lat: 13.0827,
    lng: 80.2705,
  },

  /** Social (optional — leave empty string to hide) */
  social: {
    instagram: "",
    facebook: "",
  },

  /** Business hours shown on contact page */
  officeHours: {
    weekdays: "8:00 AM – 8:00 PM",
    sunday: "9:00 AM – 1:00 PM",
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

  /** Navigation links */
  nav: [
    { label: "Home", href: "/" },
    { label: "Rooms & Pricing", href: "/rooms" },
    { label: "Food Menu", href: "/food" },
    { label: "Amenities", href: "/amenities" },
    { label: "Rules", href: "/rules" },
    { label: "Gallery", href: "/gallery" },
    { label: "Location", href: "/location" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** Full address as single line */
export function getFullAddress(): string {
  const { line1, area, city, state, pincode } = siteConfig.address;
  return `${line1}, ${area}, ${city}, ${state} – ${pincode}`;
}
