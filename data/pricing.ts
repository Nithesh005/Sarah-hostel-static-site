export const pricingPlans = [
  {
    id: "six-sharing",
    name: "Six Sharing",
    // type: "Normal",
    beds: 6,
    rent: 6500,
    deposit: 1500,
    includes: ["WiFi", "Housekeeping", "Mess (included)"],
    popular: false,
  },
  {
    id: "two-sharing",
    name: "Two Sharing",
    // type: "Normal",
    beds: 2,
    rent: 8500,
    deposit: 1500,
    includes: ["WiFi", "Housekeeping", "Mess (included)"],
    popular: true,
  },
  // {
  //   id: "double-non-ac",
  //   name: "Double Sharing",
  //   type: "Non-AC",
  //   beds: 2,
  //   rent: 8000,
  //   deposit: 7500,
  //   includes: ["WiFi", "Housekeeping", "Attached washroom"],
  //   popular: false,
  // },
  // {
  //   id: "double-ac",
  //   name: "Double Sharing",
  //   type: "AC",
  //   beds: 2,
  //   rent: 10500,
  //   deposit: 7500,
  //   includes: ["WiFi", "Housekeeping", "AC", "Attached washroom"],
  //   popular: false,
  // },
] as const;

export const pricingNotes = [
  "Rent is per person per month and includes mess — food is mandatory with stay.",
  "One-time registration fee: ₹500 (non-refundable).",
  "Minimum stay: 3 months. Vacating notice: at least 10 days (see House Rules).",
  "Prices subject to change; confirm at the time of booking.",
];
