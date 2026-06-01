import { houseRules } from "@/data/rules";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "House Rules",
  description:
    "Timings, visitor policy, conduct, and payment rules for residents at XYZ Men's Hostel.",
  path: "/rules",
});

export default function RulesPage() {
  return (
    <>
      <PageHero
        title="House Rules"
        subtitle="Simple guidelines to keep everyone safe and comfortable."
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
      </Section>
    </>
  );
}
