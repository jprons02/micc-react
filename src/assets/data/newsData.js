import React from 'react';

export const newsList = () => {
  return [
    {
      newsId: '1',
      title: 'American Indian Day 2023',
      publishedDate: '',
      eventPage:
        '/entertainment/events-concerts/american-indian-day-20239232023',
      excerpt:
        'Celebrate American Indian Day with the Miccosukee Tribe of Indians...',
      body: () => {
        return (
          <div>
            <p>
              Celebrate American Indian Day with the Miccosukee Tribe of Indians
              of Florida on Saturday, September 23, and Sunday, September 24, at
              Miccosukee Casino & Resort. Admission is free and includes fun
              activities the whole family will enjoy.
            </p>
            <p>
              Learn about the Miccosukee Tribe and other indigenous communities
              in this cultural event with food and craft vendors, alligator
              demonstrations, airboat rides, a Miccosukee fashion show, carnival
              rides, a petting zoo, and many more surprises!
            </p>
            <p>
              Join us for a pre-festival movie night at sundown on Friday,
              September 22, featuring films by Miccosukee director Montana
              Cypress.
            </p>
          </div>
        );
      },
    },
    {
      newsId: '2',
      title: 'Miccosukee Indian Arts & Crafts Festival 2023',
      publishedDate: '',
      eventPage:
        '/entertainment/events-concerts/miccosukee-indian-arts-&-crafts-festival-202312282023',
      excerpt:
        'Gather at the Miccosukee Indian Village festival grounds for indigenous music and dance...',
      body: () => {
        return (
          <div>
            <p>
              Gather at the Miccosukee Indian Village festival grounds for
              indigenous music and dance performances, an artisan market,
              alligator demonstrations, and more at the Miccosukee Indian Arts &
              Crafts Festival, Thursday, December 28 through Sunday, December
              31, from 10 AM – 5 PM. Take part in our holiday tradition with
              your family!
            </p>
          </div>
        );
      },
    },
  ];
};
