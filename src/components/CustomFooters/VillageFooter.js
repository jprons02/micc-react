import React, { useContext, useEffect } from 'react';

// Custom Component
import Footer from 'components/Footer/Footer.js';

// Theme
import { villageColor } from 'themes/colors.js';

// Business Info
import { villageBusinessInfo } from 'business_info/genericInfo.js';
import { villageSocialMedia } from 'business_info/socialMedia.js';

// Context
import { ContactModalContext } from 'contexts/ContactFormModalContext.js';
import { useLanguage } from 'contexts/languageContext.js';

// Legal
import { privacyPolicy } from 'business_info/legal';
import { cookiePolicy } from 'business_info/legal';
import { termsConditions } from 'business_info/legal';

const VillageFooter = () => {
  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
  const language = useLanguage();

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
          linkTo: '/village/info',
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
          //linkTo: "#contact",
          clickFunction: () => openModal(setShowContactModal),
        },
        {
          externalLink: true,
          linkText: language ? 'Directions' : 'Direcciones',
          linkTo: 'https://goo.gl/maps/1qXGBd2L4s9BDe5h7',
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
          linkTo: villageSocialMedia.facebook,
        },
        {
          externalLink: true,
          linkText: 'Instagram',
          linkTo: villageSocialMedia.instagram,
        },
        {
          externalLink: true,
          linkText: 'Twitter',
          linkTo: villageSocialMedia.twitter,
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
        color={villageColor}
        signup={villageBusinessInfo.name}
      />
    </React.Fragment>
  );
};

export default VillageFooter;
