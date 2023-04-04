import React, { useContext, useEffect } from 'react';

// Custom Component
import Footer from 'components/Footer/Footer.js';

// Theme
import { mrgColor } from 'themes/colors.js';

// Business Info
import { mrgBusinessInfo } from 'business_info/genericInfo.js';
import { mrgSocialMedia } from 'business_info/socialMedia.js';

// Context
import { ContactModalContext } from 'contexts/ContactFormModalContext.js';
import { useLanguage } from 'contexts/languageContext.js';

// Legal
import { privacyPolicy } from 'business_info/legal';
import { cookiePolicy } from 'business_info/legal';
import { termsConditions } from 'business_info/legal';

// Images
import nonsmokingimage from 'assets/media/img/mrg/icons8-do-not-smoke-96.png';

const MrgFooter = () => {
  const language = useLanguage();
  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );

  // close contact modal on mount
  useEffect(() => {
    closeModal(setShowContactModal);
  }, []);

  const openModal = (setState) => {
    setState(true);
  };

  const closeModal = (setState) => {
    setState(false);
  };

  const footerArray = [
    {
      header: 'MICCOSUKEE',
      subMenu: [
        {
          linkText: language ? 'Main Home' : 'Página Principal',
          linkTo: '/',
        },
        {
          linkText: 'Info',
          //mrg to mcr change
          linkTo: '/mcr/info',
        },
        {
          externalLink: true,
          linkText: language ? 'Careers' : 'Empleos',
          linkTo: mrgBusinessInfo.careersLink,
        },
      ],
    },
    {
      header: language ? 'ADDITIONAL LINKS' : 'ENLACES ADICIONALES',
      subMenu: [
        {
          linkText: language ? 'Contact' : 'Contacto',
          //linkTo: "#contact",
          clickFunction: () => openModal(setShowContactModal),
        },
        {
          externalLink: true,
          linkText: language ? 'Directions' : 'Direcciones',
          linkTo: 'https://goo.gl/maps/yZ9QCXJ869UqZRxJ9',
        },
        {
          externalLink: true,
          linkText: language ? 'Banquets & Catering' : 'Banquetes y Catering',
          //mrg to mcr change
          linkTo: 'https://www.miccosukee.com/banquets-catering',
        },
        {
          externalLink: true,
          linkText: language ? 'Privacy Policy' : 'PÓLIZA DE PRIVACIDAD',
          linkTo: privacyPolicy,
        },
        {
          externalLink: true,
          linkText: language ? 'Cookie Policy' : 'PÓLIZA DE COOKIES',
          linkTo: cookiePolicy,
        },
        {
          externalLink: true,
          linkText: language ? 'Terms & Conditions' : 'TÉRMINOS Y CONDICIONES',
          linkTo: termsConditions,
        },
      ],
    },
    {
      header: language ? 'FOLLOW US' : 'CONÉCTESE CON NOSOTROS',
      subMenu: [
        {
          externalLink: true,
          linkText: 'Facebook',
          linkTo: mrgSocialMedia.facebook,
        },
        {
          externalLink: true,
          linkText: 'Instagram',
          linkTo: mrgSocialMedia.instagram,
        },
        {
          externalLink: true,
          linkText: 'Twitter',
          linkTo: mrgSocialMedia.twitter,
        },
      ],
    },
    {
      action: true,
      headerDesktop: language
        ? 'SIGN UP FOR OUR PROMOTIONS'
        : 'INSCRÍBETE A NUESTRAS PROMOCIONES',
      headerMobile: language ? 'SUBSCRIBE' : 'SUSCRÍBETE',
    },
  ];

  return (
    <React.Fragment>
      <Footer
        footerMenuItems={footerArray}
        color={mrgColor}
        signup={mrgBusinessInfo.name}
      />
    </React.Fragment>
  );
};

export default MrgFooter;

/*<img src={nonsmokingimage} />*/
