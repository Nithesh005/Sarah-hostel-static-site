export const messTimings = {
  breakfast: "7:30 AM – 9:00 AM",
  lunch: "12:30 PM – 2:00 PM",
  dinner: "7:30 PM – 9:00 PM",
  sundayBreakfast: "8:00 AM – 9:30 AM",
};

export const messCharges = {
  veg: 3500,
  note: "Per person per month. Both veg and non-veg options available on select days.",
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
