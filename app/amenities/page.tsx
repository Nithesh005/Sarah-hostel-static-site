import { amenities } from "@/data/amenities";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Amenities",
  description:
    "WiFi, mess, laundry, security, power backup, study area, and more at XYZ Men's Hostel.",
  path: "/amenities",
});

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        title="Amenities"
        subtitle="Everything you need for a comfortable and productive stay."
      />
      <Section title="What we offer">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map(({ title, description, icon: Icon }) => (
            <Card key={title}>
              <Icon className="mb-3 h-9 w-9 text-purple-600" />
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
