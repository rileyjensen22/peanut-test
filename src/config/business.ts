/**
 * Single source of truth for the site. EVERYTHING HERE IS FICTIONAL SAMPLE DATA.
 * "Boiled Nuts" is not a real business; the phone uses the reserved 555-01xx range,
 * the email uses example.com, and the town "Pecan Hollow" does not exist.
 */
export const business = {
  demoMode: true, // adds noindex + the visible sample-site note
  name: 'Boiled Nuts',
  tagline: 'Hot boiled peanuts, salted right, out of the pot all day.',
  description:
    'Boiled Nuts is a fictional roadside peanut stand in south Georgia serving regular and Cajun boiled peanuts by the quart, half-gallon and gallon. Sample site.',
  siteUrl: 'https://rileyjensen22.github.io/peanut-test',
  phoneDisplay: '(555) 012-4417',
  phoneE164: '+1-555-012-4417',
  email: 'hello@example.com',
  address: {
    street: '4100 County Road 9 (fictional)',
    city: 'Pecan Hollow',
    region: 'GA',
    postalCode: '00000',
    country: 'US',
  },
  // Generic farmland pin in rural south Georgia; no business at this spot.
  geo: { latitude: 31.62, longitude: -83.86 },
  priceRange: '$',
  currency: 'USD',
  payment: 'Cash or card. Exact change keeps the line moving.',
  formspreeId: '', // e.g. 'xyzabcd' — form posts to https://formspree.io/f/<id> once set
  hours: [
    { label: 'Monday', schema: 'Monday', open: null, close: null },
    { label: 'Tuesday', schema: 'Tuesday', open: null, close: null },
    { label: 'Wednesday', schema: 'Wednesday', open: '10:00', close: '18:00' },
    { label: 'Thursday', schema: 'Thursday', open: '10:00', close: '18:00' },
    { label: 'Friday', schema: 'Friday', open: '10:00', close: '19:00' },
    { label: 'Saturday', schema: 'Saturday', open: '09:00', close: '19:00' },
    { label: 'Sunday', schema: 'Sunday', open: '12:00', close: '17:00' },
  ],
  prices: [
    { size: 'Quart', note: 'One hungry person', regular: 6, cajun: 7 },
    { size: 'Half-gallon', note: 'The drive home', regular: 10, cajun: 12 },
    { size: 'Gallon tub', note: 'Tailgates and porches', regular: 18, cajun: 20 },
  ],
  extras: [
    { name: 'Cold drink', note: 'Glass-bottle cola or sweet tea', price: 2 },
    { name: 'Raw green peanuts, per pound', note: 'In season, for boiling at home', price: 4 },
  ],
} as const;

export type Business = typeof business;
