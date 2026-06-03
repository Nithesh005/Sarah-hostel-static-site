import { houseRules, rulesManagementNote } from "@/data/rules";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site.config";

export const metadata = createPageMetadata({
  title: "House Rules",
  description:
    "Fee payment, timings, mess, visitors, conduct, and stay policies for residents at Sarah Men's Hostel.",
  path: "/rules",
});

export default function RulesPage() {
  return (
    <>
      <PageHero
        title="House Rules"
        subtitle={`Policies for a safe, comfortable stay at ${siteConfig.name}.`}
      />
      <Section title="Policies" centered={false}>
        <div className="grid gap-6 md:grid-cols-2">
          {houseRules.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {group.title}
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-950">
          <strong className="font-semibold">Note:</strong> {rulesManagementNote}
        </p>
      </Section>
    </>
  );
}
