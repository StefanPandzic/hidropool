// Pool Pricing Information
export const PRICES = {
  // Starting Price
  startingPrice: '16.000€',
  startingPriceNumeric: 16000,

  // Price Range
  minPrice: '16.000 evra',
  maxPrice: '27.000 evra',
  priceRange: '16.000 evra do 27.000 evra i više',

  // Pool Packages
  packages: {
    basic: {
      name: 'Basic – Pametan početak',
      price: '16.000€',
      priceApprox: 'cca 16.000€',
      priceNumeric: 16000,
      dimensions: '6 x 3 metra',
    },
    comfort: {
      name: 'Comfort – Zlatni standard',
      price: '21.000€',
      priceApprox: 'cca 21.000€',
      priceNumeric: 21000,
      dimensions: '8 x 4 metra',
    },
    premier: {
      name: 'Premier – Neograničeni luksuz',
      price: 'Cena po dogovoru',
      priceApprox: 'Cena po dogovoru',
      priceNumeric: null,
      dimensions: 'Personalizovano',
    },
  },
} as const;
