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
          ? "New hours of operation starting Monday, December 14 are as follows: Monday – Sunday: 12 PM – 8 PM"
          : "Nuevo horario de operaciones comenzando el lunes, 14 de diciembre: lunes-domingo: 12 PM – 8 PM",
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
      name: (language) => "Café Hammock",
      isOpen: false,
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
    isOpen: false,
    details: (language) =>
      language
        ? "The hotel will remain closed until further notice"
        : "El hotel permanecerá cerrado hasta nuevo aviso",
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
      isOpen: false,
    },
    {
      name: (language) => "Teen Arcade",
      isOpen: false,
    },
  ],
};
