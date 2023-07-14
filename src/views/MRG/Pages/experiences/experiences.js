import React from 'react';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';

// Images
import bgImage from 'assets/media/img/mrg/experiences/experiences-page-banner.jpeg';
import airboatsImage from 'assets/media/img/airboats/Slider_Airboat2.jpeg';
import gatorImage from 'assets/media/img/village/alligator_demo.jpg';
import museumImage from 'assets/media/img/village/1024x642_Slider_L-e1551456221969.jpg';
import giftshopImage from 'assets/media/img/village/GiftShop1.jpg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/experiences.js';

// BusinessInfo
import { mrgHours } from 'business_info/hours.js';

// Services
import { renderPoiHours } from 'services/functions/renderPoiHours.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';

const useStyles = makeStyles(styles);

//const imageArray = [image1, image2, image3, image4, image5];
const airboatsImageObj = [{ src: airboatsImage, alt: 'airboats' }];

const gatorImageObj = [{ src: gatorImage, alt: 'alligator' }];

const museumImageObj = [
  { src: museumImage, alt: 'indian village museum exhibit' },
];

const giftshopImageObj = [{ src: giftshopImage, alt: 'bracelets' }];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const Experiences = () => {
  const language = useLanguage();
  const classes = useStyles();

  const renderHorizontalRule = () => {
    return <hr className={classes.hrStyle} />;
  };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <h2>Experience Miccosukee</h2>
        <p>
          Discover the Unparalleled Miccosukee Cultural Immersion: Immerse
          Yourself in the Riches of Miccosukee Tribal Arts & Culture through
          Museums, Airboats, Craft Demonstrations, and Alligator Shows.
        </p>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Airboats</h2>
              <p>
                Miccosukee Airboats are the best way to glide the ‘Glades and
                experience the magnificent “River of Grass.” Feel the breeze and
                listen to the sawgrass whizz by. Get a glimpse into traditional
                Miccosukee life and discover a typical hammock-style camp that
                has been owned by the same family for more than 100 years! Let
                our expert guides show you a side of the beautiful Everglades
                you can’t see anywhere else. Your next adventure awaits!
              </p>
              <Button target="_blank" href="/airboats" usetheme="contained">
                {language ? 'More Information' : 'More Information'}
              </Button>
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={airboatsImageObj} />
            </div>
          </GridItem>
        </GridContainer>
        {renderHorizontalRule()}
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Alligator Demonstrations</h2>
              <p>
                We don’t “wrestle” our ‘gators—we love them and hope that you’ll
                learn about them through our demonstrations! Watch in awe as a
                brave demonstrator explains centuries-old traditions and rituals
                that have been handed down by generations of Miccosukee with
                their bare hands!
              </p>
              <p>
                The Miccosukee learned early on how to capture them for food and
                commodities like their tough skin. The times have changed and
                the Tribe’s relationship has moved towards conservation and
                education about the alligator’s role in this unique environment.
              </p>
              <Button
                target="_blank"
                href="/village/alligator-demonstrations"
                usetheme="contained"
              >
                {language ? 'More Information' : 'More Information'}
              </Button>
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={gatorImageObj} />
            </div>
          </GridItem>
        </GridContainer>
        {renderHorizontalRule()}
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Village Museum</h2>
              <p>
                Opened in 1983, our Museum offers visitors a glimpse into the
                Tribe’s unique way of life. Miccosukee history and culture is
                preserved through historical documents, archival photographs and
                original artifacts.
              </p>
              <p>
                Alongside permanent exhibits showcasing the early life of the
                Tribe as they adapted to the Everglades, the museum hosts
                rotating exhibits highlighting historical and contemporary
                Native American, First Nations and Aboriginal life.
              </p>
              <Button
                target="_blank"
                href="/village/museum"
                usetheme="contained"
              >
                {language ? 'More Information' : 'More Information'}
              </Button>
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={museumImageObj} />
            </div>
          </GridItem>
        </GridContainer>
        {renderHorizontalRule()}
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Village Gift Shop</h2>
              <p>
                Visit the Miccosukee Indian Gift Shop to find crafts created by
                natives around the world, and special gifts made by our
                Miccosukee Tribe members.
              </p>
              <Button
                target="_blank"
                href="/village/gift-shop"
                usetheme="contained"
              >
                {language ? 'More Information' : 'More Information'}
              </Button>
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={giftshopImageObj} />
            </div>
          </GridItem>
        </GridContainer>
        <div style={{ paddingBottom: '40px' }}></div>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Experiences;
