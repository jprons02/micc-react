// Open or Closed
import { mrgHours } from './hours';
import { renderPoiHoursSimple } from 'services/functions/renderPoiHours.js';

export const mrgStatus = {
  gaming: [
    {
      name: (language) =>
        language ? 'General Casino Floor' : 'Área de máquinas',
      isOpen: true,
      details: (language) => [
        language
          ? 'Every other machine will be available for play in order to abide by social distancing standards'
          : 'De acuerdo a las normas de distanciamiento social, habrá una máquina vacía entre cada máquina de juego',
      ],
    },
    {
      name: (language) => 'Bingo',
      isOpen: true,
    },
    {
      name: (language) => (language ? 'Poker Room' : 'Sala de Póquer'),
      isOpen: false,
    },
  ],
  dining: [
    {
      name: (language) => 'Gift Shop',
      isOpen: true,
      details: (language) => [
        language
          ? 'Hours of Operation: Monday – Sunday: 12 PM – 8 PM'
          : 'Horio de Operaciones: lunes - domingo: 12 PM - 8 PM',
        language
          ? 'Will have masks and gloves available for sale'
          : 'Tendrá mascarillas y guantes a la venta',
      ],
    },
    {
      name: (language) =>
        language
          ? 'Sawgrass Café (Breakfast 9 AM - 11 AM)'
          : 'Sawgrass Café (Desayuno 9 AM - 11 AM)',
      //Sawgrass Café (Breakfast 9 AM – 11 AM)
      isOpen: true,
      hours: mrgHours.poi.sawgrassCafe,
    },
    {
      name: (language) => 'Empeeke Aya Deli',
      isOpen: false,
      hours: mrgHours.poi.deli,
    },
    {
      name: (language) => "Max's",
      isOpen: true,
      hours: mrgHours.poi.maxs,
    },
    {
      name: (language) => 'Service Bars',
      isOpen: true,
    },
    {
      name: (language) => 'Empeeke Aaweeke International Buffet',
      isOpen: false,
      hours: mrgHours.poi.internationalBuffet,
    },
    {
      name: (language) => 'Bravo Bravissimo',
      isOpen: false,
      hours: mrgHours.poi.bravo,
    },
    {
      name: (language) => (language ? 'Café Hammock' : 'Café Hammock'),
      isOpen: true,
      hours: mrgHours.poi.hammock,
    },
    {
      name: (language) => 'Cypress Lounge',
      isOpen: false,
      hours: mrgHours.poi.cypressLounge,
    },
    {
      name: (language) => 'Martini Bar',
      isOpen: false,
      hours: mrgHours.poi.martiniBar,
    },
    {
      name: (language) => 'Cafeteria',
      isOpen: false,
    },
  ],
  accommodations: {
    isOpen: true,
    details: (language) => [
      language
        ? 'Our hotel is now open, welcome back! Guests must be 18 and over to enter our premises. Questions? Please call 305-925-2555.'
        : '¡ El hotel ya abierto! Los huéspedes deben tener 18 años o más para ingresar a nuestras instalaciones. ¿Preguntas? Llame al 305-925-2555.',
    ],
  },
  amenities: [
    {
      name: (language) => 'Salon & Spa',
      isOpen: false,
    },
    {
      name: (language) => 'Club Egret',
      isOpen: false,
    },
    {
      name: (language) => 'Pool & Gym',
      isOpen: true,
    },
    {
      name: (language) => 'Teen Arcade',
      isOpen: false,
    },
  ],
};
