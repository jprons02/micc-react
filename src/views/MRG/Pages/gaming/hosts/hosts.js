import React from 'react';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';

// Images
import bgImage from 'assets/media/img/mrg/hosts/casino-hosts-page-banner.jpeg';
import image1 from 'assets/media/img/mrg/poker/Poker_Logo.jpeg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';

// Images
import DDuancaImg from 'assets/media/img/mrg/hosts/DDuanca.jpg';
import LLozadaImg from 'assets/media/img/mrg/hosts/LLozada.jpg';
import SAvilaImg from 'assets/media/img/mrg/hosts/SAvila.jpg';

const useStyles = makeStyles(styles);

const imageObj = [{ src: image1, alt: 'slot machines' }];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const Hosts = () => {
  const language = useLanguage();
  const classes = useStyles();

  const imageStyle = {
    maxWidth: '320px',
    paddingBottom: '10px',
  };

  const nameStyle = {
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: '16px',
  };

  const titleStyle = {
    marginTop: '-12px',
    fontWeight: '500',
    color: '#939393',
  };

  const emailStyle = {
    fontWeight: '400',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  const imgDivStyle = {
    display: 'inline-block',
    padding: '10px',
    paddingBottom: '50px',
  };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <div>
          <h2>{language ? 'Meet The Team' : 'Meet The Team'}</h2>
          <div style={{ marginTop: '40px', paddingBottom: '30px' }}>
            <div style={imgDivStyle}>
              <img style={imageStyle} src={SAvilaImg} alt="Host Avila" />
              <div>
                <p style={nameStyle}>SANDRA AVILA</p>
                <p style={titleStyle}>EXECUTIVE CASINO HOST</p>
                <a style={emailStyle}>SAvila@miccosukee.com</a>
              </div>
            </div>
            <div style={imgDivStyle}>
              <img style={imageStyle} src={DDuancaImg} alt="Host Duanca" />
              <div>
                <p style={nameStyle}>DANIEL DUANCA</p>
                <p style={titleStyle}>EXECUTIVE CASINO HOST</p>
                <a style={emailStyle}>DDuanca@miccosukee.com</a>
              </div>
            </div>
            <div style={{ display: 'inline-block', padding: '10px' }}>
              <img style={imageStyle} src={LLozadaImg} alt="Host Lozada" />
              <div>
                <p style={nameStyle}>LORENA LOZADA</p>
                <p style={titleStyle}>CASINO HOST</p>
                <a style={emailStyle}>LLozada@miccosukee.com</a>
              </div>
            </div>
          </div>
        </div>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Hosts;
