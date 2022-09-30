import React, { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';

// context
import { useLanguage } from 'contexts/languageContext.js';
import { ContactModalContext } from 'contexts/ContactFormModalContext.js';
import CustomContactModal from 'components/CustomModal/CustomContactModals/CustomContactModal.js';

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
import styles from 'assets/jss/material-kit-react/views/landingPage/resortPackages.js';

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

  const red = '#fe284f';
  const yellowTitle = '#ffd800';
  const yellow = '#ff9c00';
  const green = '#33ab88';

  const handleClick = () => {
    window.open('tel:+13059252555');
  };

  const disclaimer = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontWeight: 'bold' }}>
          {language
            ? 'Please visit the Hotel Front Desk or contact (305) 925-2555 for more details.'
            : 'Visite la recepción del hotel o llame al (305) 925-2555 para obtener más detalles.'}
        </p>
        <p style={{ fontStyle: 'italic' }}>
          {language
            ? 'Room occupants must be 18 years of age or older. Rates may not be combined with any other discount or offer. Management reserves all rights.'
            : 'Los ocupantes de la habitación deben tener 18 años de edad o más. Las tarifas no se pueden combinar con otro descuento u oferta. La gerencia se reserva todos los derechos.'}
        </p>
      </div>
    );
  };

  const renderDesktopView = () => {
    const contentDivStyle = { marginTop: '70px' };
    const imageStyle = { width: '100%', borderRadius: '10px' };
    const buttonStyle = (color) => {
      return {
        backgroundColor: color,
        width: '260px',
        paddingTop: '16px',
        paddingBottom: '16px',
      };
    };

    const header = () => {
      return (
        <div
          style={{
            padding: '90px 0 140px 0',
            backgroundColor: '#373737',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              style={{
                maxWidth: '144px',
                display: 'inline-block',
                marginRight: '20px',
              }}
              src={emblem}
              alt="miccosukee emblem logo"
            />
            <h1
              style={{
                textAlign: 'center',
                fontSize: '80px',
                fontWeight: '800',
                fontFamily: 'AvenirNextHeavy',
                display: 'inline-block',
                lineHeight: '.95',
                color: yellowTitle,
              }}
            >
              <span style={{ letterSpacing: '4px' }}>
                {language ? 'EXPERIENCE' : 'EXPERIENCIA'}
              </span>
              <br />
              MICCOSUKEE
            </h1>
          </div>
        </div>
      );
    };

    const horizontalRule = () => {
      return (
        <hr
          style={{
            border: '1px solid rgb(212 212 212)',
            width: '150px',
          }}
        />
      );
    };

    const bottomSpacer = (pixelNumber) => {
      return <div style={{ paddingBottom: `${pixelNumber}px` }}></div>;
    };

    const getaway = () => {
      const detailsCss = {
        fontSize: '18px',
      };
      return (
        <div style={contentDivStyle}>
          <img src={image1desktop} style={imageStyle} />
          <div style={{ margin: '30px 0 20px 0' }}>
            <h2 style={{ color: red, fontWeight: '600', fontSize: '30px' }}>
              {language ? 'GETAWAY PACKAGE' : 'PAQUETE DE ESCAPADA'}
            </h2>
            <p
              style={{
                fontSize: '16px',
                fontWeight: '400',
                fontStyle: 'italic',
              }}
            >
              {language
                ? 'Miccosukee Casino & Resort offers world-class slots and luxurious accommodations in the heart of the Florida Everglades.'
                : 'Miccosukee Casino & Resort ofrece máquinas tragamonedas de clase mundial y alojamiento de lujo en el corazón de los Everglades de Florida.'}
            </p>
            <p style={detailsCss}>
              {language
                ? 'Book 2 nights and get the 3rd night free!'
                : '¡Reserve 2 noches y obtenga la 3ra noche gratis!'}
            </p>
            <p style={detailsCss}>
              {language
                ? 'Reserve 2 nights in any of our Deluxe Level or Executive Level rooms or suites at the standard rate and get the 3rd night free!'
                : '¡Reserve 2 noches en cualquiera de nuestras habitaciones o suites de nivel Deluxe o Ejecutivo a la tarifa estándar y obtenga la 3ra noche gratis!'}
            </p>
            <p style={detailsCss}>
              {language
                ? 'Book by 8/31/2022 for stays through 9/15/2022.'
                : 'Reserve antes del 31 de agosto de 2022 para estancias hasta el 15 de septiembre de 2022.'}
            </p>
            <p style={detailsCss}>
              {language
                ? '* Valid through 11/30/2022.'
                : '* Válido hasta el 30 de noviembre de 2022.'}
            </p>
          </div>
          <Button onClick={handleClick} style={buttonStyle(red)}>
            <span style={{ fontSize: '14px', fontWeight: '600' }}>
              {language ? 'CALL NOW' : 'LLAME AHORA'}
            </span>
          </Button>
        </div>
      );
    };

    const adventurePackage = () => {
      const detailsCss = {
        fontSize: '18px',
      };
      return (
        <div style={contentDivStyle}>
          <img src={image2desktop} style={imageStyle} />
          <div style={{ marginTop: '30px' }}>
            <h2
              style={{
                color: yellow,
                fontWeight: '600',
                fontSize: '30px',
              }}
            >
              {language ? 'ADVENTURE PACKAGE' : 'PAQUETE DE AVENTURA'}
            </h2>
            <p
              style={{
                fontSize: '16px',
                fontWeight: '400',
                fontStyle: 'italic',
              }}
            >
              {language
                ? 'Take an exhilarating airboat ride and discover the Everglades, home of the Miccosukee Tribe. Visit a hammock-style camp and glimpse into the Tribe’s traditions and history, while experiencing the excitement and tranquility only nature can provide.'
                : 'Disfrute un emocionante paseo en hidrodeslizador y descubra los Everglades, hogar de la Tribu Miccosukee. Visite un campamento estilo hamaca y eche un vistazo a las tradiciones y la historia de la Tribu, mientras experimenta la emoción y la tranquilidad que solo la naturaleza puede brindar.'}
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={detailsCss}>
                {language
                  ? 'Includes a Deluxe Level room with one king bed or two queen beds for one night, double occupancy.'
                  : 'Incluye una habitación de nivel Deluxe con una cama king o dos camas queen para una noche, ocupación doble.'}
              </li>
              <li style={detailsCss}>
                {language
                  ? 'Airboat ride experience through the beautiful Everglades'
                  : 'Experiencia de paseo en hidrodeslizador por los hermosos Everglades'}
              </li>
              <li style={detailsCss}>
                {language
                  ? 'Transportation to and from Miccosukee Airboats'
                  : 'Transporte ida y vuelta a los Miccosukee Airboats'}
              </li>
            </ul>
            <p style={detailsCss}>
              {language
                ? '* Valid through 11/30/2022'
                : '* Válido hasta el 30 de noviembre de 2022'}
              <br />
              $168.60
            </p>
            <p style={detailsCss}>
              {language
                ? '* Valid 12/01/2022 through 4/30/2023'
                : '* Válido desde el 1 de diciembre de 2022 hasta el 30 de abril de 2023'}
              <br />
              $262.95
            </p>
          </div>
          <Button onClick={handleClick} style={buttonStyle(yellow)}>
            <span style={{ fontSize: '14px', fontWeight: '600' }}>
              {language ? 'CALL NOW' : 'LLAME AHORA'}
            </span>
          </Button>
        </div>
      );
    };

    const golfPackage = () => {
      const detailsCss = {
        fontSize: '18px',
      };
      return (
        <div style={contentDivStyle}>
          <img src={image3desktop} style={imageStyle} />
          <div style={{ marginTop: '30px' }}>
            <h2
              style={{
                color: green,
                fontWeight: '600',
                fontSize: '30px',
              }}
            >
              {language ? 'GOLF PACKAGE' : 'PAQUETE DE GOLF'}
            </h2>
            <p
              style={{
                fontSize: '16px',
                fontWeight: '400',
                fontStyle: 'italic',
              }}
            >
              {language
                ? 'Miccosukee Golf & Country Club boasts three challenging courses with breathtaking views enjoyed by pros and enthusiasts alike. After playing an exciting round of golf, rest up and seize the night at our Resort.'
                : 'Miccosukee Golf & Country Club cuenta con tres campos desafiantes con impresionantes vistas que disfrutan tanto los profesionales como los entusiastas. Después de jugar una emocionante ronda de golf, descanse y aproveche la noche en nuestro Resort.'}
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={detailsCss}>
                {language
                  ? 'Includes a Deluxe Level room with one king bed or two queen beds for one night, double occupancy.'
                  : 'Incluye una habitación de nivel Deluxe con una cama king o dos camas queen para una noche, ocupación doble.'}
              </li>
              <li style={detailsCss}>
                {language
                  ? '18 holes of golf for two, plus cart rental'
                  : '18 hoyos de golf para dos, más alquiler de carrito'}
              </li>
              <li style={detailsCss}>
                {language
                  ? 'Transportation to and from Miccosukee Golf & Country Club'
                  : 'Transporte ida y vuelta al Miccosukee Golf & Country Club'}
              </li>
            </ul>
            <p style={detailsCss}>
              {language
                ? '* Valid through 11/30/2022'
                : '* Válido hasta el 30 de noviembre de 2022'}
              <br />
              $188.60
            </p>
            <p style={detailsCss}>
              {language
                ? '* Valid 12/01/2022 through 4/30/2023'
                : '* Válido desde el 1 de diciembre de 2022 hasta el 30 de abril de 2023'}
              <br />
              $282.95
            </p>
          </div>
          <Button onClick={handleClick} style={buttonStyle(green)}>
            <span style={{ fontSize: '14px', fontWeight: '600' }}>
              {language ? 'CALL NOW' : 'LLAME AHORA'}
            </span>
          </Button>
        </div>
      );
    };

    return (
      <div>
        {/*<img style={{ width: '100%' }} src={heroDesktop} />*/}
        {header()}
        <div
          id="desktop"
          className={classes.container}
          style={{ marginBottom: '20px' }}
        >
          <RaisedContainer>
            {getaway()}
            {bottomSpacer(130)}
            {/*horizontalRule()*/}
            {adventurePackage()}
            {bottomSpacer(130)}
            {/*horizontalRule()*/}
            {golfPackage()}
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
    const contentDivStyle = { marginTop: '20px' };
    const imageStyle = { width: '100%', borderRadius: '10px' };
    const buttonStyle = (color) => {
      return {
        backgroundColor: color,
        width: '100%',
      };
    };

    const horizontalRule = () => {
      return (
        <hr
          style={{
            border: '1px solid rgb(212 212 212)',
            width: '100px',
          }}
        />
      );
    };

    const bottomSpacer = (pixelNumber) => {
      return <div style={{ paddingBottom: `${pixelNumber}px` }}></div>;
    };

    const header = () => {
      return (
        <div
          style={{
            padding: '40px 0 60px 0',
            backgroundColor: '#373737',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              style={{
                maxWidth: '64px',
                display: 'inline-block',
                marginRight: '10px',
              }}
              src={emblem}
              alt="miccosukee emblem logo"
            />
            <h1
              style={{
                textAlign: 'center',
                fontSize: '36px',
                fontWeight: '800',
                fontFamily: 'AvenirNextHeavy',
                display: 'inline-block',
                lineHeight: '.95',
                color: yellowTitle,
              }}
            >
              <span style={{ letterSpacing: '2px', textAlign: 'center' }}>
                {language ? 'EXPERIENCE' : 'EXPERIENCIA'}
              </span>
              <br />
              MICCOSUKEE
            </h1>
          </div>
        </div>
      );
    };

    const getaway = () => {
      const detailsCss = {
        fontSize: '18px',
      };
      return (
        <div style={contentDivStyle}>
          <img src={image1} style={imageStyle} />
          <div style={{ marginTop: '30px', marginBottom: '20px' }}>
            <h2
              style={{ color: '#f4004a', fontWeight: '600', fontSize: '30px' }}
            >
              {language ? 'GETAWAY PACKAGE' : 'PAQUETE DE ESCAPADA'}
            </h2>
            <p
              style={{
                fontSize: '16px',
                fontWeight: '400',
                fontStyle: 'italic',
              }}
            >
              {language
                ? 'Miccosukee Casino & Resort offers world-class slots and luxurious accommodations in the heart of the Florida Everglades.'
                : 'Miccosukee Casino & Resort ofrece máquinas tragamonedas de clase mundial y alojamiento de lujo en el corazón de los Everglades de Florida.'}
            </p>
            <p style={detailsCss}>
              {language
                ? 'Book 2 nights and get the 3rd night free!'
                : '¡Reserve 2 noches y obtenga la 3ra noche gratis!'}
            </p>
            <p style={detailsCss}>
              {language
                ? 'Reserve 2 nights in any of our Deluxe Level or Executive Level rooms or suites at the standard rate and get the 3rd night free!'
                : '¡Reserve 2 noches en cualquiera de nuestras habitaciones o suites de nivel Deluxe o Ejecutivo a la tarifa estándar y obtenga la 3ra noche gratis!'}
            </p>
            <p style={detailsCss}>
              {language
                ? 'Book by 8/31/2022 for stays through 9/15/2022.'
                : 'Reserve antes del 31 de agosto de 2022 para estancias hasta el 15 de septiembre de 2022.'}
            </p>
            <p style={detailsCss}>
              {language
                ? '* Valid through 11/30/2022.'
                : '* Válido hasta el 30 de noviembre de 2022.'}
            </p>
          </div>
          <Button onClick={handleClick} style={buttonStyle(red)}>
            <span style={{ fontSize: '12px', fontWeight: '600' }}>
              {language ? 'CALL NOW' : 'LLAME AHORA'}
            </span>
          </Button>
        </div>
      );
    };

    const adventurePackage = () => {
      const detailsCss = {
        fontSize: '18px',
      };
      return (
        <div style={contentDivStyle}>
          <img src={image2} style={imageStyle} />
          <div style={{ marginTop: '30px', marginBottom: '20px' }}>
            <h2
              style={{
                color: 'rgb(255 141 0)',
                fontWeight: '600',
                fontSize: '30px',
              }}
            >
              {language ? 'ADVENTURE PACKAGE' : 'PAQUETE DE AVENTURA'}
            </h2>
            <p
              style={{
                fontSize: '16px',
                fontWeight: '400',
                fontStyle: 'italic',
              }}
            >
              {language
                ? 'Take an exhilarating airboat ride and discover the Everglades, home of the Miccosukee Tribe. Visit a hammock-style camp and glimpse into the Tribe’s traditions and history, while experiencing the excitement and tranquility only nature can provide.'
                : 'Disfrute un emocionante paseo en hidrodeslizador y descubra los Everglades, hogar de la Tribu Miccosukee. Visite un campamento estilo hamaca y eche un vistazo a las tradiciones y la historia de la Tribu, mientras experimenta la emoción y la tranquilidad que solo la naturaleza puede brindar.'}
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={detailsCss}>
                {language
                  ? 'Includes a Deluxe Level room with one king bed or two queen beds for one night, double occupancy.'
                  : 'Incluye una habitación de nivel Deluxe con una cama king o dos camas queen para una noche, ocupación doble.'}
              </li>
              <li style={detailsCss}>
                {language
                  ? 'Airboat ride experience through the beautiful Everglades'
                  : 'Experiencia de paseo en hidrodeslizador por los hermosos Everglades'}
              </li>
              <li style={detailsCss}>
                {language
                  ? 'Transportation to and from Miccosukee Airboats'
                  : 'Transporte ida y vuelta a los Miccosukee Airboats'}
              </li>
            </ul>
            <p style={detailsCss}>
              {language
                ? '* Valid through 11/30/2022'
                : '* Válido hasta el 30 de noviembre de 2022'}
              <br />
              $168.60
            </p>
            <p style={detailsCss}>
              {language
                ? '* Valid 12/01/2022 through 4/30/2023'
                : '* Válido desde el 1 de diciembre de 2022 hasta el 30 de abril de 2023'}
              <br />
              $262.95
            </p>
          </div>
          <Button onClick={handleClick} style={buttonStyle(yellow)}>
            <span style={{ fontSize: '12px', fontWeight: '600' }}>
              {language ? 'CALL NOW' : 'LLAME AHORA'}
            </span>
          </Button>
        </div>
      );
    };

    const golfPackage = () => {
      const detailsCss = {
        fontSize: '18px',
      };
      return (
        <div style={contentDivStyle}>
          <img src={image3} style={imageStyle} />
          <div style={{ marginTop: '30px', marginBottom: '20px' }}>
            <h2
              style={{
                color: 'rgb(0 171 84)',
                fontWeight: '600',
                fontSize: '30px',
              }}
            >
              {language ? 'GOLF PACKAGE' : 'PAQUETE DE GOLF'}
            </h2>
            <p
              style={{
                fontSize: '16px',
                fontWeight: '400',
                fontStyle: 'italic',
              }}
            >
              {language
                ? 'Miccosukee Golf & Country Club boasts three challenging courses with breathtaking views enjoyed by pros and enthusiasts alike. After playing an exciting round of golf, rest up and seize the night at our Resort.'
                : 'Miccosukee Golf & Country Club cuenta con tres campos desafiantes con impresionantes vistas que disfrutan tanto los profesionales como los entusiastas. Después de jugar una emocionante ronda de golf, descanse y aproveche la noche en nuestro Resort.'}
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={detailsCss}>
                {language
                  ? 'Includes a Deluxe Level room with one king bed or two queen beds for one night, double occupancy.'
                  : 'Incluye una habitación de nivel Deluxe con una cama king o dos camas queen para una noche, ocupación doble.'}
              </li>
              <li style={detailsCss}>
                {language
                  ? '18 holes of golf for two, plus cart rental'
                  : '18 hoyos de golf para dos, más alquiler de carrito'}
              </li>
              <li style={detailsCss}>
                {language
                  ? 'Transportation to and from Miccosukee Golf & Country Club'
                  : 'Transporte ida y vuelta al Miccosukee Golf & Country Club'}
              </li>
            </ul>
            <p style={detailsCss}>
              {language
                ? '* Valid through 11/30/2022'
                : '* Válido hasta el 30 de noviembre de 2022'}
              <br />
              $188.60
            </p>
            <p style={detailsCss}>
              {language
                ? '* Valid 12/01/2022 through 4/30/2023'
                : '* Válido desde el 1 de diciembre de 2022 hasta el 30 de abril de 2023'}
              <br />
              $282.95
            </p>
          </div>
          <Button onClick={handleClick} style={buttonStyle(green)}>
            <span style={{ fontSize: '12px', fontWeight: '600' }}>
              {language ? 'CALL NOW' : 'LLAME AHORA'}
            </span>
          </Button>
        </div>
      );
    };

    return (
      <div>
        {/*<img style={{ width: '100%' }} src={heroMobile} />*/}
        {header()}
        <div
          id="mobile"
          className={classes.container}
          style={{ marginBottom: '20px' }}
        >
          {/*header()*/}
          <RaisedContainer customMargin="-18px">
            {getaway()}
            {bottomSpacer(110)}
            {/*horizontalRule()*/}
            {adventurePackage()}
            {bottomSpacer(110)}
            {/*horizontalRule()*/}
            {golfPackage()}
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
    <div className={classes.main}>
      <Hidden mdUp>{renderMobileView()}</Hidden>
      <Hidden smDown>{renderDesktopView()}</Hidden>
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
