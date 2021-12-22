// Open or Closed

export const mrgStatus = {
  gaming: [
    {
      name: (language) =>
        language ? "General Gaming Floor" : "Área de máquinas",
      isOpen: true,
      details: (language) => [
        language
          ? "Every other machine will be available for play in order to abide by social distancing standards"
          : "De acuerdo a las normas de distanciamiento social, habrá una máquina vacía entre cada máquina de juego",
      ],
    },
    {
      name: (language) => "Bingo",
      isOpen: true,
    },
    {
      name: (language) => (language ? "Poker Room" : "Sala de Póker"),
      isOpen: false,
    },
  ],
  dining: [
    {
      name: (language) => "Gift Shop",
      isOpen: true,
      details: (language) => [
        language
          ? "Hours of Operation: Monday – Sunday: 12 PM – 8 PM"
          : "Horio de Operaciones: lunes - domingo: 12 PM - 8 PM",
        language
          ? "Will have masks and gloves available for sale"
          : "Tendrá mascarillas y guantes a la venta",
      ],
    },
    {
      name: (language) => "Sawgrass Café",
      isOpen: true,
    },
    {
      name: (language) => "Empeeke Aya Deli",
      isOpen: false,
    },
    {
      name: (language) => "Max's",
      isOpen: true,
    },
    {
      name: (language) => "Service Bars",
      isOpen: true,
    },
    {
      name: (language) => "Empeeke Aaweeke International Buffet",
      isOpen: false,
    },
    {
      name: (language) => "Bravo Bravissimo",
      isOpen: false,
    },
    {
      name: (language) =>
        language
          ? "Café Hammock (Breakfast, Friday - Sunday only)"
          : "Café Hammock (Desayuno, viernes a domingo solamente)",
      isOpen: true,
    },
    {
      name: (language) => "Cypress Lounge",
      isOpen: false,
    },
    {
      name: (language) => "Martini Bar",
      isOpen: false,
    },
    {
      name: (language) => "Cafeteria",
      isOpen: false,
    },
  ],
  accommodations: {
    isOpen: true,
    details: (language) => [
      language
        ? "Our hotel is now open, welcome back! Guests must be 18 and over to enter our premises. Questions? Please call 305-925-2555."
        : "¡ El hotel ya abierto! Los huéspedes deben tener 18 años o más para ingresar a nuestras instalaciones. ¿Preguntas? Llame al 305-925-2555.",
    ],
  },
  amenities: [
    {
      name: (language) => "Salon & Spa",
      isOpen: false,
    },
    {
      name: (language) => "Club Egret",
      isOpen: false,
    },
    {
      name: (language) => "Pool & Gym",
      isOpen: true,
    },
    {
      name: (language) => "Teen Arcade",
      isOpen: false,
    },
  ],
};
