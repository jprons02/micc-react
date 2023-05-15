/*
    url: dataObj,
    page: props.page ? props.page : null,
*/

export const getMetaData = (uri, pageObj) => {
  //mrg to mcr change
  const mrg = /\/mrg|\/mcr/gm;
  const golf = /\/golf/gm;
  const village = /\/village/gm;
  const airboats = /\/airboats/gm;
  const history = /\/history/gm;
  const tribe = /\/tribe/gm;
  const administration = /\/administration/gm;

  // LANDING PAGES
  if (uri === '/aid') {
    return {
      name: 'Miccosukee American Indian Day',
      title: 'Miccosukee American Indian Day',
      description:
        "Discover the Miccosukee Tribe's culture and traditions as we host alligator wrestling shows, airboat rides, grease pole competitions, indigenous craft and food vendors, and more fun for the whole family!",
      thumbnail:
        'https://mapa-media.s3.amazonaws.com/websiteMetadataImages/mrgMeta.jpg',
      slug: uri,
      url: `https://www.miccosukee.com${uri}`,
    };
  }
  // END LANDING PAGES
  if (mrg.test(uri)) {
    return {
      name: 'Miccosukee Casino & Resort',
      title: 'Miccosukee Casino & Resort',
      description:
        'Enjoy our casino resort in Miami that features non-stop thrills and the highest payouts in town! There is something for everyone!',
      thumbnail:
        'https://mapa-media.s3.amazonaws.com/websiteMetadataImages/mrgMeta.jpg',
      slug: uri,
      url: `https://www.miccosukee.com${uri}`,
    };
  }
  if (golf.test(uri)) {
    return {
      name: 'Miccosukee Golf & Country Club',
      title: 'Miccosukee Golf & Country Club',
      description:
        'The Miccosukee Golf & Country Club has hosted many LPGA and PGA events, including the Miccosukee Championship. In the heart of Kendall, this Mark Mahannah-designed masterpiece is considered by many to have the best layout in South Florida.',
      thumbnail:
        'https://mapa-media.s3.amazonaws.com/websiteMetadataImages/golfMeta.jpg',
      slug: uri,
      url: `https://www.miccosukee.com${uri}`,
    };
  }
  if (village.test(uri)) {
    return {
      name: 'Miccosukee Village',
      title: 'Miccosukee Village',
      description:
        'Showcasing Miccosukee tribal arts & culture with a museum, craft demonstrations, and alligator shows.',
      thumbnail:
        'https://mapa-media.s3.amazonaws.com/websiteMetadataImages/villageMeta.jpg',
      slug: uri,
      url: `https://www.miccosukee.com${uri}`,
    };
  }
  if (airboats.test(uri)) {
    return {
      name: 'Miccosukee Airboats',
      title: 'Miccosukee Airboats',
      description:
        'Miccosukee Airboats are the best way to glide the ‘Glades and experience the magnificent “River of Grass.” Feel the breeze and listen to the sawgrass whizz by. ',
      thumbnail:
        'https://mapa-media.s3.amazonaws.com/websiteMetadataImages/airboatsMeta.jpg',
      slug: uri,
      url: `https://www.miccosukee.com${uri}`,
    };
  }
  if (uri !== '/history-admin') {
    if (history.test(uri) || tribe.test(uri)) {
      return {
        name: 'Miccosukee Tribe History',
        title: 'Miccosukee Tribe History',
        description:
          'The Tribe has a proud history, which predates Columbus. The Miccosukee Indians were originally part of the Creek Nation, and then migrated to Florida before it became part of the United States.',
        thumbnail:
          'https://mapa-media.s3.amazonaws.com/websiteMetadataImages/historyMeta.jpg',
        slug: uri,
        url: `https://www.miccosukee.com${uri}`,
      };
    }
  }
  if (administration.test(uri)) {
    return {
      name: 'Miccosukee Administration',
      title: 'Miccosukee Administration',
      description:
        'The Miccosukee Tribe now operates a Clinic; Police Department; Court System; Day Care Center; Senior Center; Community Action Agency and an Educational System ranging from the Head Start Pre-School Program through Senior High School, Adult, Vocational and Higher Education Programs and other Social Services.',
      thumbnail:
        'https://mapa-media.s3.amazonaws.com/websiteMetadataImages/administrationMeta.jpg',
      slug: uri,
      url: `https://www.miccosukee.com${uri}`,
    };
  }
  return {
    name: 'Miccosukee',
    title: 'Miccosukee',
    description:
      'Enjoy our casino resort in Miami that features non-stop thrills and the highest payouts in town! There is something for everyone!',
    thumbnail:
      'https://mapa-media.s3.amazonaws.com/websiteMetadataImages/mrgMeta.jpg',
    slug: uri,
    url: `https://www.miccosukee.com${uri}`,
  };
};
