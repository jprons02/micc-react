import ffMap from "assets/event/FreedomFestival_Map.svg";
import React from "react";
import { eventbriteIDs } from "assets/event/EventData/eventbriteIDs.js";
import aid2021 from "assets/video/AID_savethedate_spot_30sec.mp4";
import aid2021poster from "assets/img/events/aid/savethedatePoster.jpg";

export const events = [
  /*
  {
    title: "Virtual Event",
    type: "virtual",
    link: "/virtual-event/aid",
    startDate: "12/20/2021",
    endDate: "12/20/2021",
    admission: "Not Free",
    excerpt:
      "Miccosukee Resort & Gaming’s annual Fourth of July celebration is back and better than ever! This FREE family-oriented event features music, food, carnival rides, refreshing water slides, exhilarating airboat rides, alligator wrestling shows, fireworks, and more. There will be a variety of vendors onsite with delicious food and beverage options.",
  },
  */

  {
    title: "American Indian Day (Virtual Event)",
    type: "standard",
    category: "",
    annual: true,
    admission: "$10",
    startDate: "9/20/2021",
    endDate: "9/25/2021",
    excerpt:
      "“A Celebration of Indigenous Nations” is a week-long virtual festival including performances and presentations showcasing the culture and traditions of Native American Tribes around the globe.",
    fullDescription: [
      "Celebrate American Indian Day from September 20 - 25 alongside the Miccosukee Tribe of Indians of Florida. “A Celebration of Indigenous Nations” is a week-long virtual festival including performances and presentations showcasing the culture and traditions of Native American Tribes around the globe. Enjoy this virtual event with the whole family from the comfort of your home and learn about the art, lifestyle and customs of modern-day Natives.",
    ],
    // format is html or youtube
    video: {
      format: "html",
      src: aid2021,
      poster: aid2021poster,
    },
    buttons: [
      {
        name: "Get Tickets",
        eventbrite: {
          eventId: eventbriteIDs.aid2021,
          modalTriggerElementId: "example-widget-trigger",
        },
        href: "",
        target: "",
      },
    ],
  },
  /*
  {
    title: "Freedom Festival",
    // type can be "standard" or "virtual"
    type: "standard",
    // category is if entity specific... ie: golf event or mrg nightlife event, etc...
    category: "Resort & Gaming",
    annual: true,
    admission: "Free",
    startDate: "12/26/2020",
    endDate: "12/26/2020",
    startTime: "10:00 A.M.",
    endTime: "5:00 P.M.",
    excerpt:
      "Miccosukee Resort & Gaming’s annual Fourth of July celebration is back and better than ever! This FREE family-oriented event features music, food, carnival rides, refreshing water slides, exhilarating airboat rides, alligator wrestling shows, fireworks, and more. There will be a variety of vendors onsite with delicious food and beverage options.",
    fullDescription: [
      "Miccosukee Resort & Gaming’s annual Fourth of July celebration is back and better than ever! This FREE family-oriented event features music, food, carnival rides, refreshing water slides, exhilarating airboat rides, alligator wrestling shows, fireworks, and more. There will be a variety of vendors onsite with delicious food and beverage options.",
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
      "Miccosukee Resort & Gaming’s annual Fourth of July celebration is back and better than ever! This FREE family-oriented event features music, food, carnival rides, refreshing water slides, exhilarating airboat rides, alligator wrestling shows, fireworks, and more. There will be a variety of vendors onsite with delicious food and beverage options.",
    fullDescription: [
      "Miccosukee Resort & Gaming’s annual Fourth of July celebration is back and better than ever! This FREE family-oriented event features music, food, carnival rides, refreshing water slides, exhilarating airboat rides, alligator wrestling shows, fireworks, and more. There will be a variety of vendors onsite with delicious food and beverage options.",
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
