import { messTimings, messCharges, weeklyMenu } from "@/data/menu";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Food Menu",
  description:
    "Weekly mess menu with breakfast, lunch, and dinner timings. Veg and non-veg options for hostel residents.",
  path: "/food",
});

export default function FoodPage() {
  return (
    <>
      <PageHero
        title="Food Menu"
        subtitle="Fresh, homely South Indian meals prepared in our hygienic kitchen."
      />
      <Section title="Mess timings" centered={false}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(
            [
              ["Breakfast", messTimings.breakfast],
              ["Lunch", messTimings.lunch],
              ["Dinner", messTimings.dinner],
              ["Sunday breakfast", messTimings.sundayBreakfast],
            ] as const
          ).map(([meal, time]) => (
            <div
              key={meal}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <p className="text-sm font-medium text-slate-500">{meal}</p>
              <p className="mt-1 font-semibold text-slate-900">{time}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-lg bg-teal-50 px-4 py-3 text-sm text-teal-900">
          Mess charges: <strong>₹{messCharges.veg.toLocaleString("en-IN")}/month</strong>{" "}
          (veg). {messCharges.note}
        </p>
      </Section>

      <Section title="Weekly menu" className="bg-white" centered={false}>
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 font-semibold text-slate-900">Day</th>
                <th className="px-4 py-3 font-semibold text-slate-900">
                  Breakfast
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900">
                  Lunch
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900">
                  Dinner
                </th>
              </tr>
            </thead>
            <tbody>
              {weeklyMenu.map((row) => (
                <tr
                  key={row.day}
                  className="border-b border-slate-100 last:border-0"
                >
                  <td className="px-4 py-3 font-medium text-slate-900">
                    {row.day}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{row.breakfast}</td>
                  <td className="px-4 py-3 text-slate-600">{row.lunch}</td>
                  <td className="px-4 py-3 text-slate-600">{row.dinner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Menu may vary on festivals and special occasions. Non-veg served on
          marked days only.
        </p>
      </Section>
    </>
  );
}
