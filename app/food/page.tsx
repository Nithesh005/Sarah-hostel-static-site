import { messTimings, messPolicy, weeklyMenu } from "@/data/menu";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Food Menu",
  description:
    "Weekly mess menu. Food is included with stay; breakfast and dinner at mess, lunch packed in tiffin each morning.",
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
              ["Mess access", messTimings.messAccess],
              ["Breakfast", messTimings.breakfast],
              ["Lunch", messTimings.lunch],
              ["Dinner", messTimings.dinner],
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
        <p className="mt-4 text-sm text-slate-600">
          {messTimings.sundayBreakfast}. See{" "}
          <a href="/rules" className="font-medium text-teal-700 hover:text-teal-800">
            house rules
          </a>{" "}
          for full policies.
        </p>
        <div className="mt-6 space-y-3 rounded-lg bg-teal-50 px-4 py-4 text-sm text-teal-900">
          <p>
            <strong>Included with stay:</strong> {messPolicy.includedNote}
          </p>
          <p>
            <strong>Mandatory:</strong> {messPolicy.mandatoryNote}
          </p>
          <p>{messPolicy.lunchNote}</p>
          <p className="text-teal-800">{messPolicy.accessNote}</p>
        </div>
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
                  Lunch (tiffin)
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
          Menu may vary on festivals and special occasions. Lunch is packed in
          the morning; dinner is served at the mess.
        </p>
      </Section>
    </>
  );
}
