import { Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { siteConfig, getFullAddress } from "@/config/site.config";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GoogleMapEmbed } from "@/components/map/GoogleMapEmbed";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description: `Call or WhatsApp ${siteConfig.name}. Visit us at ${getFullAddress()}.`,
  path: "/contact",
});

export default function ContactPage() {
  const { officeHours } = siteConfig;

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Call, WhatsApp, or visit us to check availability and schedule a room tour."
      />
      <Section title="Get in touch" centered={false}>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <ContactCard
              icon={Phone}
              label="Phone"
              href={`tel:${siteConfig.phone}`}
              value={siteConfig.phoneDisplay}
            />
            <ContactCard
              icon={MessageCircle}
              label="WhatsApp"
              href={getWhatsAppUrl()}
              value="Chat with us"
            />
            <ContactCard
              icon={Mail}
              label="Email"
              href={`mailto:${siteConfig.email}`}
              value={siteConfig.email}
            />
            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <Clock className="h-6 w-6 shrink-0 text-purple-600" />
              <div>
                <p className="font-semibold text-slate-900">Office hours</p>
                <p className="mt-1 text-sm text-slate-600">
                  Mon–Sat: {officeHours.weekdays}
                </p>
                <p className="text-sm text-slate-600">
                  Sunday: {officeHours.sunday}
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-500">{getFullAddress()}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href={getWhatsAppUrl()} variant="whatsapp">
                WhatsApp
              </Button>
              <Button href={`tel:${siteConfig.phone}`} variant="outline">
                Call now
              </Button>
            </div>
          </div>
          <GoogleMapEmbed />
        </div>
      </Section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  label,
  href,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  value: string;
}) {
  return (
    <a
      href={href}
      className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md"
    >
      <Icon className="h-6 w-6 shrink-0 text-purple-600" />
      <div>
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <p className="font-semibold text-slate-900">{value}</p>
      </div>
    </a>
  );
}
