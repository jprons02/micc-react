import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/img/bg3.jpg";
import image1 from "assets/img/mrg/amenities/pool-gym/pool.jpg";
import image2 from "assets/img/mrg/amenities/pool-gym/pool_2.jpg";
import image3 from "assets/img/mrg/amenities/pool-gym/gym2.jpg";
import image4 from "assets/img/mrg/amenities/pool-gym/gym.jpg";
import image5 from "assets/img/mrg/amenities/pool-gym/courtyard.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// BusinessInfo
import { mrgHours } from "business_info/hours.js";

// Services
import { renderPoiHours } from "services/renderPoiHours.js";

// Context
import { useLanguage } from "contexts/languageContext.js";

const useStyles = makeStyles(styles);

const imageArray = [image1, image2, image3, image4, image5];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const PoolGym = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>{language ? "Pool & Fitness Center" : "Piscina y Gimnasio"}</h2>
              {renderPoiHours(mrgHours.poi.poolGym, language)}
              <p>
                {language
                  ? "Cool off in our indoor pool or take a relaxing dip in our jacuzzi. Maybe unwind in our sauna. Enjoy South Florida’s gorgeous weather on our outdoor patio. Whether you’re soaking up the sun or cooling off under the serene shadow of one of our chickees, our outdoor patio is the perfect place to relax all year round."
                  : "Refrésquese en nuestra pisicina interior o relájese en nuestro jacuzzi o sauna. Disfrute el clima espectacular del Sur de la Florida en nuestro patio al aire libre, ya sea tomando sol durante el día o disfrutando de la sombra serena de uno de nuestros chickees; este lugar es perfecto para relajarse durante todo el año."}
              </p>
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageArray} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default PoolGym;
