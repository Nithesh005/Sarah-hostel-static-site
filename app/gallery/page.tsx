import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Gallery",
  description:
    "Photos of rooms, dining, common areas, and facilities at XYZ Men's Hostel.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Explore our rooms, mess, and common spaces before you visit."
      />
      <Section title="Photos" subtitle="Click any image to view full size.">
        <GalleryGrid />
      </Section>
    </>
  );
}
