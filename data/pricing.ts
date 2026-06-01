export const pricingPlans = [
  {
    id: "triple-non-ac",
    name: "Triple Sharing",
    type: "Non-AC",
    beds: 3,
    rent: 6500,
    deposit: 5000,
    includes: ["WiFi", "Housekeeping", "Power backup (common areas)"],
    popular: false,
  },
  {
    id: "triple-ac",
    name: "Triple Sharing",
    type: "AC",
    beds: 3,
    rent: 8500,
    deposit: 5000,
    includes: ["WiFi", "Housekeeping", "AC", "Power backup"],
    popular: true,
  },
  {
    id: "double-non-ac",
    name: "Double Sharing",
    type: "Non-AC",
    beds: 2,
    rent: 8000,
    deposit: 7500,
    includes: ["WiFi", "Housekeeping", "Attached washroom"],
    popular: false,
  },
  {
    id: "double-ac",
    name: "Double Sharing",
    type: "AC",
    beds: 2,
    rent: 10500,
    deposit: 7500,
    includes: ["WiFi", "Housekeeping", "AC", "Attached washroom"],
    popular: false,
  },
] as const;

export const pricingNotes = [
  "Rent is per person per month. Mess charges are separate (see Food Menu).",
  "One-time registration fee: ₹500 (non-refundable).",
  "Minimum stay: 3 months. Notice period: 15 days.",
  "Prices subject to change; confirm at the time of booking.",
];
