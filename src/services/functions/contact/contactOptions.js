const MrgSelectOptions = [
  {
    value: "Banquet Sales",
    label: "Banquet Sales",
  },
  {
    value: "Banquet/Catering",
    label: "Banquet/Catering",
  },
  {
    value: "Bingo",
    label: "Bingo",
  },
  {
    value: "Child Care Center",
    label: "Child Care Center",
  },
  {
    value: "Event & Meeting Planning",
    label: "Event & Meeting Planning",
  },
  {
    value: "Event Tickets",
    label: "Event Tickets",
  },
  {
    value: "Food & Beverage",
    label: "Food & Beverage",
  },
  {
    value: "Finance & Accounting",
    label: "Finance & Accounting",
  },
  {
    value: "Food & Beverage - Comment Card",
    label: "Food & Beverage - Comment Card",
  },
  {
    value: "Gaming Machines",
    label: "Gaming Machines",
  },
  {
    value: "Group Sales",
    label: "Group Sales",
  },
  {
    value: "Promotions & Special Events",
    label: "Promotions & Special Events",
  },
  {
    value: "Player's Club",
    label: "Player's Club",
  },
  {
    value: "Room Rates & Reservations",
    label: "Room Rates & Reservations",
  },
  {
    value: "Spa & Salon",
    label: "Spa & Salon",
  },
  {
    value: "Valet Services",
    label: "Valet Services",
  },
  {
    value: "Human Resources",
    label: "Human Resources",
  },
  {
    value: "Other",
    label: "Other",
  },
  {
    value: "Website Feedback",
    label: "Website Feedback",
  },
];

const mediaSelectOptions = [
  {
    value: "Media Inquiry",
    label: "Media Inquiry",
  },
];

const villageSelectOptions = [
  {
    value: "Indian Village",
    label: "Indian Village",
  },
  {
    value: "Indian Village Groups",
    label: "Indian Village Groups",
  },
];

const airboatsSelectOptions = [
  {
    value: "Airboats",
    label: "Airboats",
  },
  {
    value: "Airboat Groups",
    label: "Airboat Groups",
  },
];

const golfSelectOptions = [
  {
    value: "Golf",
    label: "Golf",
  },
];

export const getOptions = (entity) => {
  switch (entity) {
    case "mrg":
      return MrgSelectOptions;
    case "media":
      return mediaSelectOptions;
    case "village":
      return villageSelectOptions;
    case "airboats":
      return airboatsSelectOptions;
    case "golf":
      return golfSelectOptions;
    default:
      return MrgSelectOptions;
  }
};
