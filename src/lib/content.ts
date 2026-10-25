// Copy shared across pages. Testimonials are kept exactly as written.
export const testimonials = [
  { quote: "Best boiled peanuts I've ever had, and I've been eating them my whole life. That Cajun seasoning sneaks up on you exactly like they say.", name: "Tammy R.", detail: "Pecan Hollow local" },
  { quote: "Pulled over on a Friday afternoon on a whim. Ended up buying two quarts and calling my husband to meet me there. The gallon tub barely lasted the weekend.", name: "DeShawn M.", detail: "Passed through on I-75" },
  { quote: "We ordered four gallons for the reunion. They had them hot and packed when we showed up. Everyone kept asking where we got them.", name: "Linda K.", detail: "Church supper organizer" },
];

export const faqs = [
  { q: "What's the difference between regular and Cajun?", a: "Regular is just salt and water — pure, briny peanuts the way your grandparents made them. Cajun adds red pepper flakes, garlic, and a couple of other things. It builds slow; the heat doesn't hit until the second or third bite." },
  { q: "Are green peanuts always available?", a: "Fresh-dug green peanuts come in late summer through early fall. Outside that window we use raw dried peanuts soaked overnight — the flavor is a little different but they still take on the brine well. We'll tell you which we're running when you call." },
  { q: "Can I order ahead for a large group?", a: "Yes, and we ask that you do. A gallon takes the better part of a day to boil right. Call the evening before at minimum, and give us two days' notice for three or more gallons." },
  { q: "Do you take cards?", a: "Yes, we take cards and cash. Exact change keeps the line moving on busy Saturdays." },
  { q: "What if you're sold out early?", a: "It happens. When the pot is empty, we close and put a sign out. Call ahead on weekends if you're driving from far away — we'll tell you whether we'll have peanuts left by the time you arrive." },
];

export const fmt = (t: string | null) => {
  if (!t) return '';
  const [h, m] = t.split(':').map(Number);
  return `${((h + 11) % 12) + 1}${m ? ':' + String(m).padStart(2, '0') : ''} ${h < 12 ? 'a.m.' : 'p.m.'}`;
};
