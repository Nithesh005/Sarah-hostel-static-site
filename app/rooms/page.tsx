import { CheckCircle2 } from "lucide-react";
import { pricingPlans, pricingNotes } from "@/data/pricing";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/layout/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Rooms & Pricing",
  description:
    "Affordable AC and non-AC sharing rooms for students and professionals. View rent, deposit, and inclusions.",
  path: "/rooms",
});

export default function RoomsPage() {
  return (
    <>
      <PageHero
        title="Rooms & Pricing"
        subtitle="Choose the sharing and AC option that fits your budget."
      />
      <Section title="Monthly rent" centered={false}>
        <div className="grid gap-6 md:grid-cols-2">
          {pricingPlans.map((plan) => (
            <Card key={plan.id} highlight={plan.popular}>
              {plan.popular && (
                <span className="mb-2 inline-block rounded-full bg-teal-100 px-3 py-0.5 text-xs font-semibold text-teal-800">
                  Most popular
                </span>
              )}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-500">{plan.type}</p>
                </div>
                <span className="rounded-lg bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                  {plan.beds} beds
                </span>
              </div>
              <p className="mt-4 text-3xl font-bold text-slate-900">
                ₹{plan.rent.toLocaleString("en-IN")}
                <span className="text-base font-normal text-slate-500">
                  /person/month
                </span>
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Security deposit: ₹{plan.deposit.toLocaleString("en-IN")}
              </p>
              <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                {plan.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-10 rounded-xl bg-slate-50 p-6">
          <h3 className="font-semibold text-slate-900">Important notes</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {pricingNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
        <div className="mt-10 text-center">
          <Button href={getWhatsAppUrl("Hi, I'd like to know room availability and pricing.")}>
            Check availability on WhatsApp
          </Button>
        </div>
      </Section>
    </>
  );
}
