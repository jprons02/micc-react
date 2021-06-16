export const villagePricing = [
  {
    title: (language) => (language ? "Adult Admission" : "Adultos"),
    detail: (language) => "13+",
    price: (language) => "$15.00",
  },
  {
    title: (language) => (language ? "Child Admission" : "Entrada para niños"),
    detail: (language) => "6 — 12",
    price: (language) => "$8.00",
  },
  {
    title: (language) => (language ? "Child Admission" : "Entrada para niños"),
    detail: (language) => (language ? "5 & Under" : "Menores de 5"),
    price: (language) => (language ? "Free" : "Gratis"),
  },
];

export const airboatsPricing = [
  {
    title: (language) => (language ? "Adult Admission" : "Adultos"),
    detail: (language) => (language ? "12 Years Old and Up" : "12 Años Y Mas"),
    price: (language) => "$15",
  },
  {
    title: (language) => (language ? "Child Admission" : "Niños"),
    detail: (language) => (language ? "6 — 12 Years Old" : "6 – 12 Años"),
    price: (language) => "$8",
  },
  {
    title: (language) => (language ? "Child Admission" : "Niños"),
    detail: (language) =>
      language ? "Under 6 Years Old" : "Menores De 6 Años",
    price: (language) => (language ? "Free" : "Gratis"),
  },
  {
    title: (language) =>
      language
        ? "Private Tour, 30 Minutes"
        : `Tour de Grupo Privado – 30 minutos`,
    detail: (language) =>
      language
        ? "Minimum Six People Per Boat"
        : "Mínimo De 6 Pasajeros Por Bote",
    price: (language) => "$150",
  },
  {
    title: (language) =>
      language ? "Private Tour, One Hour" : "Tour de Grupo Privado – Una Hora",
    detail: (language) =>
      language
        ? "Minimum Eight People Per Boat"
        : "Mínimo De 8 Pasajeros Por Bote",
    price: (language) => "$300",
  },
];
