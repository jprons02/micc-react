import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';

// Icons
import { Icon } from '@material-ui/core';
// @material-ui/icons
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';

// Context
import { BookRoomContext } from 'contexts/BookRoomContext.js';
import { MobileMenuDrawerContext } from 'contexts/MobileMenuDrawerContext.js';
import { useLanguage, useLanguageUpdate } from 'contexts/languageContext.js';

// Custom Components
import Badge from 'components/Badge/Badge.js';

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
  const toggleLanguage = useLanguageUpdate();
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
      text: language ? 'Casino' : 'Casino',
      itemType: 'dropdown',
      href: '',
      target: '',
      color: '',
      link: '',
      subMenu: [
        {
          text: language ? 'Casino Promotions' : 'Casino Promociones',
          link: 'casino/promotions',
          target: '',
        },
        {
          text: language ? 'Slots' : 'Slots',
          link: 'casino/slots',
          target: '',
        },
        {
          text: 'Bingo',
          link: 'casino/bingo',
          target: '',
        },
        {
          text: language ? 'Poker' : 'Póquer',
          link: 'casino/poker',
          target: '',
        },
        {
          text: language ? 'Hosts' : 'Hosts',
          link: 'casino/hosts',
          target: '',
        },
      ],
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: language ? 'Resort' : 'Resort',
      itemType: 'dropdown',
      href: '',
      target: '',
      color: '',
      link: '',
      subMenu: [
        {
          text: language ? 'Rooms & Suites' : 'Rooms & Suites',
          link: 'resort/rooms',
          target: '',
        },
        {
          text: 'Pool & Fitness Center',
          link: 'resort/pool-fitness',
          target: '',
        },
        {
          text: language ? 'Golf & Country Club' : 'Golf & Country Club',
          link: 'https://www.miccosukeegolf.com/',
          target: '_blank',
        },
        {
          text: language ? 'Experiences' : 'Experiences',
          link: 'resort/experiences',
          target: '',
        },
      ],
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: language ? 'Entertainment' : 'Entertainment',
      itemType: 'dropdown',
      href: '',
      target: '',
      color: '',
      link: '',
      subMenu: [
        {
          text: language ? 'Events & Concerts' : 'Events & Concerts',
          link: 'entertainment/events-concerts',
          target: '',
        },
      ],
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: language ? 'Food & Drink' : 'Food & Drink',
      itemType: 'dropdown',
      href: '',
      target: '',
      color: '',
      link: '',
      subMenu: [
        {
          text: 'B1 Grill',
          link: 'food-drink/b1-grill',
          target: '',
        },
        {
          text: 'Buffet',
          link: 'food-drink/buffet',
          target: '',
        },
        {
          text: 'Café Hammock',
          link: 'food-drink/cafe-hammock',
          target: '',
        },
        {
          text: "Max's Grab & Go",
          link: 'food-drink/maxs-grab-go',
          target: '',
          divider: true,
        },
        {
          text: 'Martini Bar',
          link: 'food-drink/martini-bar',
          target: '',
        },
      ],
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: language ? 'Meetings & Events' : 'Meetings & Events',
      itemType: 'dropdown',
      href: '',
      target: '',
      color: '',
      link: '',
      subMenu: [
        {
          text: 'Meetings',
          link: 'meeting-events/meetings',
          target: '',
        },
        {
          text: 'Weddings',
          link: 'meeting-events/weddings',
          target: '',
        },
        {
          text: 'Banquets',
          link: 'meeting-events/banquets',
          target: '',
        },
        {
          text: 'Corporate Retreats',
          link: 'meeting-events/corporate-retreats',
          target: '',
          divider: true,
        },
        {
          text: 'Vendors',
          link: 'vendors',
          target: '',
        },
      ],
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: language ? 'M Sphere' : 'M Sphere',
      itemType: '',
      href: '',
      target: '',
      color: '',
      link: 'msphere',
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: language ? 'Book A Room' : 'Reservar Una Habitación',
      itemType: 'action',
      href: '',
      target: '',
      color: '',
      link: '',
      clickFunction: () => openModal(setShowBookRoomModal),
      //icon: () => <Icon>chevron_right</Icon>,
    },
  ];

  const renderTopHeader = () => {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: '#4c413f',
            padding: '8px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            lineHeight: '0',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              position: 'absolute',
              left: '0',
              marginLeft: '20px',
            }}
          >
            <div
              onClick={toggleLanguage}
              role="button"
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <LanguageIcon
                fontSize="small"
                style={{ color: 'white', marginRight: '5px' }}
              />
              <span
                style={{
                  color: 'white',
                  fontWeight: '400',
                  textDecoration: 'underline',
                  fontSize: '12px',
                }}
              >
                {language ? 'Español' : 'English'}
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'inline-block',
              position: 'absolute',
              right: '0',
              marginRight: '20px',
            }}
          >
            <Link to="/news">
              <span
                style={{
                  color: 'white',
                  fontWeight: '400',
                  textDecoration: 'underline',
                  marginRight: '10px',
                  fontSize: '12px',
                }}
              >
                {language ? 'News' : 'Noticias'}
              </span>
            </Link>
            <a href="https://goo.gl/maps/yZ9QCXJ869UqZRxJ9" target="_blank">
              <span
                style={{
                  color: 'white',
                  fontWeight: '400',
                  textDecoration: 'underline',
                  marginRight: '10px',
                  fontSize: '12px',
                }}
              >
                {language ? 'Directions' : 'Direcciones'}
              </span>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {/*
      <div
        style={{
          backgroundColor: '#4c413f',
          minHeight: '35px',
        }}
      >
        <p style={{ color: 'white', padding: '5px', marginLeft: '5px' }}>
          BUTTON HERE.
        </p>
      </div>
      */}
      {renderTopHeader()}
      <Header
        borderColor={mrgColor[500]}
        color="white"
        brand={mrgLogo}
        brandAlt="Miccosukee Casino and Resort logo"
        //mrg to mcr change
        brandLink="/"
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
