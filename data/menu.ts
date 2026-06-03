export const messTimings = {
  messAccess: "8:00 – 8:30 AM & 8:00 – 8:30 PM",
  breakfast: "8:00 AM – 8:30 AM (with lunch pickup)",
  lunch: "8:00 AM – 8:30 AM — served with breakfast (tiffin)",
  dinner: "8:00 PM – 8:30 PM (at mess)",
  sundayBreakfast: "8:00 AM – 8:30 AM (same window as weekdays)",
};

export const messPolicy = {
  includedNote:
    "Mess charges are included in your stay fees — no separate mess bill.",
  mandatoryNote: "Food is mandatory for all residents along with your stay.",
  lunchNote:
    "Lunch is prepared in the morning and packed in your tiffin; collect it with breakfast during the morning mess window.",
  accessNote:
    "Breakfast and lunch: 8:00 – 8:30 AM. Dinner: 8:00 – 8:30 PM. The mess is closed after these timings.",
};

export const weeklyMenu = [
  {
    day: "Monday",
    breakfast: "Idli, Sambar, Chutney",
    lunch: "Rice, Sambar, Rasam, Poriyal, Curd",
    dinner: "Chapati, Dal, Sabzi",
  },
  {
    day: "Tuesday",
    breakfast: "Pongal, Vadai, Chutney",
    lunch: "Rice, Sambar, Kuzhambu, Kootu",
    dinner: "Rice, Dal, Egg curry / Paneer (alt. days)",
  },
  {
    day: "Wednesday",
    breakfast: "Dosa, Chutney, Sambar",
    lunch: "Rice, Sambar, Rasam, Poriyal",
    dinner: "Chapati, Dal, Mixed veg",
  },
  {
    day: "Thursday",
    breakfast: "Upma, Chutney",
    lunch: "Rice, Sambar, Rasam, Poriyal, Pickle",
    dinner: "Rice, Sambar, Fish / Veg curry (alt. days)",
  },
  {
    day: "Friday",
    breakfast: "Poori, Potato masala",
    lunch: "Rice, Sambar, Rasam, Poriyal, Sweet (weekly)",
    dinner: "Chapati, Dal, Sabzi",
  },
  {
    day: "Saturday",
    breakfast: "Idli / Dosa (special)",
    lunch: "Rice, Biryani / Meals (special)",
    dinner: "Chapati, Dal, Non-veg / Veg special",
  },
  {
    day: "Sunday",
    breakfast: "Bread, Omelette / Jam, Tea",
    lunch: "Rice, Sambar, Rasam, Poriyal, Curd",
    dinner: "Chapati, Dal, Weekly special curry",
  },
] as const;
