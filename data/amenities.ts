import {
  Wifi,
  Utensils,
  Shield,
  Zap,
  Shirt,
  BookOpen,
  Droplets,
  Camera,
  Clock,
  Bed,
  type LucideIcon,
} from "lucide-react";

export type Amenity = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const amenities: Amenity[] = [
  {
    title: "High-Speed WiFi",
    description: "Dedicated broadband for study and work from your room.",
    icon: Wifi,
  },
  {
    title: "Homely Mess",
    description: "Fresh South Indian meals with hygienic kitchen practices.",
    icon: Utensils,
  },
  {
    title: "24/7 Security",
    description: "CCTV, biometric entry, and on-site warden for your safety.",
    icon: Shield,
  },
  {
    title: "Power Backup",
    description: "Inverter/generator for common areas and essential circuits.",
    icon: Zap,
  },
  {
    title: "Laundry",
    description: "Washing machine facility with designated drying area.",
    icon: Shirt,
  },
  {
    title: "Study Area",
    description: "Quiet zone with desks for exam prep and remote work.",
    icon: BookOpen,
  },
  {
    title: "RO Water",
    description: "Filtered drinking water available round the clock.",
    icon: Droplets,
  },
  {
    title: "CCTV",
    description: "Cameras in corridors and entry for added peace of mind.",
    icon: Camera,
  },
  {
    title: "Flexible Timings",
    description: "Reasonable in/out timings suited for students and professionals.",
    icon: Clock,
  },
  {
    title: "Furnished Rooms",
    description: "Bed, wardrobe, and study table in every room.",
    icon: Bed,
  },
];
