export const villagePricing = [
  {
    title: (language) => (language ? 'Adult admission' : 'Adultos'),
    detail: (language) => '13+',
    price: (language) => '$25.00',
  },
  {
    title: (language) => (language ? 'Child admission' : 'Entrada para niños'),
    detail: (language) => '6 — 12',
    price: (language) => '$15.00',
  },
  {
    title: (language) => (language ? 'Child admission' : 'Entrada para niños'),
    detail: (language) => (language ? '5 & under' : 'Menores de 5'),
    price: (language) => (language ? 'Free' : 'Gratis'),
  },
];

export const airboatsPricing = [
  {
    title: (language) => (language ? 'Adult admission' : 'Adultos'),
    detail: (language) => '', //(language ? '12 years old and up' : '12 años y más'),
    price: (language) => '$20',
  },
  {
    title: (language) => (language ? 'Child admission' : 'Niños'),
    detail: (language) => '(6-12)',
    price: (language) => '$12',
  },
  {
    title: (language) => (language ? 'Child admission' : 'Niños'),
    detail: (language) => (language ? '(5 and under)' : '(Menores de 5 años)'),
    price: (language) => (language ? 'Free' : 'Gratis'),
  },
  {
    title: (language) =>
      language
        ? 'Private tour, 30 minutes'
        : `Tour de grupo privado – 30 minutos`,
    detail: (language) =>
      language
        ? 'Up to 6 passengers/boat (each additional person $25)'
        : 'Hasta 6 pasajeros/barco (cada persona adicional $25)​',
    price: (language) => '$150',
  },
  {
    title: (language) =>
      language ? 'Private tour, one hour' : 'Tour de grupo privado – una hora',
    detail: (language) =>
      language
        ? 'Up to 8 passengers/boat (each additional person $55)'
        : 'Hasta 8 pasajeros/barco (cada persona adicional $55)',
    price: (language) => '$300',
  },
];
