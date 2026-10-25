import { business as b } from '../config/business';

export function buildSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    '@id': `${b.siteUrl}/#stand`,
    name: b.name,
    description: b.description,
    url: `${b.siteUrl}/`,
    telephone: b.phoneE164,
    email: b.email,
    image: `${b.siteUrl}/og.svg`,
    priceRange: b.priceRange,
    servesCuisine: ['Southern', 'Boiled peanuts'],
    paymentAccepted: 'Cash, Credit Card',
    currenciesAccepted: b.currency,
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.address.street,
      addressLocality: b.address.city,
      addressRegion: b.address.region,
      postalCode: b.address.postalCode,
      addressCountry: b.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: b.geo.latitude, longitude: b.geo.longitude },
    openingHoursSpecification: b.hours
      .filter((h) => h.open)
      .map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.schema, opens: h.open, closes: h.close })),
    hasMenu: {
      '@type': 'Menu',
      hasMenuSection: [
        ...(['regular', 'cajun'] as const).map((k) => ({
          '@type': 'MenuSection',
          name: k === 'regular' ? 'Regular boiled peanuts' : 'Cajun boiled peanuts',
          hasMenuItem: b.prices.map((p) => ({
            '@type': 'MenuItem',
            name: `${k === 'regular' ? 'Regular' : 'Cajun'} boiled peanuts, ${p.size.toLowerCase()}`,
            offers: { '@type': 'Offer', price: p[k].toFixed(2), priceCurrency: b.currency },
          })),
        })),
        {
          '@type': 'MenuSection',
          name: 'Extras',
          hasMenuItem: b.extras.map((e) => ({
            '@type': 'MenuItem', name: e.name,
            offers: { '@type': 'Offer', price: e.price.toFixed(2), priceCurrency: b.currency },
          })),
        },
      ],
    },
  };
}
export const serialize = (d: unknown) => JSON.stringify(d).replace(/</g, '\\u003c');
