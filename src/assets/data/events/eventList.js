import React from 'react';
import { eventbriteIDs } from 'assets/data/events/eventbriteIDs.js';
//import aid2021 from 'assets/media/video/AID_savethedate_spot_30sec.mp4';
import aid2021poster from 'assets/media/img/events/aid/21/savethedatePoster.jpg';
import carBikeShow from 'assets/media/img/events/eventsList/carAndBike.jpg';
import carBikeShowFlyer from 'assets/media/img/events/eventsList/carandbikeflyer.jpg';
import boxing1 from 'assets/media/img/events/eventsList/M_R-Boxing-Promotions-Presents--Got-Talent-XXV.jpg';
import boxing2 from 'assets/media/img/events/eventsList/boxing.jpg';
import boxing_610 from 'assets/media/img/events/eventsList/box_6-10.jpeg';
import boxing_thumb2_610 from 'assets/media/img/events/eventsList/boxing_thumb2_6-10.jpg';
import aid2023Thumb from 'assets/media/img/events/eventsList/aid23Thumb.jpg';
import aid2023Flyer from 'assets/media/img/events/eventsList/aid23Flyer.jpg';
import iac2023Thumb from 'assets/media/img/events/eventsList/iac23Thumb.jpg';
import iac2023Flyer from 'assets/media/img/events/eventsList/iac23Flyer.jpg';

import wildlifeFlyer from 'assets/media/img/events/wildlife/wildlifeflyer.jpg';
import wildlifeSponsor1 from 'assets/media/logos/sponsors/wildlifeEvent/BassPro Official Logo.png';
import wildlifeSponsor2 from 'assets/media/logos/sponsors/wildlifeEvent/Fish&Wildlife_Logo.jpeg';
import wildlifeSponsor3 from 'assets/media/logos/sponsors/wildlifeEvent/LOGOm3x.jpg';
import wildlifeSponsor4 from 'assets/media/logos/sponsors/wildlifeEvent/Invasive-Species-Brewing.jpg';
import wildlifeSponsor5 from 'assets/media/logos/sponsors/wildlifeEvent/EVERGLADESFISHINGCO.jpg';
import wildlifeSponsor6 from 'assets/media/logos/sponsors/wildlifeEvent/Iggies store logo.png';

export const events = () => {
  return [
    /* VIRTUAL EVENT THAT LINKS DIRECTLY TO EVENT
    {
      title: "American Indian Day (Virtual Event)",
      type: "virtual",
      link: "/virtual-event/aid",
      category: "",
      annual: true,
      admission: language ? "Free - $10" : "Gratis - $10",
      startDate: "9/20/2021",
      endDate: "9/25/2021",
      excerpt: language
        ? "“A Celebration of Indigenous Nations” is a week-long virtual festival including performances and presentations showcasing the culture and traditions of Native American Tribes..."
        : "“A Celebration of Indigenous Nations” (Una Celebración de las Naciones Indígenas) es un festival virtual de una semana de duración que incluye actuaciones y presentaciones que muestran la cultura y las tradiciones de las tribus...",
      fullDescription: [
        language
          ? "Celebrate American Indian Day from September 20 - 25 alongside the Miccosukee Tribe of Indians of Florida. “A Celebration of Indigenous Nations” is a week-long virtual festival including performances and presentations showcasing the culture and traditions of Native American Tribes around the globe. Enjoy this virtual event with the whole family from the comfort of your home and learn about the art, lifestyle and customs of modern-day Natives."
          : "Celebre el Día del Nativo Americano del 20 al 25 de septiembre junto a la Tribu de Indios Miccosukee de Florida. “A Celebration of Indigenous Nations” (Una Celebración de las Naciones Indígenas) es un festival virtual de una semana de duración que incluye actuaciones y presentaciones que muestran la cultura y las tradiciones de las tribus nativas americanas de todo el mundo. Disfrute de este evento virtual con toda la familia desde la comodidad de su hogar y aprenda sobre el arte, el estilo de vida y las costumbres de los nativos de hoy en día.",
      ],
      // format is html or youtube
      video: {
        format: "html",
        src: aid2021,
        poster: aid2021poster,
      },
      eventbriteButton: [
        {
          name: language ? "REGISTER HERE" : "REGÍSTRESE AQUÍ",
          eventbrite: {
            eventId: eventbriteIDs.aid2021,
            modalTriggerElementId: "example-widget-trigger",
          },
          href: "",
          target: "",
        },
      ],
    },
    */
    {
      id: '13',
      thumbnail: iac2023Thumb,
      titleEn: 'Miccosukee Indian Arts & Crafts Festival 2023',
      titleSp: 'Miccosukee Indian Arts & Crafts Festival 2023',
      type: 'standard',
      flyer: {
        img: iac2023Flyer,
        alt: 'image with details of the American Indian Day event in 2023',
      },
      category: '',
      admissionEn: 'TBD',
      admissionSp: 'TBD',
      startDate: '12/28/2023',
      endDate: '12/31/2023',
      startTime: '10:00 A.M.',
      endTime: '5:00 P.M.',
      excerptEn:
        'Gather at the Miccosukee Indian Village festival grounds for indigenous music and dance...',
      excerptSp:
        'Visita el área de festivales del Miccosukee Indian Village para presenciar música y danzas...',
      fullDescriptionEn: [
        'Gather at the Miccosukee Indian Village festival grounds for indigenous music and dance performances, an artisan market, alligator demonstrations, and more at the Miccosukee Indian Arts & Crafts Festival, Thursday, December 28 through Sunday, December 31, from 10 AM – 5 PM. Take part in our holiday tradition with your family!',
      ],
      fullDescriptionSp: [
        'Visita el área de festivales del Miccosukee Indian Village para presenciar música y danzas indígenas, un mercado artesanal, demostraciones de caimanes y más en el Miccosukee Indian Arts & Crafts Festival, del jueves 28 de diciembre al domingo 31 de diciembre, de 10 AM a 5 PM. ¡Participa en nuestra tradición navideña con tu familia!',
      ],
      /*
buttons: [
{
  key: 1,
  nameEn: 'PURCHASE TICKETS',
  nameSp: 'COMPRA BOLETOS',
  href:
    '',
  target: '_blank',
},
],
*/
    },
    {
      id: '12',
      thumbnail: aid2023Thumb,
      titleEn: 'American Indian Day 2023',
      titleSp: 'American Indian Day 2023',
      type: 'standard',
      flyer: {
        img: aid2023Flyer,
        alt: 'image with details of the American Indian Day event in 2023',
      },
      category: '',
      admissionEn: 'Free',
      admissionSp: 'Gratis',
      startDate: '9/23/2023',
      endDate: '9/24/2023',
      startTime: '',
      endTime: '',
      excerptEn:
        'Celebrate American Indian Day with the Miccosukee Tribe of Indians...',
      excerptSp:
        'Celebra el Día del Indio Americano con la Tribu Miccosukee de Indios de Florida...',
      fullDescriptionEn: [
        'Celebrate American Indian Day with the Miccosukee Tribe of Indians of Florida on Saturday, September 23, and Sunday, September 24, at Miccosukee Casino & Resort. Admission is free and includes fun activities the whole family will enjoy.',
        'Learn about the Miccosukee Tribe and other indigenous communities in this cultural event with food and craft vendors, alligator demonstrations, airboat rides, a Miccosukee fashion show, carnival rides, a petting zoo, and many more surprises!',
        'Join us for a pre-festival movie night at sundown on Friday, September 22, featuring films by Miccosukee director Montana Cypress.',
      ],
      fullDescriptionSp: [
        'Celebra el Día del Indio Americano con la Tribu Miccosukee de Indios de Florida el sábado, 23 y el domingo, 24 de septiembre en Miccosukee Casino & Resort. La entrada es gratuita e incluye actividades divertidas que disfrutará toda la familia.',
        'Aprende sobre la Tribu Miccosukee y otras comunidades indígenas en este evento cultural con vendedores de alimentos y artesanías, demostraciones de caimanes, paseos en hidrodeslizador, un desfile de modas Miccosukee, juegos mecánicos, un zoológico interactivo y muchas sorpresas más.',
        'También tendremos una noche de cine previa al festival al atardecer del viernes, 22 de septiembre, con películas del director Miccosukee Montana Cypress.',
      ],
      /*
  buttons: [
    {
      key: 1,
      nameEn: 'PURCHASE TICKETS',
      nameSp: 'COMPRA BOLETOS',
      href:
        '',
      target: '_blank',
    },
  ],
  */
    },
    /*
    {
      id: '11',
      thumbnail: boxing_thumb2_610,
      titleEn:
        'M&R Boxing Promotions & Chirino Promotions Presents: Fight Night in Miami',
      titleSp:
        'M&R Boxing Promotions y Chirino Promotions Presentan: Noche de Boxeo en Miami',
      type: 'standard',
      flyer: {
        img: boxing_610,
        alt: 'image with details of the boxing event',
      },
      category: '',
      admissionEn: 'TBA',
      admissionSp: 'Por Anunciarse',
      startDate: '6/10/2023',
      endDate: '6/10/2023',
      startTime: '6:00 P.M.',
      endTime: 'TBD',
      excerptEn:
        'Experience the intensity of live boxing action with new international fighters facing...',
      excerptSp:
        'Experimente la intensidad de la acción del boxeo en vivo con nuevo talento internacional enfrentándose en...',
      fullDescriptionEn: [
        'Experience the intensity of live boxing action with new international fighters facing off in the ring at Miccosukee Casino & Resort. Doors open at 6 PM in the 2nd Floor Ballrooms.',
      ],
      fullDescriptionSp: [
        'Experimente la intensidad de la acción del boxeo en vivo con nuevo talento internacional enfrentándose en el ring en Miccosukee Casino & Resort. Las puertas abren a las 6 PM en los salones de baile del segundo piso.',
      ],
      buttons: [
        {
          key: 1,
          nameEn: 'PURCHASE TICKETS',
          nameSp: 'COMPRA BOLETOS',
          href:
            '',
          target: '_blank',
        },
      ],
    },
    */
    {
      id: '10',
      thumbnail: carBikeShow,
      titleEn: 'Bike & Car Nights Krome at Miccosukee Casino & Resort',
      titleSp: 'Noche de Autos y Motos Krome en Miccosukee Casino & Resort',
      type: 'standard',
      flyer: {
        img: carBikeShowFlyer,
        alt: 'image with details of the car and bike show',
      },
      category: '',
      admissionEn:
        'Free Walk-in Entry, $5 to Park in Event Space. It’s an additional $5 to compete in the event show.',
      admissionSp:
        'Entrada gratuita, $5 para estacionar su auto adentro del evento. Son $5 adicionales para competir en el programa del evento.',
      startDate: '5/4/2023',
      endDate: '5/4/2023',
      startTime: '6:00 P.M.',
      endTime: '10:00 P.M.',
      excerptEn:
        'Check out amazing rides, food trucks, drinks, music, prizes, and more!',
      excerptSp:
        '¡Echa un vistazo a increíbles carros y disfruta variedad de comida, bebidas, música, premios y mucho más!',
      fullDescriptionEn: [
        'Check out amazing rides, food trucks, drinks, music, prizes, and more!',
        'Hosted by Bike & Car Nights Krome in partnership with Evolution Performance Cycles, Hooligan Culture, Miami Infinity, and Onikillaz.',
        'Sponsored by Spritzer CDJR and Sawgrass Ford.',
      ],
      fullDescriptionSp: [
        '¡Echa un vistazo a increíbles carros y disfruta variedad de comida, bebidas, música, premios y mucho más!',
        'Presentado por Bike & Car Nights Krome en colaboración con Evolution Performance Cycles, Hooligan Culture, Miami Infinity y Onikillaz.',
        `Patrocinado por Spritzer CDJR y Sawgrass Ford.`,
      ],
    },
    {
      id: '9',
      thumbnail: boxing1,
      titleEn: 'M&R Boxing Promotions Presents: Got Talent XXV',
      titleSp: 'M&R Boxing Promotions Presenta: Got Talent XXV',
      type: 'standard',
      flyer: {
        img: boxing2,
        alt: 'image with details of the boxing event',
      },
      category: '',
      admissionEn: 'Starting from $50',
      admissionSp: 'Comenzando en $50',
      startDate: '4/29/2023',
      endDate: '4/29/2023',
      startTime: '6:00 P.M.',
      endTime: '12:30 A.M.',
      excerptEn:
        'Boxing fans, get ready for an exciting night of fights with M&R Boxing Promotions...',
      excerptSp:
        'Aficionados al boxeo, ¡prepárense para una emocionante noche de peleas con M&R Boxing Promotions...',
      fullDescriptionEn: [
        'Boxing fans, get ready for an exciting night of fights with M&R Boxing Promotions, bringing you young and upcoming talent to the ring, from every corner of the world!',
        'Miccosukee Casino & Resort (2nd Floor Ballrooms)',
      ],
      fullDescriptionSp: [
        'Aficionados al boxeo, ¡prepárense para una emocionante noche de peleas con M&R Boxing Promotions, que les trae al cuadrilátero jóvenes y futuros talentos de todos los rincones del mundo!',
        'Miccosukee Casino & Resort (Salas de Baile del Segundo Piso)',
      ],
      buttons: [
        {
          key: 1,
          nameEn: 'PURCHASE TICKETS',
          nameSp: 'COMPRA BOLETOS',
          href:
            'https://www.eventbrite.com/e/mr-boxing-promotion-presents-season-5-got-talent-xxv-tickets-610615927677',
          target: '_blank',
        },
      ],
    },
    {
      id: '8',
      titleEn: 'A Guarachar Concert with Melena Burke, Albita, and Luis Bofill',
      titleSp: 'Concierto de Guaracha con Melena Burke, Albita y Luis Bofill',
      type: 'standard',
      category: '',
      admissionEn: 'Free',
      admissionSp: 'Gratis',
      startDate: '3/18/2023',
      endDate: '3/18/2023',
      startTime: '10:00 A.M.',
      endTime: '2:00 P.M.',
      excerptEn:
        'Call 305-677-2250 to reserve your spot. Sponsored by ClinicalCare Medical Centers.',
      excerptSp:
        'Llame ahora para reservar su asiento 305-677-2250. Patrocinado por ClinicalCare Medical Centers.',
      fullDescriptionEn: [
        'Call 305-677-2250 to reserve your spot.',
        'Sponsored by ClinicalCare Medical Centers.',
      ],
      fullDescriptionSp: [
        'Llame ahora para reservar su asiento 305-677-2250.',
        'Patrocinado por ClinicalCare Medical Centers.',
      ],
    },

    {
      id: '7',
      titleEn: 'Removal of the Swamp Invaders Fishing Tournament',
      titleSp: 'Removal of the Swamp Invaders Fishing Tournament',
      type: 'standard',
      flyer: {
        img: wildlifeFlyer,
        alt: 'image with details of the wildlife event.',
        link:
          'https://www.eventbrite.com/e/2023-removal-of-the-swamp-invaders-fishing-tournament-tickets-520595263447',
      },
      //link: "/virtual-event/aid",
      category: '',
      //annual: true,
      admissionEn:
        '$25 for 11 & Up, $15 for 10 & Under - Includes t-shirt. First 10 kids to register receive live dozen shiners.',
      admissionSp:
        'Tarifas de Inscripción: $25 para mayores de 11 años, $15 para menores de 10 años - Incluye camiseta y boleto para la rifa. Los primeros 10 niños que se registren recibirán una docena de carnada natural para pescar.',
      startDate: '3/24/2023',
      endDate: '3/25/2023',
      excerptEn:
        'Fishing will begin at 7:00 P.M. on March 24th, 2023 and end prior to 3:00 P.M. on March 25th, 2023. This tournament aims to inform the public about the negative effects of exotic fish and encourages...',
      excerptSp:
        'La pesca comienza el 24 de marzo de 2023 a las 7 P.M. y finaliza el 25 de marzo de 2023 antes de las 3 P.M. Este torneo tiene como objetivo informar al público sobre los efectos nocivos de los peces exóticos y fomentar...',
      fullDescriptionEn: [
        'Over $4,000 in cash prizes and giveaways; brought to you by the Miccosukee Fish & Wildlife Department. This tournament aims to inform the public about the negative effects of exotic fish and encourages their removal and consumption.',
        '- Fishing begins on March 24, 2023, at 7 PM and ends on March 25, 2023, before 3 PM.',
        '- Registration Fees: $25 for 11 & Up, $15 for 10 & Under - Includes t-shirt. First 10 kids to register receive live dozen shiners.',
        '- Location: Miccosukee Indian Village, 500 US Highway 41 Miami, FL 33194',
        '*Questions? Contact the Miccosukee Fish & Wildlife Department at 305-223-8380 ext. 2242.',
      ],
      fullDescriptionSp: [
        'Más de $4,000 en premios en efectivo y regalos; presentado por el Departamento de Pesca y Vida Silvestre Miccosukee. Este torneo tiene como objetivo informar al público sobre los efectos nocivos de los peces exóticos y fomentar su extracción y consumo.',
        '- La pesca comienza el 24 de marzo de 2023 a las 7 PM y finaliza el 25 de marzo de 2023 antes de las 3 PM.',
        '- Tarifas de Inscripción: $25 para mayores de 11 años, $15 para menores de 10 años - Incluye camiseta. Los primeros 10 niños que se registren recibirán una docena de carnada natural para pescar.',
        '- Ubicación: Miccosukee Indian Village, 500 US Highway 41 Miami, FL 33194',
        '*¿Preguntas? Comuníquese con el Departamento de Pesca y Vida Silvestre Miccosukee al 305-223-8380 ext. 2242.',
      ],
      sponsors: [
        {
          name: 'bass pro shops',
          image: wildlifeSponsor1,
          imageStyle: {
            display: 'block',
            maxWidth: '190px',
            width: '100%',
            marginBottom: '25px',
            marginTop: '25px',
          },
          //link: '',
        },
        {
          name: 'fish and wildlife',
          image: wildlifeSponsor2,
          imageStyle: {
            display: 'block',
            maxWidth: '160px',
            width: '100%',
            marginBottom: '25px',
            marginTop: '25px',
          },
          //link: '',
        },
        {
          name: 'Monster3X Concept Lures',
          image: wildlifeSponsor3,
          imageStyle: { display: 'block', maxWidth: '250px', width: '100%' },
          //link: 'https://monster3xusa.com/',
        },
        {
          name: 'Invasive Species Brewing',
          image: wildlifeSponsor4,
          imageStyle: {
            marginTop: '30px',
            display: 'block',
            maxWidth: '120px',
            width: '100%',
          },
          //link: 'https://www.facebook.com/IggiesBaitTackle/',
        },
        {
          name: 'Everglades Fishing Co',
          image: wildlifeSponsor5,
          imageStyle: {
            marginTop: '30px',
            display: 'block',
            maxWidth: '170px',
            width: '100%',
          },
          //link: 'https://www.facebook.com/IggiesBaitTackle/',
        },
        {
          name: "Iggie's Bait & Tackle",
          image: wildlifeSponsor6,
          imageStyle: {
            marginTop: '30px',
            display: 'block',
            maxWidth: '100px',
            width: '100%',
          },
          //link: 'https://www.facebook.com/IggiesBaitTackle/',
        },
      ],
      buttons: [
        {
          key: 1,
          nameEn: 'Register',
          nameSp: 'Registrarse',
          href:
            'https://www.eventbrite.com/e/2023-removal-of-the-swamp-invaders-fishing-tournament-tickets-520595263447',
          target: '_blank',
        },
      ],
    },
  ];
};

/* NOTES AND OLD EVENTS TO SAVE
    {
      title: 'American Indian Day (Virtual Event)',
      type: 'standard',
      //link: "/virtual-event/aid",
      category: '',
      //annual: true,
      admission: language ? 'Free - $10' : 'Gratis - $10',
      startDate: '9/20/2021',
      endDate: '9/25/2021',
      excerpt: language
        ? '“A Celebration of Indigenous Nations” is a week-long virtual festival including performances and presentations showcasing the culture and traditions of Native American Tribes...'
        : '“A Celebration of Indigenous Nations” (Una Celebración de las Naciones Indígenas) es un festival virtual de una semana de duración que incluye actuaciones y presentaciones que muestran la cultura y las tradiciones de las tribus...',
      fullDescription: [
        language
          ? 'Celebrate American Indian Day from September 20 - 25 alongside the Miccosukee Tribe of Indians of Florida. “A Celebration of Indigenous Nations” is a week-long virtual festival including performances and presentations showcasing the culture and traditions of Native American Tribes around the globe. Enjoy this virtual event with the whole family from the comfort of your home and learn about the art, lifestyle and customs of modern-day Natives.'
          : 'Celebre el Día del Nativo Americano del 20 al 25 de septiembre junto a la Tribu de Indios Miccosukee de Florida. “A Celebration of Indigenous Nations” (Una Celebración de las Naciones Indígenas) es un festival virtual de una semana de duración que incluye actuaciones y presentaciones que muestran la cultura y las tradiciones de las tribus nativas americanas de todo el mundo. Disfrute de este evento virtual con toda la familia desde la comodidad de su hogar y aprenda sobre el arte, el estilo de vida y las costumbres de los nativos de hoy en día.',
      ],
    },
    */
/*
    {
      title: "Freedom Festival",
      // type can be "standard" or "virtual"
      type: "standard",
      // category is if entity specific... ie: golf event or mrg nightlife event, etc...
      category: "Casino & Resort",
      annual: true,
      admission: "Free",
      startDate: "12/26/2020",
      endDate: "12/26/2020",
      startTime: "10:00 A.M.",
      endTime: "5:00 P.M.",
      excerpt:
        "Miccosukee Casino & Resort’s annual Fourth of July celebration is back and better than ever! This FREE family-oriented event features music, food, carnival rides, refreshing water slides, exhilarating airboat rides, alligator wrestling shows, fireworks, and more. There will be a variety of vendors onsite with delicious food and beverage options.",
      fullDescription: [
        "Miccosukee Casino & Resort’s annual Fourth of July celebration is back and better than ever! This FREE family-oriented event features music, food, carnival rides, refreshing water slides, exhilarating airboat rides, alligator wrestling shows, fireworks, and more. There will be a variety of vendors onsite with delicious food and beverage options.",
        "Everyone will be able to enjoy the FREE concert starting at 5:30 p.m. with Miami-based folk singer Keith Johns and Grammy Award winning artist, LeAnn Rimes! Don’t miss out on the 4th of July event everyone will be talking about!",
      ],
      schedule: [
        {
          area: "Festival Grounds",
          description: "Doors Open",
          startTime: "10:00 A.M.",
          endTime: "",
        },
        {
          area: "Festival Grounds",
          description: "Airboat Rides",
          startTime: "10:00 A.M.",
          endTime: "",
        },
      ],
      buttons: [
        {
          name: "Register",
          href: "",
          target: "_blank",
        },
        {
          name: "Schedule",
          href: "",
          target: "_blank",
        },
        {
          name: "Map",
          href: "",
          target: "_blank",
        },
        {
          name: "Directions",
          href: "",
          target: "_blank",
        },
      ],
    },
    {
      title: "Golf Festival",
      type: "standard",
      category: "Golf",
      annual: true,
      admission: "Free",
      startDate: "12/26/2020",
      endDate: "01/01/2021",
      startTime: "10:00 A.M.",
      endTime: "5:00 P.M.",
      excerpt:
        "Miccosukee Casino & Resort’s annual Fourth of July celebration is back and better than ever! This FREE family-oriented event features music, food, carnival rides, refreshing water slides, exhilarating airboat rides, alligator wrestling shows, fireworks, and more. There will be a variety of vendors onsite with delicious food and beverage options.",
      fullDescription: [
        "Miccosukee Casino & Resort’s annual Fourth of July celebration is back and better than ever! This FREE family-oriented event features music, food, carnival rides, refreshing water slides, exhilarating airboat rides, alligator wrestling shows, fireworks, and more. There will be a variety of vendors onsite with delicious food and beverage options.",
        "Everyone will be able to enjoy the FREE concert starting at 5:30 p.m. with Miami-based folk singer Keith Johns and Grammy Award winning artist, LeAnn Rimes! Don’t miss out on the 4th of July event everyone will be talking about!",
      ],
      schedule: [
        {
          area: "Festival Grounds",
          description: "Doors Open",
          startTime: "10:00 A.M.",
          endTime: "",
        },
        {
          area: "Festival Grounds",
          description: "Airboat Rides",
          startTime: "10:00 A.M.",
          endTime: "",
        },
      ],
      buttons: [
        {
          name: "Register",
          href: "",
          target: "_blank",
        },
      ],
    },
    {
      id: '2',
      titleEn: 'Carritos y Cafecito',
      titleSp: 'Carritos y Cafecito',
      type: 'standard',
      category: '',
      admissionEn: 'FREE',
      admissionSp: 'GRATIS',
      startDate: '8/6/2022',
      endDate: '8/6/2022',
      startTime: '8:00 A.M.',
      endTime: '12:00 P.M.',
      excerptEn:
        'Cruise down nostalgia highway and show off your classic & specialty ride while getting your caffeine fix...',
      excerptSp:
        '¡Navegue por la autopista de la nostalgia y presuma de su vehículo clásico y especializado mientras obtiene su dosis de cafeína...',
      fullDescriptionEn: [
        'Cruise down nostalgia highway and show off your classic & specialty ride while getting your caffeine fix on Saturday, August 6, from 8 AM - 12 PM at Miccosukee Casino & Resort!',
        'Carritos y Cafecito, hosted by Road Rage Media, invites car enthusiasts to show off their specialty vehicles, motorcycles, trucks, and Jeeps while enjoying coffee and plenty of food trucks! Spectators are welcome!',
        'Cars, coffee, and tasty grub on a Saturday are way better than brunch. We hope to see you there!',
      ],
      fullDescriptionSp: [
        '¡Navegue por la autopista de la nostalgia y presuma de su vehículo clásico y especializado mientras obtiene su dosis de cafeína el sábado, 6 de agosto, de 8 AM a 12 PM en Miccosukee Casino & Resort!',
        'Carritos y Cafecito, organizado por Road Rage Media, invita a los entusiastas de automóviles a mostrar sus vehículos especiales, motos, camionetas y Jeeps mientras disfrutan de un café y muchos camiones de comida. ¡Los espectadores son bienvenidos!',
        'Un sábado con carros, café y comida son mejores que el brunch. ¡Esperamos verlos allí!',
      ],
    },
    {
      id: '1',
      titleEn: 'Wheels & Meals',
      titleSp: 'Wheels & Meals',
      type: 'standard',
      category: '',
      admissionEn:
        '$5 cover per specialty vehicles. Free general parking for regular cars.',
      admissionSp:
        '$5 cover per specialty vehicles. Free general parking for regular cars.',
      startDate: '7/14/2022',
      endDate: '7/14/2022',
      startTime: '7:00 P.M.',
      endTime: '11:00 P.M.',
      excerptEn: 'A car, truck, jeep and motorcycle food truck festival...',
      excerptSp: 'A car, truck, jeep and motorcycle food truck festival...',

      fullDescriptionEn: [
        'Roadrage Media presents Wheels & Meals - a car, truck, jeep and motorcycle food truck festival.',
      ],
      fullDescriptionSp: [
        'Roadrage Media presents Wheels & Meals - a car, truck, jeep and motorcycle food truck festival.',
      ],
    },

    {
      id: '6',
      titleEn: 'Miccosukee Indian Arts & Crafts Festival',
      titleSp: 'Miccosukee Indian Arts & Crafts Festival',
      type: 'standard',
      category: '',
      admissionEn:
        '$20 Adults (12+), $10 Children (6-12), $15 Teachers, First Responders & Military Personnel (with valid ID), Free Entry for Miccosukee Community & Tribal Members',
      admissionSp:
        '$20 Adultos (12+), $10 Niños (6-12), $15 Maestros, Socorristas y Personal Militar (con identificación válida), Entrada Gratis para Miembros Tribales y de la Comunidad Miccosukee',
      startDate: '12/29/2022',
      endDate: '12/31/2022',
      startTime: '10:00 A.M.',
      endTime: '5:00 P.M.',
      excerptEn:
        'Native American culture comes alive in a three-day gathering of music, arts, and entertainment in the heart of the Florida Everglades...',
      excerptSp:
        'La cultura nativa americana cobra vida en una reunión de tres días de música, arte y entretenimiento en el corazón de los Everglades de Florida...',
      fullDescriptionEn: [
        'Location: Historic Miccosukee Indian Village Fairgrounds - 500 US Hwy 41, Miami, FL 33194',
        'Native American culture comes alive in a three-day gathering of music, arts, and entertainment in the heart of the Florida Everglades, December 29 – 31, 2022, from 10 AM – 5 PM at the historic Miccosukee Indian Village festival grounds, 20 miles west of Krome Avenue and SW 8th Street.',
        'Gather in the Everglades for indigenous music and dance performances, an artisan market featuring crafts and authentic cuisine, and alligator demonstrations teaching this traditional art of survival.',
        'Live Music & Dance Performances by: Joe Tohonnie Jr. and the White Mountain Apache Crown Dancers, Iroquois Sky Dancers & Native Pride.',
        'Airboat rides are available across the street.',
        "You're invited to take part in our holiday tradition with your family.",
        'FREE shuttle service to and from Miccosukee Casino & Resort / Indian Village available all day from 9:30 AM to 5 PM.',
      ],
      fullDescriptionSp: [
        'Lugar: Área de ferias del Miccosukee Indian Village - 500 US Hwy 41, Miami, FL 33194',
        'La cultura nativa americana cobra vida en una reunión de tres días de música, arte y entretenimiento en el corazón de los Everglades de Florida, 29 al 31 de diciembre, de 10 AM a 5 PM, 20 millas al oeste de la Avenida Krome y la Calle 8 del suroeste.',
        'Visite los Everglades para disfrutar de espectáculos de música y danza indígenas, un mercado artisanal, cocina auténtica, y demostraciones de caimanes que enseñan este arte tradicional de supervivencia.',
        'Actuaciones de danza y música en vivo a cargo de: Joe Tohonnie Jr. y White Mountain Apache Crown Dancers, Iroquois Sky Dancers y Native Pride.',
        'Los paseos en hidrodeslizador están disponibles al otro lado de la calle.',
        'Los invitamos a participar en nuestra tradición navideña con su familia.',
        'Servicio de transporte GRATIS desde y hacia Miccosukee Casino & Resort / Indian Village disponible todo el día de 9:30 AM a 5 PM.',
      ],
      eventbriteButton: [
        {
          name: language ? 'REGISTER HERE' : 'REGÍSTRESE AQUÍ',
          eventbrite: {
            eventId: eventbriteIDs.aid2022,
            modalTriggerElementId: 'example-widget-trigger',
          },
          href: '',
          target: '',
        },
      ],
      buttons: [
        {
          key: 1,
          nameEn: 'Tickets',
          nameSp: 'Entradas',
          href:
            'https://www.eventbrite.com/e/miccosukee-indian-arts-crafts-festival-2022-tickets-453191858047?aff=website',
          target: '_blank',
        },
      ],
    },
    {
      id: '5',
      titleEn: 'American Indian Day',
      titleSp: 'American Indian Day',
      type: 'standard',
      category: '',
      admissionEn: 'FREE',
      admissionSp: 'GRATIS',
      startDate: '9/24/2022',
      endDate: '9/24/2022',
      startTime: '12:00 P.M.',
      endTime: '6:00 P.M.',
      excerptEn:
        'Miccosukee Celebrates American Indian Day with a fun-packed event on Saturday, September 24, at Miccosukee Casino & Resort! Admission is free, so bring the whole tribe!...',
      excerptSp:
        'Miccosukee celebra el Día del Indio Americano (American Indian Day) con un evento lleno de diversión el sábado, 24 de septiembre en Miccosukee Casino & Resort. La entrada es gratuita, ¡así que traiga a toda su tribu!...',
      fullDescriptionEn: [
        'Miccosukee Celebrates American Indian Day with a fun-packed event on Saturday, September 24, at Miccosukee Casino & Resort! Admission is free, so bring the whole tribe!',
        'On American Indian Day, we honor the culture and traditions of indigenous First Nations and their contributions to the world.',
        'This family-friendly festival provides a glimpse into the Miccosukee Tribe’s culture as we host indigenous craft and food vendors, alligator wrestling shows, airboat rides, and more. Visit us and connect with Miami’s original locals in the heart of the Florida Everglades.',
      ],
      fullDescriptionSp: [
        'Miccosukee celebra el Día del Indio Americano (American Indian Day) con un evento lleno de diversión el sábado, 24 de septiembre en Miccosukee Casino & Resort. La entrada es gratuita, ¡así que traiga a toda su tribu!',
        'En el Día del Indio Americano, honramos la cultura y las tradiciones de las Primeras Naciones indígenas y sus contribuciones al mundo.',
        'Este festival familiar ofrece un vistazo a la cultura de la tribu Miccosukee mientras presentamos vendedores de comida y artesanía indígena, espectáculos de lucha con lagartos, paseos en hidrodeslizador y más. Visítenos y conéctese con los habitantes originales de Miami en el corazón de los Everglades de Florida.',
      ],
      eventbriteButton: [
        {
          name: language ? 'REGISTER HERE' : 'REGÍSTRESE AQUÍ',
          eventbrite: {
            eventId: eventbriteIDs.aid2022,
            modalTriggerElementId: 'example-widget-trigger',
          },
          href: '',
          target: '',
        },
      ],
      buttons: [
        {
          key: 1,
          nameEn: 'Register',
          nameSp: 'Regístrese',
          href:
            'https://www.eventbrite.com/e/miccosukee-celebrates-american-indian-day-registration-389611878617?aff=website',
          target: '_blank',
        },
      ],
    },
    {
      id: '4',
      titleEn: 'Florida Mega Market',
      titleSp: 'Florida Mega Market',
      type: 'standard',
      category: '',
      admissionEn: 'FREE',
      admissionSp: 'GRATIS',
      startDate: '9/4/2022',
      endDate: '9/4/2022',
      startTime: '11:00 A.M.',
      endTime: '7:00 P.M.',
      excerptEn:
        'Skip the mall and experience an outdoor shopping event like no other at Miccosukee Casino & Resort! Buy unique items from...',
      excerptSp:
        '¡Olvide el centro comercial y experimente un evento de compras al aire libre como ningún otro en Miccosukee Casino & Resort! Compre artículos únicos de...',
      fullDescriptionEn: [
        'Skip the mall and experience an outdoor shopping event like no other at Miccosukee Casino & Resort! Buy unique items from hundreds of vendors, chow down with delicious food trucks, and dance the afternoon away with live music and entertainment.',
      ],
      fullDescriptionSp: [
        '¡Olvide el centro comercial y experimente un evento de compras al aire libre como ningún otro en Miccosukee Casino & Resort! Compre artículos únicos de cientos de vendedores, disfrute de deliciosos camiones de comida y baile toda la tarde con música en vivo y entretenimiento.',
      ],
    },
    {
      id: '3',
      titleEn: 'Labor Day Weekend CAR & BIKE SHOW',
      titleSp: 'SHOW DE CARROS Y MOTOS el Fin de Semana de Labor Day',
      type: 'standard',
      category: '',
      admissionEn: 'FREE',
      admissionSp: 'GRATIS',
      startDate: '9/3/2022',
      endDate: '9/3/2022',
      startTime: '11:00 A.M.',
      endTime: '5:00 P.M.',
      excerptEn:
        'Calling all gear heads! Rev up your engines and head down to Miccosukee Casino & Resort for a...',
      excerptSp:
        '¡Llamando a todos los fanáticos de autos! ¡Aceleren sus motores y diríjanse a Miccosukee Casino & Resort para un...',
      fullDescriptionEn: [
        'Calling all gear heads! Rev up your engines and head down to Miccosukee Casino & Resort for a spectacular Car & Bike Show on Saturday, September 3! Check out amazing rides, food trucks, music, vendors, and contests in this outdoor event rated E for everyone!',
      ],
      fullDescriptionSp: [
        '¡Llamando a todos los fanáticos de autos! ¡Aceleren sus motores y diríjanse a Miccosukee Casino & Resort para un espectacular show de Carros y Motos el sábado, 3 de septiembre! ¡Tendremos increíbles vehículos, camiones de comida, música, vendedores y concursos en este evento al aire libre apto para todo público!',
      ],
    },
    */
