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
    description:
      "Food included with stay. Morning tiffin lunch; breakfast and dinner at the mess.",
    icon: Utensils,
  },
  {
    title: "Laundry",
    description: "Washing machine facility with designated drying area.",
    icon: Shirt,
  },
  {
    title: "RO Water",
    description: "Filtered drinking water available round the clock.",
    icon: Droplets,
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
