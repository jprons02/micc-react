import React, { useContext, useEffect } from 'react';

// Custom Component
import Footer from 'components/Footer/Footer.js';

// Theme
import { historyColor } from 'themes/colors.js';

// Business Info
import { airboatsSocialMedia } from 'business_info/socialMedia.js';

// Context
import { ContactModalContext } from 'contexts/ContactFormModalContext.js';
import { useLanguage } from 'contexts/languageContext.js';

// Legal
import { privacyPolicy } from 'business_info/legal';
import { cookiePolicy } from 'business_info/legal';
import { termsConditions } from 'business_info/legal';

const HistoryFooter = () => {
  const language = useLanguage();
  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );

  // close contact modal on mount
  useEffect(() => {
    closeModal(setShowContactModal);
  }, []);

  /*
  const openModal = (setState) => {
    setState(true);
  };
  */

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
      ],
    },
    {
      header: language ? 'GAMING & GOLF' : 'CASINO Y GOLF',
      subMenu: [
        {
          linkText: 'Casino & Resort',
          //mrg to mcr change
          linkTo: '/mcr',
        },
        {
          linkText: 'Golf & Country Club',
          linkTo: '/golf',
        },
      ],
    },
    {
      header: language ? 'EXPERIENCES' : 'EXPERIENCIAS',
      subMenu: [
        {
          linkText: language ? 'Indian Village' : 'Aldea Indígena',
          linkTo: '/village',
        },
        {
          linkText: 'Airboats',
          linkTo: '/airboats',
        },
      ],
    },
    {
      header: language ? 'FOLLOW US' : 'CONÉCTESE CON NOSOTROS',
      subMenu: [
        {
          externalLink: true,
          linkText: 'Twitter',
          linkTo: airboatsSocialMedia.twitter,
        },
      ],
    },
    {
      header: language ? 'ADDITIONAL LINKS' : 'ENLACES ADICIONALES',
      subMenu: [
        {
          externalLink: true,
          linkText: 'Privacy Policy',
          linkTo: privacyPolicy,
        },
        {
          externalLink: true,
          linkText: 'Cookie Policy',
          linkTo: cookiePolicy,
        },
        {
          externalLink: true,
          linkText: 'Terms & Conditions',
          linkTo: termsConditions,
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <Footer footerMenuItems={footerArray} color={historyColor} />
    </React.Fragment>
  );
};

export default HistoryFooter;
