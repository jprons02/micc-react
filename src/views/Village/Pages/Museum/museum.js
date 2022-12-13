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
import bgImage from 'assets/media/img/village/Village_Header1.jpg';
import image1 from 'assets/media/img/village/1024x642_Slider_L-e1551456221969.jpg';
import image2 from 'assets/media/img/village/1024x642_Slider_D-e1551456149892.jpg';
import image3 from 'assets/media/img/village/1024x642_Slider_M-e1551456229527.jpg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// Services
import { renderPoiHours } from 'services/functions/renderPoiHours.js';

// Business info
import { villageHours } from 'business_info/hours.js';

// context
import { useLanguage } from 'contexts/languageContext.js';

const useStyles = makeStyles(styles);

//const imageArray = [image1, image2, image3];
const imageObj = [
  { src: image1, alt: 'Exhibit' },
  { src: image2, alt: 'Miccosukee speaking' },
  { src: image3, alt: 'Big alligator' },
];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const Museum = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Village Museum</h2>
              {language ? (
                <React.Fragment>
                  <p>
                    Opened in 1983, our Museum offers visitors a glimpse into
                    the Tribe’s unique way of life. Miccosukee history and
                    culture is preserved through historical documents, archival
                    photographs and original artifacts.
                  </p>
                  <p>
                    Alongside permanent exhibits showcasing the early life of
                    the Tribe as they adapted to the Everglades, the museum
                    hosts rotating exhibits highlighting historical and
                    contemporary Native American, First Nations and Aboriginal
                    life.
                  </p>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p>
                    Inaugurado en 1983 el museo brinda a sus visitantes la
                    oportunidad de apreciar la vida de la tribu. La historia y
                    cultura de los Miccosukee se preserva en documentos
                    históricos, fotografías de archivo y objetos originales.
                  </p>
                  <p>
                    Cuenta con exhibiciones que ilustran la vida de los
                    Miccosukee en su proceso de adaptación a la vida en los
                    Everglades, además de otras presentaciones en forma rotativa
                    mostrando cómo fue y cómo es la vida contemporánea de los
                    Americanos nativos, de los pueblos originarios y los
                    aborígenes.
                  </p>
                </React.Fragment>
              )}
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageObj} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Museum;
