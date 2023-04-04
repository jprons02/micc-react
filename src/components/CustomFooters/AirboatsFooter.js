import React, { useContext, useEffect } from 'react';

// Custom Component
import Footer from 'components/Footer/Footer.js';

// Theme
import { airboatsColor } from 'themes/colors.js';

// Business Info
import { airboatsBusinessInfo } from 'business_info/genericInfo.js';
import { airboatsSocialMedia } from 'business_info/socialMedia.js';

// Context
import { ContactModalContext } from 'contexts/ContactFormModalContext.js';
import { useLanguage } from 'contexts/languageContext.js';

// Legal
import { privacyPolicy } from 'business_info/legal';
import { cookiePolicy } from 'business_info/legal';
import { termsConditions } from 'business_info/legal';

const AirboatsFooter = () => {
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
          linkTo: '/airboats/info',
        },
        {
          externalLink: true,
          linkText: language ? 'Careers' : 'Empleos',
          linkTo:
            'https://www.indeed.com/cmp/Miccosukee-Tribe-of-Indians-of-Florida/jobs',
        },
      ],
    },
    {
      header: language ? 'ADDITIONAL LINKS' : 'ENLACES ADICIONALES',
      subMenu: [
        {
          linkText: language ? 'Contact' : 'Contacto',
          linkTo: '#',
          clickFunction: () => openModal(setShowContactModal),
        },
        {
          externalLink: true,
          linkText: language ? 'Directions' : 'Direcciones',
          linkTo: 'https://goo.gl/maps/wvmyDUyHrpPk7bfq9',
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
          linkTo: airboatsSocialMedia.facebook,
        },
        {
          externalLink: true,
          linkText: 'Instagram',
          linkTo: airboatsSocialMedia.instagram,
        },
        {
          externalLink: true,
          linkText: 'Twitter',
          linkTo: airboatsSocialMedia.twitter,
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
        color={airboatsColor}
        signup={airboatsBusinessInfo.name}
      />
    </React.Fragment>
  );
};

export default AirboatsFooter;
