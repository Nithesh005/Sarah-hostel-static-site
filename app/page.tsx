import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Wifi,
  Utensils,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { siteConfig, getFullAddress } from "@/config/site.config";
import { amenities } from "@/data/amenities";
import { pricingPlans } from "@/data/pricing";
import { faqs } from "@/data/faq";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GoogleMapEmbed } from "@/components/map/GoogleMapEmbed";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const highlights = [
  { icon: Shield, text: "24/7 security" },
  { icon: Wifi, text: "High-speed WiFi" },
  { icon: Utensils, text: "Hygienic homely mess" },
];

export default function HomePage() {
  const topAmenities = amenities.slice(0, 6);
  const previewPlans = pricingPlans.slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-purple-700">
              Men&apos;s hostel · {siteConfig.address.city}
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {siteConfig.tagline}
            </p>
            <ul className="mt-6 space-y-2">
              {highlights.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-2 text-slate-700"
                >
                  <Icon className="h-5 w-5 text-purple-600" />
                  {text}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={getWhatsAppUrl()} variant="whatsapp">
                Enquire on WhatsApp
              </Button>
              <Button href="/rooms" variant="outline">
                View pricing
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
            <Image
              src={siteConfig.heroImage.src}
              alt={siteConfig.heroImage.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <Section
        title="Why choose us"
        subtitle="A calm, disciplined environment designed for students and working professionals."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topAmenities.map(({ title, description, icon: Icon }) => (
            <Card key={title}>
              <Icon className="mb-3 h-8 w-8 text-purple-600" />
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/amenities"
            className="inline-flex items-center gap-1 text-sm font-semibold text-purple-700 hover:text-purple-800"
          >
            All amenities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section
        title="Rooms & pricing"
        subtitle="Transparent monthly rent with mess included."
        className="bg-white"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {previewPlans.map((plan) => (
            <Card key={plan.id} highlight={plan.popular}>
              {plan.popular && (
                <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-0.5 text-xs font-semibold text-purple-800">
                  Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">
                {plan.name}
              </h3>
              <p className="text-sm text-slate-500">{plan.beds} beds per room</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                ₹{plan.rent.toLocaleString("en-IN")}
                <span className="text-base font-normal text-slate-500">
                  /month
                </span>
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Deposit: ₹{plan.deposit.toLocaleString("en-IN")}
              </p>
              <ul className="mt-4 space-y-1">
                {plan.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/rooms">See all room options</Button>
        </div>
      </Section>

      <Section
        title="Photo gallery"
        subtitle="Take a look at our rooms, mess, and common areas."
      >
        <GalleryGrid limit={6} />
        <div className="mt-8 text-center">
          <Button href="/gallery" variant="outline">
            View full gallery
          </Button>
        </div>
      </Section>

      <Section title="Find us" subtitle={getFullAddress()} className="bg-white">
        <GoogleMapEmbed />
        <div className="mt-6 text-center">
          <Button href="/location" variant="outline">
            Location details
          </Button>
        </div>
      </Section>

      <Section title="Frequently asked questions">
        <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group px-6 py-4">
              <summary className="cursor-pointer list-none font-semibold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <section className="bg-purple-800 py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold md:text-3xl">Ready to move in?</h2>
          <p className="mt-3 text-purple-100">
            Schedule a visit or chat with us on WhatsApp. Limited beds
            available.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              href={getWhatsAppUrl()}
              variant="whatsapp"
              className="!bg-white !text-purple-900 hover:!bg-purple-50"
            >
              WhatsApp now
            </Button>
            <Button
              href={`tel:${siteConfig.phone}`}
              variant="outline"
              className="!border-white/40 !text-white hover:!bg-white/10"
            >
              {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
