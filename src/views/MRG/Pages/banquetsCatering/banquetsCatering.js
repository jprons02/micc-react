import React, { useContext } from 'react';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Typography from '@material-ui/core/Typography';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';
import Button from 'components/CustomButtons/Button.js';

// Images
import bgImage from 'assets/media/img/mrg/MRG_Header1.jpg';
import image1 from 'assets/media/img/mrg/banquets/Slider_Banquets_1024x642-o27gjfiauxaw8adlauqeuc3m7aorgdyy8killjv7zu.jpg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// Context
import { ContactModalContext } from 'contexts/ContactFormModalContext.js';
import { ContactFormContext } from 'contexts/ContactFormContext.js';
import { useLanguage } from 'contexts/languageContext.js';

const useStyles = makeStyles(styles);

//const imageArray = [image1];
const imageObj = [{ src: image1, alt: 'Banquet area' }];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const BanquetsCatering = () => {
  const language = useLanguage();
  const classes = useStyles();

  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
  const [formValues, setFormValues] = useContext(ContactFormContext);

  const handleClick = () => {
    setFormValues({
      ...formValues,
      inputValues: {
        ...formValues.inputValues,
        ['select']: 'Banquet/Catering',
        ['selectError']: false,
        ['selectTouched']: true,
      },
    });
    setShowContactModal(true);
  };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>
                {language ? 'Banquets & Catering' : 'Banquetes y Catering'}
              </h2>
              <p>
                {language
                  ? 'Thanks to our top-notch banquet and convention facilities, Miccosukee Casino & Resort is prepared to create an unforgettable experience for you and your guests. Whether it’s an intimate gathering or a celebration of up-to 1,200 attendees, we accommodate events of all sizes.'
                  : 'En Miccosukee Casino & Resort tenemos facilidades para banquetes y convenciones de primera categoría, y por eso estamos listos para crear una experiencia inolvidable para usted y sus invitados. Ya sea un encuentro íntimo o una celebración de hasta 1,200 invitados, nosotros nos adaptamos a eventos de cualquier tamaño.'}
              </p>

              <p>
                {language
                  ? 'From corporate conferences in our executive meeting rooms to large-scale wedding bashes in our banquet hall, our event specialists and culinary team will ensure every one of your guests receives VIP treatment.'
                  : 'Desde conferencias de empresa en nuestros salones de reunión para ejecutivos hasta fiestas de boda masivas en nuestro salón de banquetes, nuestros especialistas en eventos y equipo culinario se encargarán de que cada uno de sus invitados se lleve un trato VIP.'}
              </p>
              <p>
                {language
                  ? 'Ready to host your next event or meeting at Miccosukee Casino & Resort? Call us at '
                  : '¿Está listo para organizar su próximo evento o reunión en Miccosukee Casino & Resort? Llámenos al '}
                <a href="tel:+13059252555">
                  <Typography variant="inherit" color="primary">
                    305-925-2555
                  </Typography>
                </a>
                .
              </p>
              <Button onClick={handleClick} usetheme="contained">
                {language ? 'CONTACT US' : 'CONTÁCTENOS'}
              </Button>
            </div>
          </GridItem>
          <GridItem style={{ paddingBottom: '30px' }} md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageObj} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default BanquetsCatering;
