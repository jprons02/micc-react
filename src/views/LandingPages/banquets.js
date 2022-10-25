import React, { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';

// context
import { useLanguage, useLanguageUpdate } from 'contexts/languageContext.js';
import { ContactModalContext } from 'contexts/ContactFormModalContext.js';
import CustomContactModal from 'components/CustomModal/CustomContactModals/CustomContactModal.js';
import { ContactFormContext } from 'contexts/ContactFormContext.js';

// Business info
import { mrgBusinessInfo } from 'business_info/genericInfo.js';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import Button from 'components/CustomButtons/Button.js';

//import Footer from 'components/CustomFooters/SimpleFooter';
import MrgFooter from 'components/CustomFooters/MrgFooter.js';

// styles
import styles from 'assets/jss/material-kit-react/views/landingPage/amenities.js';
import headerStyle from 'assets/jss/material-kit-react/views/miccosukee/components/header.js';

// header image
import heroDesktop from 'assets/media/img/landingPages/resortPackages/hero_image_desktop.jpg';
import heroMobile from 'assets/media/img/landingPages/resortPackages/hero_image_mobile.jpg';

// Icons
import { Icon } from '@material-ui/core';

// Images
import emblem from 'assets/media/img/miccosukee/MiccosukeeEmblem_Color.svg';

import image1 from 'assets/media/img/landingPages/amenities/Resort_Mobile.jpg';
import image2 from 'assets/media/img/landingPages/amenities/Slots_Mobile.jpg';
import image3 from 'assets/media/img/landingPages/amenities/Bingo_Mobile.jpg';
import image4 from 'assets/media/img/landingPages/amenities/Dining_Mobile.jpg';
import image5 from 'assets/media/img/landingPages/amenities/Pool_Mobile.jpg';
import image6 from 'assets/media/img/landingPages/amenities/Banquets_Mobile.jpeg';

import image1desktop from 'assets/media/img/landingPages/amenities/Resort_Desktop.jpg';
import image2desktop from 'assets/media/img/landingPages/amenities/Slots_Desktop.jpg';
import image3desktop from 'assets/media/img/landingPages/amenities/Bingo_Desktop.jpg';
import image4desktop from 'assets/media/img/landingPages/amenities/Dining_Desktop.jpg';
import image5desktop from 'assets/media/img/landingPages/amenities/Pool_Desktop.jpg';
import image6desktop from 'assets/media/img/landingPages/amenities/Banquets_Desktop.jpeg';

const useStyles = makeStyles(styles);
const useHeaderStyles = makeStyles(headerStyle);

const ResortPackages = () => {
  const classes = useStyles();
  const headerClasses = useHeaderStyles();

  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
  // Close contact modal on mount
  useEffect(() => {
    closeModal(setShowContactModal);
  }, []);
  const closeModal = (setState) => {
    setState(false);
  };

  const [formValues, setFormValues] = useContext(ContactFormContext);

  const handleContactClick = () => {
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

  const red = '#fe284f';
  const yellowTitle = '#ffd800';
  const yellow = '#ff9c00';
  const green = '#33ab88';

  const handleClick = () => {
    window.open('tel:+13059252555');
  };

  const languageToggler = () => {
    return (
      <div style={{ width: '100%', textAlign: 'center', marginTop: '30px' }}>
        <div style={{ display: 'inline-block' }}>
          <Button
            simple={language ? false : true}
            className={
              language
                ? headerClasses.languageTrue
                : headerClasses.languageFalse
            }
            //style={language ? languageTrue : languageFalse}
            onClick={!language ? toggleLanguage : null}
            color="danger"
            aria-pressed={language}
          >
            english
          </Button>
          <Button
            simple={!language ? false : true}
            className={
              !language
                ? headerClasses.languageTrue
                : headerClasses.languageFalse
            }
            //style={!language ? languageTrue : languageFalse}
            onClick={language ? toggleLanguage : null}
            color="danger"
            aria-pressed={!language}
          >
            español
          </Button>
        </div>
      </div>
    );
  };

  const amenitiesContent = [
    {
      image: () => {
        return (
          <div>
            <Hidden mdUp>
              <img src={image6} className={classes.contentImage} />
            </Hidden>
            <Hidden smDown>
              <img src={image6desktop} className={classes.contentImage} />
            </Hidden>
          </div>
        );
      },
      color: '',
      title: language ? 'Meetings & Banquets' : 'Reuniones y Banquetes',
      button: {
        type: 'ul',
        renderList: () => {
          return (
            <React.Fragment>
              <Button
                href="https://mapa-media.s3.amazonaws.com/mrg/Meeting_BanquetSpace.pdf"
                target="_blank"
                className={classes.contentButton}
              >
                <span className={classes.contentButtonText}>
                  {language
                    ? 'FACILITY DIMENSIONS'
                    : 'DIMENSIONES DE INSTALACIONES'}
                </span>
              </Button>
              <Button
                onClick={handleContactClick}
                className={classes.contentButton}
              >
                <span className={classes.contentButtonText}>
                  {language ? 'CONTACT' : 'CONTACTO'}
                </span>
              </Button>
            </React.Fragment>
          );

          /*return (
            <ul>
              <Link to="/mrg/sawgrass-cafe">
                <li>Sawgrass Cafe</li>
              </Link>
              <Link to="/mrg/maxs">
                <li>Max's</li>
              </Link>
              <Link to="/mrg/cafe-hammock">
                <li>Café Hammock</li>
              </Link>
            </ul>
          );*/
        },
      },
      body: [
        {
          p: language
            ? 'For conventions, weddings, and special events, our flexible meeting space provides ample room for all of your needs. Full open ballrooms can accommodate extensive general sessions, including banquet and catering services for up to 1,200 guests.'
            : 'Para convenciones, bodas y eventos especiales, tenemos amplio espacio para todas sus necesidades. Los salones de baile completamente abiertos pueden acomodar sesiones generales extensas, incluidos servicios de banquetes y catering para hasta 1,200 invitados.',
        },
      ],
    },
  ];

  const header = () => {
    return (
      <div className={classes.headerSection}>
        <div className={classes.headerLogoSection}>
          <img
            className={classes.headerLogo}
            src={emblem}
            alt="miccosukee emblem logo"
          />
          <h1 style={{ color: yellowTitle }} className={classes.headerTitle}>
            <span className={classes.headerTitleSpan}>BANQUETS</span>
            <br />
            &amp; CATERING
          </h1>
        </div>
      </div>
    );
  };

  const disclaimer = () => {
    return (
      <div className={classes.disclaimerSection}>
        <p className={classes.disclaimerBold}>
          {language
            ? 'Please visit the Hotel Front Desk or contact (305) 925-2555 for more details.'
            : 'Visite la recepción del hotel o llame al (305) 925-2555 para obtener más detalles.'}
        </p>
        <p className={classes.disclaimerItalic}>
          {language
            ? 'Room occupants must be 18 years of age or older. Rates may not be combined with any other discount or offer. Management reserves all rights.'
            : 'Los ocupantes de la habitación deben tener 18 años de edad o más. Las tarifas no se pueden combinar con otro descuento u oferta. La gerencia se reserva todos los derechos.'}
        </p>
      </div>
    );
  };

  const renderContentSection = () => {
    const section = (content) => {
      const details = () => {
        return content.body.map((item) => {
          return (
            <p key={item.p} className={classes.contentSectionDetails}>
              {item.p}
            </p>
          );
        });
      };

      const renderButtonContent = () => {
        if (content.button.type) {
          if (content.button.type === 'ul') {
            return content.button.renderList();
          } else if (content.button.type === 'external') {
            return (
              <Button
                style={{ backgroundColor: content.color }}
                className={classes.contentButton}
                target="_blank"
                href={content.button.link}
              >
                <span className={classes.contentButtonText}>
                  {content.button.text}
                </span>
              </Button>
            );
          }
        } else {
          return (
            <Link to={content.button.link}>
              <Button
                style={{ backgroundColor: content.color }}
                className={classes.contentButton}
              >
                <span className={classes.contentButtonText}>
                  {content.button.text}
                </span>
              </Button>
            </Link>
          );
        }
      };

      return (
        <div>
          {content.image()}
          <div className={classes.contentTextDiv}>
            <h2
              style={{ color: content.color }}
              className={classes.contentSectionHeader}
            >
              {content.title}
            </h2>
            {/* IF SUBHEADER EXISTS */}
            {content.subHeader ? (
              <p className={classes.contentSectionSubHeader}>
                {content.subHeader}
              </p>
            ) : null}
            {details()}
          </div>
          {renderButtonContent()}
        </div>
      );
    };

    return amenitiesContent.map((item, index) => {
      //change padding dependent on what section this is
      const divStyle = () => {
        if (index === 0) {
          return classes.contentSectionTop;
        } else if (index === amenitiesContent.length - 1) {
          return classes.contentSectionBottom;
        } else {
          return classes.contentSectionMiddle;
        }
      };
      return (
        <div key={item.title} className={divStyle()}>
          {section(item)}
        </div>
      );
    });
  };

  const renderContent = () => {
    return (
      <div>
        {header()}
        <div className={classes.container} style={{ marginBottom: '20px' }}>
          <RaisedContainer>
            {languageToggler()}
            <div className={classes.contentSection}>
              {renderContentSection()}
              <hr
                className={classes.horizontalRule}
                style={{ marginTop: '60px', marginBottom: '40px' }}
              />
              {disclaimer()}
            </div>
          </RaisedContainer>
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderContent()}
      <MrgFooter />
      <CustomContactModal
        language={language}
        showModal={showContactModal}
        closeModal={() => closeModal(setShowContactModal)}
        entity={mrgBusinessInfo}
      />
    </div>
  );
};

export default ResortPackages;

/*
import React from 'react';

import { Link } from 'react-router-dom';

// context
import { useLanguage } from 'contexts/languageContext.js';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import Button from 'components/CustomButtons/Button.js';

//import Footer from 'components/CustomFooters/SimpleFooter';
import MrgFooter from 'components/CustomFooters/MrgFooter.js';

// styles
import styles from 'assets/jss/material-kit-react/views/landingPage/amenities.js';

// header image
import heroDesktop from 'assets/media/img/landingPages/resortPackages/hero_image_desktop.jpg';
import heroMobile from 'assets/media/img/landingPages/resortPackages/hero_image_mobile.jpg';

// Icons
import { Icon } from '@material-ui/core';

// Images
import emblem from 'assets/media/img/miccosukee/MiccosukeeEmblem_Color.svg';
import image1 from 'assets/media/img/landingPages/resortPackages/getaway_section-image_mobile.jpg';
import image2 from 'assets/media/img/landingPages/resortPackages/adventure_section-image_mobile.jpg';
import image3 from 'assets/media/img/landingPages/resortPackages/golf_section-image_mobile.jpg';

import image1desktop from 'assets/media/img/landingPages/resortPackages/getaway_section-image_desktop.jpg';
import image2desktop from 'assets/media/img/landingPages/resortPackages/adventure_section-image_desktop.jpg';
import image3desktop from 'assets/media/img/landingPages/resortPackages/golf_section-image_desktop.jpg';

const useStyles = makeStyles(styles);

const ResortPackages = () => {
  const classes = useStyles();

  const language = useLanguage();

  const red = '#fe284f';
  const yellowTitle = '#ffd800';
  const yellow = '#ff9c00';
  const green = '#33ab88';

  const handleClick = () => {
    window.open('tel:+13059252555');
  };

  const header = () => {
    return (
      <div className={classes.headerSection}>
        <div className={classes.headerLogoSection}>
          <img
            className={classes.headerLogo}
            src={emblem}
            alt="miccosukee emblem logo"
          />
          <h1 style={{ color: yellowTitle }} className={classes.headerTitle}>
            <span className={classes.headerTitleSpan}>RESORT</span>
            <br />
            AMENITIES
          </h1>
        </div>
      </div>
    );
  };

  const disclaimer = () => {
    return (
      <div className={classes.disclaimerSection}>
        <p className={classes.disclaimerBold}>
          {language
            ? 'Please visit the Hotel Front Desk or contact (305) 925-2555 for more details.'
            : 'Visite la recepción del hotel o llame al (305) 925-2555 para obtener más detalles.'}
        </p>
        <p className={classes.disclaimerItalic}>
          {language
            ? 'Room occupants must be 18 years of age or older. Rates may not be combined with any other discount or offer. Management reserves all rights.'
            : 'Los ocupantes de la habitación deben tener 18 años de edad o más. Las tarifas no se pueden combinar con otro descuento u oferta. La gerencia se reserva todos los derechos.'}
        </p>
      </div>
    );
  };

  const horizontalRule = () => {
    return <hr className={classes.horizontalRule} />;
  };

  const getaway = (image, color) => {
    return (
      <div>
        <div>
          <img src={image} className={classes.contentImage} />
        </div>
        <div className={classes.contentTextDiv}>
          <h2 style={{ color: color }} className={classes.contentSectionHeader}>
            {language ? 'GETAWAY PACKAGE' : 'PAQUETE DE ESCAPADA'}
          </h2>
          <p className={classes.contentSectionSubHeader}>
            {language
              ? 'Miccosukee Casino & Resort offers world-class slots and luxurious accommodations in the heart of the Florida Everglades.'
              : 'Miccosukee Casino & Resort ofrece máquinas tragamonedas de clase mundial y alojamiento de lujo en el corazón de los Everglades de Florida.'}
          </p>
          <p className={classes.contentSectionDetails}>
            {language
              ? 'Book 2 nights and get the 3rd night free!'
              : '¡Reserve 2 noches y obtenga la 3ra noche gratis!'}
          </p>
          <p className={classes.contentSectionDetails}>
            {language
              ? 'Reserve 2 nights in any of our Deluxe Level or Executive Level rooms or suites at the standard rate and get the 3rd night free!'
              : '¡Reserve 2 noches en cualquiera de nuestras habitaciones o suites de nivel Deluxe o Ejecutivo a la tarifa estándar y obtenga la 3ra noche gratis!'}
          </p>
          <p className={classes.contentSectionDetails}>
            {language
              ? 'Book by 8/31/2022 for stays through 9/15/2022.'
              : 'Reserve antes del 31 de agosto de 2022 para estancias hasta el 15 de septiembre de 2022.'}
          </p>
        </div>
        <Button
          onClick={handleClick}
          style={{ backgroundColor: color }}
          className={classes.contentButton}
        >
          <span className={classes.contentButtonText}>
            {language ? 'CALL NOW' : 'LLAME AHORA'}
          </span>
        </Button>
      </div>
    );
  };

  const adventurePackage = (image, color) => {
    return (
      <div>
        <img src={image} className={classes.contentImage} />
        <div className={classes.contentTextDiv}>
          <h2 style={{ color: color }} className={classes.contentSectionHeader}>
            {language ? 'ADVENTURE PACKAGE' : 'PAQUETE DE AVENTURA'}
          </h2>
          <p className={classes.contentSectionSubHeader}>
            {language
              ? 'Take an exhilarating airboat ride and discover the Everglades, home of the Miccosukee Tribe. Visit a hammock-style camp and glimpse into the Tribe’s traditions and history, while experiencing the excitement and tranquility only nature can provide.'
              : 'Disfrute un emocionante paseo en hidrodeslizador y descubra los Everglades, hogar de la Tribu Miccosukee. Visite un campamento estilo hamaca y eche un vistazo a las tradiciones y la historia de la Tribu, mientras experimenta la emoción y la tranquilidad que solo la naturaleza puede brindar.'}
          </p>
          <ul style={{ paddingLeft: '20px' }}>
            <li className={classes.contentSectionDetails}>
              {language
                ? 'Includes a Deluxe Level room with one king bed or two queen beds for one night, double occupancy.'
                : 'Incluye una habitación de nivel Deluxe con una cama king o dos camas queen para una noche, ocupación doble.'}
            </li>
            <li className={classes.contentSectionDetails}>
              {language
                ? 'Airboat ride experience through the beautiful Everglades'
                : 'Experiencia de paseo en hidrodeslizador por los hermosos Everglades'}
            </li>
            <li className={classes.contentSectionDetails}>
              {language
                ? 'Transportation to and from Miccosukee Airboats'
                : 'Transporte ida y vuelta a los Miccosukee Airboats'}
            </li>
          </ul>
          <p className={classes.contentSectionDetails}>
            {language
              ? '* Valid through 11/30/2022'
              : '* Válido hasta el 30 de noviembre de 2022'}
            <br />
            $168.60
          </p>
          <p className={classes.contentSectionDetails}>
            {language
              ? '* Valid 12/01/2022 through 4/30/2023'
              : '* Válido desde el 1 de diciembre de 2022 hasta el 30 de abril de 2023'}
            <br />
            $262.95
          </p>
        </div>
        <Button
          onClick={handleClick}
          style={{ backgroundColor: color }}
          className={classes.contentButton}
        >
          <span className={classes.contentButtonText}>
            {language ? 'CALL NOW' : 'LLAME AHORA'}
          </span>
        </Button>
      </div>
    );
  };

  const golfPackage = (image, color) => {
    return (
      <div>
        <img src={image} className={classes.contentImage} />
        <div className={classes.contentTextDiv}>
          <h2 style={{ color: color }} className={classes.contentSectionHeader}>
            {language ? 'GOLF PACKAGE' : 'PAQUETE DE GOLF'}
          </h2>
          <p className={classes.contentSectionSubHeader}>
            {language
              ? 'Miccosukee Golf & Country Club boasts three challenging courses with breathtaking views enjoyed by pros and enthusiasts alike. After playing an exciting round of golf, rest up and seize the night at our Resort.'
              : 'Miccosukee Golf & Country Club cuenta con tres campos desafiantes con impresionantes vistas que disfrutan tanto los profesionales como los entusiastas. Después de jugar una emocionante ronda de golf, descanse y aproveche la noche en nuestro Resort.'}
          </p>
          <ul style={{ paddingLeft: '20px' }}>
            <li className={classes.contentSectionDetails}>
              {language
                ? 'Includes a Deluxe Level room with one king bed or two queen beds for one night, double occupancy.'
                : 'Incluye una habitación de nivel Deluxe con una cama king o dos camas queen para una noche, ocupación doble.'}
            </li>
            <li className={classes.contentSectionDetails}>
              {language
                ? '18 holes of golf for two, plus cart rental'
                : '18 hoyos de golf para dos, más alquiler de carrito'}
            </li>
            <li className={classes.contentSectionDetails}>
              {language
                ? 'Transportation to and from Miccosukee Golf & Country Club'
                : 'Transporte ida y vuelta al Miccosukee Golf & Country Club'}
            </li>
          </ul>
          <p className={classes.contentSectionDetails}>
            {language
              ? '* Valid through 11/30/2022'
              : '* Válido hasta el 30 de noviembre de 2022'}
            <br />
            $188.60
          </p>
          <p className={classes.contentSectionDetails}>
            {language
              ? '* Valid 12/01/2022 through 4/30/2023'
              : '* Válido desde el 1 de diciembre de 2022 hasta el 30 de abril de 2023'}
            <br />
            $282.95
          </p>
        </div>
        <Button
          onClick={handleClick}
          style={{ backgroundColor: color }}
          className={classes.contentButton}
        >
          <span className={classes.contentButtonText}>
            {language ? 'CALL NOW' : 'LLAME AHORA'}
          </span>
        </Button>
      </div>
    );
  };

  const bottomSpacer = (pixelNumber) => {
    return <div style={{ paddingBottom: `${pixelNumber}px` }}></div>;
  };

  const renderDesktopView = () => {
    return (
      <div>
        {header()}
        <div
          id="desktop"
          className={classes.container}
          style={{ marginBottom: '20px' }}
        >
          <RaisedContainer>
            {getaway(image1desktop, red)}
            {bottomSpacer(130)}
            {adventurePackage(image2desktop, yellow)}
            {bottomSpacer(130)}
            {golfPackage(image3desktop, green)}
            <div style={{ paddingTop: '60px', paddingBottom: '40px' }}>
              {horizontalRule()}
            </div>
            {disclaimer()}
            {bottomSpacer(60)}
          </RaisedContainer>
        </div>
      </div>
    );
  };

  const renderMobileView = () => {
    return (
      <div>
        {header()}
        <div
          id="mobile"
          className={classes.container}
          style={{ marginBottom: '20px' }}
        >
          <RaisedContainer customMargin="-18px">
            {getaway(image1, red)}
            {bottomSpacer(110)}
            {adventurePackage(image2, yellow)}
            {bottomSpacer(110)}
            {golfPackage(image3, green)}
            <div style={{ paddingTop: '40px', paddingBottom: '24px' }}>
              {horizontalRule()}
            </div>
            {disclaimer()}
            {bottomSpacer(20)}
          </RaisedContainer>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Hidden mdUp>{renderMobileView()}</Hidden>
      <Hidden smDown>{renderDesktopView()}</Hidden>
      <MrgFooter />
    </div>
  );
};

export default ResortPackages;
*/
