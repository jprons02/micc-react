import React, { useState, useContext, useEffect } from 'react';

// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import { Icon } from '@material-ui/core';

// Context
import { BookRoomContext } from 'contexts/BookRoomContext.js';
import { MobileMenuDrawerContext } from 'contexts/MobileMenuDrawerContext.js';
import { useLanguage } from 'contexts/languageContext.js';

//testing
import styles from 'assets/jss/material-kit-react/views/mrg';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// theme color
import { mrgColor } from 'themes/colors.js';
import mrgLogo from 'assets/media/logos/MiccosukeeResort&Gaming.svg';

import BookRoomModal from 'components/CustomModal/CustomBookRoomModal/CustomBookRoomModal.js';

const useStyles = makeStyles(styles);

const MrgHeader = () => {
  const language = useLanguage();
  //classes needed for social icon
  //const classes = useStyles();
  useEffect(() => {
    //Close bookroom modal
    closeModal(setShowBookRoomModal);
  }, []);

  const [showBookRoomModal, setShowBookRoomModal] = useContext(BookRoomContext);
  const [mobileOpen, setMobileOpen] = useContext(MobileMenuDrawerContext);

  const openModal = (setState) => {
    setMobileOpen(false);
    setState(true);
  };

  const closeModal = (setState) => {
    setState(false);
  };

  const menuLinks = [
    {
      text: language ? 'Accommodations' : 'Habitaciones',
      itemType: '',
      href: '',
      target: '',
      color: '',
      link: '/accommodations',
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: language ? 'Amenities' : 'Comodidades',
      itemType: 'dropdown',
      href: '',
      target: '',
      color: '',
      link: '',
      subMenu: [
        {
          text: language ? 'Salon & Spa' : 'Salón y Spa',
          link: '/salon-spa',
          target: '',
        },
        {
          text: 'Club Egret',
          link: '/club-egret',
          target: '',
        },
        {
          text: language ? 'Pool & Gym' : 'Piscina y Gimnasio',
          link: '/pool-gym',
          target: '',
        },
        {
          text: language ? 'Teen Arcade' : 'Sala de Juegos',
          link: '/teen-arcade',
          target: '',
        },
      ],
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: language ? 'Casino' : 'Casino',
      itemType: 'dropdown',
      href: '',
      target: '',
      color: '',
      link: '/gaming',
      subMenu: [
        {
          text: language ? 'Promotions' : 'Promociones',
          link: '/promotions',
          target: '',
        },
        {
          text: 'Miccosukee One',
          link: '/miccosukee-one',
          target: '',
        },
        {
          text: language ? 'Gaming Machines' : 'Máquinas de Juego',
          link: '/gaming-machines',
          target: '',
        },
        {
          text: language ? 'Poker' : 'Póker',
          link: '/poker',
          target: '',
        },
        {
          text: 'Bingo',
          link: '/bingo',
          target: '',
        },
      ],
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: language ? 'Dining & Nightlife' : 'Restaurantes y Vida Nocturna',
      itemType: 'dropdown',
      href: '',
      target: '',
      color: '',
      link: '',
      subMenu: [
        {
          text: 'Bravo Bravissimo!',
          link: '/bravo-bravissimo',
          target: '',
        },
        {
          text: 'Empeeke Aaweeke International Buffet',
          link: '/international-buffet',
          target: '',
        },
        {
          text: 'Sawgrass Cafe',
          link: '/sawgrass-cafe',
          target: '',
        },
        {
          text: "Max's",
          link: '/maxs',
          target: '',
        },
        {
          text: 'Empeeke Aya Deli',
          link: '/deli',
          target: '',
        },
        {
          text: 'Café Hammock',
          link: '/cafe-hammock',
          target: '',
          divider: true,
        },
        {
          text: 'Cypress Lounge',
          link: '/cypress-lounge',
          target: '',
        },
        {
          text: 'Martini Bar',
          link: '/martini-bar',
          target: '',
        },
      ],
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: language ? 'Events' : 'Eventos',
      itemType: '',
      href: '',
      target: '',
      color: '',
      link: '/events',
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: 'Golf & Country Club',
      itemType: 'external',
      href: 'https://miccosukee.com/golf',
      target: '_blank',
      color: '',
      link: '',
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: language ? 'Book A Room' : 'Reservar una Habitación',
      itemType: 'action',
      href: '',
      target: '',
      color: '',
      link: '',
      clickFunction: () => openModal(setShowBookRoomModal),
      //icon: () => <Icon>chevron_right</Icon>,
    },
  ];

  return (
    <React.Fragment>
      <Header
        borderColor={mrgColor[500]}
        color="white"
        brand={mrgLogo}
        brandAlt="mrgLogo"
        brandLink="/mrg"
        rightLinks={<HeaderLinks menuItems={menuLinks} />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'white',
        }}
      />
      <BookRoomModal
        showModal={showBookRoomModal}
        closeModal={() => closeModal(setShowBookRoomModal)}
      />
    </React.Fragment>
  );
};

//

export default MrgHeader;
