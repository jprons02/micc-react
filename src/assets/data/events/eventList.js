import React from 'react';
import { eventbriteIDs } from 'assets/data/events/eventbriteIDs.js';
//import aid2021 from 'assets/media/video/AID_savethedate_spot_30sec.mp4';
import aid2021poster from 'assets/media/img/events/aid/21/savethedatePoster.jpg';

import wildlifeFlyer from 'assets/media/img/events/wildlife/wildlifeflyer.jpg';
import wildlifeSponsor1 from 'assets/media/logos/sponsors/wildlifeEvent/Fish&Wildlife_Logo.jpeg';
import wildlifeSponsor2 from 'assets/media/logos/sponsors/wildlifeEvent/LOGOm3x.jpg';
import wildlifeSponsor3 from 'assets/media/logos/sponsors/wildlifeEvent/Invasive-Species-Brewing.jpg';
import wildlifeSponsor4 from 'assets/media/logos/sponsors/wildlifeEvent/Iggies store logo.png';

export const events = (language) => {
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
    /*
    $20 Adults (12+)
    $10 Children (6-12)
    $15 Teachers, First Responders & Military Personnel (with valid ID)
    Free Entry for Miccosukee Community & Tribal Members
    */

    /*
    A Guarachar Concert with Melena Burke, Albita, and Luis Bofill on Saturday, March 18, 2023 at Miccosukee Casino & Resort.
    10 AM - 2 PM
    Call 305-677-2250 to reserve your spot. Sponsored by ClinicalCare Medical Centers.
    */

    {
      id: '8',
      title: 'A Guarachar Concert with Melena Burke, Albita, and Luis Bofill',
      type: 'standard',
      category: '',
      admission: language ? 'FREE' : 'GRATIS',
      startDate: '3/18/2023',
      endDate: '3/18/2023',
      startTime: '10:00 A.M.',
      endTime: '2:00 P.M.',
      excerpt: language
        ? 'Call 305-677-2250 to reserve your spot. Sponsored by ClinicalCare Medical Centers.'
        : 'Llame ahora para reservar su asiento 305-677-2250. Patrocinado por ClinicalCare Medical Centers.',
      fullDescription: language
        ? [
            'Call 305-677-2250 to reserve your spot.',
            'Sponsored by ClinicalCare Medical Centers.',
          ]
        : [
            'Llame ahora para reservar su asiento 305-677-2250.',
            'Patrocinado por ClinicalCare Medical Centers.',
          ],
    },
    {
      id: '7',
      title: 'Removal of the Swamp Invaders Fishing Tournament',
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
      admission: language
        ? '$25 for 11 & Up, $15 for 10 & Under - Includes t-shirt. First 10 kids to register receive live dozen shiners.'
        : 'Tarifas de Inscripción: $25 para mayores de 11 años, $15 para menores de 10 años - Incluye camiseta y boleto para la rifa. Los primeros 10 niños que se registren recibirán una docena de carnada natural para pescar.',
      startDate: '3/24/2023',
      endDate: '3/25/2023',
      excerpt: language
        ? 'Fishing will begin at 7:00 P.M. on March 24th, 2023 and end prior to 3:00 P.M. on March 25th, 2023. This tournament aims to inform the public about the negative effects of exotic fish and encourages...'
        : 'La pesca comienza el 24 de marzo de 2023 a las 7 P.M. y finaliza el 25 de marzo de 2023 antes de las 3 P.M. Este torneo tiene como objetivo informar al público sobre los efectos nocivos de los peces exóticos y fomentar...',

      fullDescription: language
        ? [
            'Over $4,000 in cash prizes and giveaways; brought to you by the Miccosukee Fish & Wildlife Department. This tournament aims to inform the public about the negative effects of exotic fish and encourages their removal and consumption.',
            '- Fishing begins on March 24, 2023, at 7 PM and ends on March 25, 2023, before 3 PM.',
            '- Registration Fees: $25 for 11 & Up, $15 for 10 & Under - Includes t-shirt. First 10 kids to register receive live dozen shiners.',
            '- Location: Miccosukee Indian Village, 500 US Highway 41 Miami, FL 33194',
            '*Questions? Contact the Miccosukee Fish & Wildlife Department at 305-223-8380 ext. 2242.',
          ]
        : [
            'Más de $4,000 en premios en efectivo y regalos; presentado por el Departamento de Pesca y Vida Silvestre Miccosukee. Este torneo tiene como objetivo informar al público sobre los efectos nocivos de los peces exóticos y fomentar su extracción y consumo.',
            '- La pesca comienza el 24 de marzo de 2023 a las 7 PM y finaliza el 25 de marzo de 2023 antes de las 3 PM.',
            '- Tarifas de Inscripción: $25 para mayores de 11 años, $15 para menores de 10 años - Incluye camiseta. Los primeros 10 niños que se registren recibirán una docena de carnada natural para pescar.',
            '- Ubicación: Miccosukee Indian Village, 500 US Highway 41 Miami, FL 33194',
            '*¿Preguntas? Comuníquese con el Departamento de Pesca y Vida Silvestre Miccosukee al 305-223-8380 ext. 2242.',
          ],
      sponsors: [
        {
          name: '',
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
          name: 'Monster3X Concept Lures',
          image: wildlifeSponsor2,
          imageStyle: { display: 'block', maxWidth: '250px', width: '100%' },
          //link: 'https://monster3xusa.com/',
        },
        {
          name: 'Invasive Species Brewing',
          image: wildlifeSponsor3,
          imageStyle: {
            marginTop: '30px',
            display: 'block',
            maxWidth: '120px',
            width: '100%',
          },
          //link: 'https://www.facebook.com/IggiesBaitTackle/',
        },
        {
          name: "Iggie's Bait & Tackle",
          image: wildlifeSponsor4,
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
          name: 'Register',
          href:
            'https://www.eventbrite.com/e/2023-removal-of-the-swamp-invaders-fishing-tournament-tickets-520595263447',
          target: '_blank',
        },
      ],
    },
    {
      id: '6',
      title: 'Miccosukee Indian Arts & Crafts Festival',
      type: 'standard',
      category: '',
      admission: language
        ? '$20 Adults (12+), $10 Children (6-12), $15 Teachers, First Responders & Military Personnel (with valid ID), Free Entry for Miccosukee Community & Tribal Members'
        : '$20 Adultos (12+), $10 Niños (6-12), $15 Maestros, Socorristas y Personal Militar (con identificación válida), Entrada Gratis para Miembros Tribales y de la Comunidad Miccosukee',
      startDate: '12/29/2022',
      endDate: '12/31/2022',
      startTime: '10:00 A.M.',
      endTime: '5:00 P.M.',
      excerpt: language
        ? 'Native American culture comes alive in a three-day gathering of music, arts, and entertainment in the heart of the Florida Everglades...'
        : 'La cultura nativa americana cobra vida en una reunión de tres días de música, arte y entretenimiento en el corazón de los Everglades de Florida...',

      fullDescription: language
        ? [
            'Location: Historic Miccosukee Indian Village Fairgrounds - 500 US Hwy 41, Miami, FL 33194',
            'Native American culture comes alive in a three-day gathering of music, arts, and entertainment in the heart of the Florida Everglades, December 29 – 31, 2022, from 10 AM – 5 PM at the historic Miccosukee Indian Village festival grounds, 20 miles west of Krome Avenue and SW 8th Street.',
            'Gather in the Everglades for indigenous music and dance performances, an artisan market featuring crafts and authentic cuisine, and alligator demonstrations teaching this traditional art of survival.',
            'Live Music & Dance Performances by: Joe Tohonnie Jr. and the White Mountain Apache Crown Dancers, Iroquois Sky Dancers & Native Pride.',
            'Airboat rides are available across the street.',
            "You're invited to take part in our holiday tradition with your family.",
            'FREE shuttle service to and from Miccosukee Casino & Resort / Indian Village available all day from 9:30 AM to 5 PM.',
          ]
        : [
            'Lugar: Área de ferias del Miccosukee Indian Village - 500 US Hwy 41, Miami, FL 33194',
            'La cultura nativa americana cobra vida en una reunión de tres días de música, arte y entretenimiento en el corazón de los Everglades de Florida, 29 al 31 de diciembre, de 10 AM a 5 PM, 20 millas al oeste de la Avenida Krome y la Calle 8 del suroeste.',
            'Visite los Everglades para disfrutar de espectáculos de música y danza indígenas, un mercado artisanal, cocina auténtica, y demostraciones de caimanes que enseñan este arte tradicional de supervivencia.',
            'Actuaciones de danza y música en vivo a cargo de: Joe Tohonnie Jr. y White Mountain Apache Crown Dancers, Iroquois Sky Dancers y Native Pride.',
            'Los paseos en hidrodeslizador están disponibles al otro lado de la calle.',
            'Los invitamos a participar en nuestra tradición navideña con su familia.',
            'Servicio de transporte GRATIS desde y hacia Miccosukee Casino & Resort / Indian Village disponible todo el día de 9:30 AM a 5 PM.',
          ],
      /*eventbriteButton: [
        {
          name: language ? 'REGISTER HERE' : 'REGÍSTRESE AQUÍ',
          eventbrite: {
            eventId: eventbriteIDs.aid2022,
            modalTriggerElementId: 'example-widget-trigger',
          },
          href: '',
          target: '',
        },
      ],*/
      buttons: [
        {
          key: 1,
          name: language ? 'Tickets' : 'Entradas',
          href:
            'https://www.eventbrite.com/e/miccosukee-indian-arts-crafts-festival-2022-tickets-453191858047?aff=website',
          target: '_blank',
        },
      ],
    },
    {
      id: '5',
      title: 'American Indian Day',
      type: 'standard',
      category: '',
      admission: language ? 'FREE' : 'GRATIS',
      startDate: '9/24/2022',
      endDate: '9/24/2022',
      startTime: '12:00 P.M.',
      endTime: '6:00 P.M.',
      excerpt: language
        ? 'Miccosukee Celebrates American Indian Day with a fun-packed event on Saturday, September 24, at Miccosukee Casino & Resort! Admission is free, so bring the whole tribe!...'
        : 'Miccosukee celebra el Día del Indio Americano (American Indian Day) con un evento lleno de diversión el sábado, 24 de septiembre en Miccosukee Casino & Resort. La entrada es gratuita, ¡así que traiga a toda su tribu!...',

      fullDescription: language
        ? [
            'Miccosukee Celebrates American Indian Day with a fun-packed event on Saturday, September 24, at Miccosukee Casino & Resort! Admission is free, so bring the whole tribe!',
            'On American Indian Day, we honor the culture and traditions of indigenous First Nations and their contributions to the world.',
            'This family-friendly festival provides a glimpse into the Miccosukee Tribe’s culture as we host indigenous craft and food vendors, alligator wrestling shows, airboat rides, and more. Visit us and connect with Miami’s original locals in the heart of the Florida Everglades.',
          ]
        : [
            'Miccosukee celebra el Día del Indio Americano (American Indian Day) con un evento lleno de diversión el sábado, 24 de septiembre en Miccosukee Casino & Resort. La entrada es gratuita, ¡así que traiga a toda su tribu!',
            'En el Día del Indio Americano, honramos la cultura y las tradiciones de las Primeras Naciones indígenas y sus contribuciones al mundo.',
            'Este festival familiar ofrece un vistazo a la cultura de la tribu Miccosukee mientras presentamos vendedores de comida y artesanía indígena, espectáculos de lucha con lagartos, paseos en hidrodeslizador y más. Visítenos y conéctese con los habitantes originales de Miami en el corazón de los Everglades de Florida.',
          ],
      /*eventbriteButton: [
        {
          name: language ? 'REGISTER HERE' : 'REGÍSTRESE AQUÍ',
          eventbrite: {
            eventId: eventbriteIDs.aid2022,
            modalTriggerElementId: 'example-widget-trigger',
          },
          href: '',
          target: '',
        },
      ],*/
      buttons: [
        {
          key: 1,
          name: 'Register',
          href:
            'https://www.eventbrite.com/e/miccosukee-celebrates-american-indian-day-registration-389611878617?aff=website',
          target: '_blank',
        },
      ],
    },
    {
      id: '4',
      title: 'Florida Mega Market',
      type: 'standard',
      category: '',
      admission: language ? 'FREE' : 'GRATIS',
      startDate: '9/4/2022',
      endDate: '9/4/2022',
      startTime: '11:00 A.M.',
      endTime: '7:00 P.M.',
      excerpt: language
        ? 'Skip the mall and experience an outdoor shopping event like no other at Miccosukee Casino & Resort! Buy unique items from...'
        : '¡Olvide el centro comercial y experimente un evento de compras al aire libre como ningún otro en Miccosukee Casino & Resort! Compre artículos únicos de...',
      fullDescription: language
        ? [
            'Skip the mall and experience an outdoor shopping event like no other at Miccosukee Casino & Resort! Buy unique items from hundreds of vendors, chow down with delicious food trucks, and dance the afternoon away with live music and entertainment.',
          ]
        : [
            '¡Olvide el centro comercial y experimente un evento de compras al aire libre como ningún otro en Miccosukee Casino & Resort! Compre artículos únicos de cientos de vendedores, disfrute de deliciosos camiones de comida y baile toda la tarde con música en vivo y entretenimiento.',
          ],
    },
    {
      id: '3',
      title: language
        ? 'Labor Day Weekend CAR & BIKE SHOW'
        : 'SHOW DE CARROS Y MOTOS el Fin de Semana de Labor Day',
      test: {
        english: 'Labor Day Weekend CAR & BIKE SHOW',
        spanish: 'SHOW DE CARROS Y MOTOS el Fin de Semana de Labor Day',
      },
      type: 'standard',
      category: '',
      admission: language ? 'FREE' : 'GRATIS',
      startDate: '9/3/2022',
      endDate: '9/3/2022',
      startTime: '11:00 A.M.',
      endTime: '5:00 P.M.',
      excerpt: language
        ? 'Calling all gear heads! Rev up your engines and head down to Miccosukee Casino & Resort for a...'
        : '¡Llamando a todos los fanáticos de autos! ¡Aceleren sus motores y diríjanse a Miccosukee Casino & Resort para un...',
      fullDescription: language
        ? [
            'Calling all gear heads! Rev up your engines and head down to Miccosukee Casino & Resort for a spectacular Car & Bike Show on Saturday, September 3! Check out amazing rides, food trucks, music, vendors, and contests in this outdoor event rated E for everyone!',
          ]
        : [
            '¡Llamando a todos los fanáticos de autos! ¡Aceleren sus motores y diríjanse a Miccosukee Casino & Resort para un espectacular show de Carros y Motos el sábado, 3 de septiembre! ¡Tendremos increíbles vehículos, camiones de comida, música, vendedores y concursos en este evento al aire libre apto para todo público!',
          ],
    },
    {
      id: '2',
      title: 'Carritos y Cafecito',
      type: 'standard',
      category: '',
      admission: language ? 'FREE' : 'GRATIS',
      startDate: '8/6/2022',
      endDate: '8/6/2022',
      startTime: '8:00 A.M.',
      endTime: '12:00 P.M.',
      excerpt: language
        ? 'Cruise down nostalgia highway and show off your classic & specialty ride while getting your caffeine fix...'
        : '¡Navegue por la autopista de la nostalgia y presuma de su vehículo clásico y especializado mientras obtiene su dosis de cafeína...',
      fullDescription: language
        ? [
            'Cruise down nostalgia highway and show off your classic & specialty ride while getting your caffeine fix on Saturday, August 6, from 8 AM - 12 PM at Miccosukee Casino & Resort!',
            'Carritos y Cafecito, hosted by Road Rage Media, invites car enthusiasts to show off their specialty vehicles, motorcycles, trucks, and Jeeps while enjoying coffee and plenty of food trucks! Spectators are welcome!',
            'Cars, coffee, and tasty grub on a Saturday are way better than brunch. We hope to see you there!',
          ]
        : [
            '¡Navegue por la autopista de la nostalgia y presuma de su vehículo clásico y especializado mientras obtiene su dosis de cafeína el sábado, 6 de agosto, de 8 AM a 12 PM en Miccosukee Casino & Resort!',
            'Carritos y Cafecito, organizado por Road Rage Media, invita a los entusiastas de automóviles a mostrar sus vehículos especiales, motos, camionetas y Jeeps mientras disfrutan de un café y muchos camiones de comida. ¡Los espectadores son bienvenidos!',
            'Un sábado con carros, café y comida son mejores que el brunch. ¡Esperamos verlos allí!',
          ],
    },
    {
      id: '1',
      title: 'Wheels & Meals',
      type: 'standard',
      category: '',
      admission: language
        ? '$5 cover per specialty vehicles. Free general parking for regular cars.'
        : '$5 cover per specialty vehicles. Free general parking for regular cars.',
      startDate: '7/14/2022',
      endDate: '7/14/2022',
      startTime: '7:00 P.M.',
      endTime: '11:00 P.M.',
      excerpt: language
        ? 'A car, truck, jeep and motorcycle food truck festival...'
        : 'A car, truck, jeep and motorcycle food truck festival...',

      fullDescription: language
        ? [
            'Roadrage Media presents Wheels & Meals - a car, truck, jeep and motorcycle food truck festival.',
          ]
        : [
            'Roadrage Media presents Wheels & Meals - a car, truck, jeep and motorcycle food truck festival.',
          ],
    },
    /*
    {
      id: '0',
      title: 'Removal of the Swamp Invaders Fishing Tournament',
      type: 'standard',
      //link: "/virtual-event/aid",
      category: '',
      //annual: true,
      admission: language
        ? '$25 for 11 & Up, $15 for 10 & Under - Includes t-shirt and raffle ticket. First 10 kids to register receive live dozen shiners.'
        : 'Tarifas de Inscripción: $25 para mayores de 11 años, $15 para menores de 10 años - Incluye camiseta y boleto para la rifa. Los primeros 10 niños que se registren recibirán una docena de carnada natural para pescar.',
      startDate: '3/25/2022',
      endDate: '3/26/2022',
      excerpt: language
        ? 'Over $4,000 in cash prizes and giveaways; brought to you by the...'
        : 'Más de $4,000 en premios en efectivo y regalos; presentado por el...',

      fullDescription: language
        ? [
            'Over $4,000 in cash prizes and giveaways; brought to you by the Miccosukee Fish & Wildlife Department. This tournament aims to inform the public about the harmful effects of exotic fish and encourages their removal and consumption.',
            '- Fishing begins on March 25, 2022, at 7 PM and ends on March 26, 2022, before 3 PM.',
            '- Registration Fees: $25 for 11 & Up, $15 for 10 & Under - Includes t-shirt and raffle ticket. First 10 kids to register receive live dozen shiners.',
            '- Location: Miccosukee Casino & Resort',
            '- Registration & More Info: Removal Of The Swamp Invaders Fishing Tournament Tickets, Fri, March 25, 2022, at 7:00 PM | Eventbrite',
            '*Questions? Contact the Miccosukee Fish & Wildlife Department at 305-223-8380 ext. 2242.',
          ]
        : [
            'Más de $4,000 en premios en efectivo y regalos; presentado por el Departamento de Pesca y Vida Silvestre Miccosukee. Este torneo tiene como objetivo informar al público sobre los efectos nocivos de los peces exóticos y fomentar su extracción y consumo.',
            '- La pesca comienza el 25 de marzo de 2022 a las 7 PM y finaliza el 26 de marzo de 2022 antes de las 3 PM.',
            '- Tarifas de Inscripción: $25 para mayores de 11 años, $15 para menores de 10 años - Incluye camiseta y boleto para la rifa. Los primeros 10 niños que se registren recibirán una docena de carnada natural para pescar.',
            '- Ubicación: Miccosukee Casino & Resort',
            '- Registro y Más Información: Removal Of The Swamp Invaders Fishing Tournament Tickets, Fri, March 25, 2022, at 7:00 PM | Eventbrite​',
            '*¿Preguntas? Comuníquese con el Departamento de Pesca y Vida Silvestre Miccosukee al 305-223-8380 ext. 2242.',
          ],
      // format is html or youtube
      buttons: [
        {
          key: 1,
          name: 'Register',
          href:
            'https://www.eventbrite.com/e/removal-of-the-swamp-invaders-fishing-tournament-tickets-265331462547?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=escbhttps://www.eventbrite.com/e/2nd-annual-removal-of-the-swamp-invaders-fishing-tournament-tickets-56061585712',
          target: '_blank',
        },
      ],
    },
    */
    /*
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
    */
  ];
};
