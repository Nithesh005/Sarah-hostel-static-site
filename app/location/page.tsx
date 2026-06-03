import { MapPin, Navigation } from "lucide-react";
import { siteConfig, getFullAddress } from "@/config/site.config";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { GoogleMapEmbed } from "@/components/map/GoogleMapEmbed";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Location",
  description: `Find ${siteConfig.name} at ${getFullAddress()}. Google Maps directions and nearby landmarks.`,
  path: "/location",
});

const nearby = [
  "5 min walk to city bus stand",
  "Near Lady Doak College & IT parks",
  "Grocery stores and ATMs within 500 m",
  "Auto and cab stand at the main road",
];

export default function LocationPage() {
  const { address } = siteConfig;

  return (
    <>
      <PageHero
        title="Location"
        subtitle="Easy to reach by bus, auto, or cab. Schedule a visit any day."
      />
      <Section title="Address" centered={false}>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-6">
              <MapPin className="h-6 w-6 shrink-0 text-purple-600" />
              <div>
                <p className="font-semibold text-slate-900">{siteConfig.name}</p>
                <p className="mt-2 text-slate-600">{address.line1}</p>
                <p className="text-slate-600">
                  {address.area}, {address.city}
                </p>
                <p className="text-slate-600">
                  {address.state} – {address.pincode}
                </p>
              </div>
            </div>
            <h3 className="mt-8 font-semibold text-slate-900">Nearby</h3>
            <ul className="mt-3 space-y-2">
              {nearby.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <Navigation className="h-4 w-4 text-purple-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={siteConfig.map.directionsUrl} variant="primary">
                Get directions
              </Button>
            </div>
          </div>
          <GoogleMapEmbed />
        </div>
      </Section>
    </>
  );
}
