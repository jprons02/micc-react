import React from 'react';
import { Link, withRouter, useRouteMatch } from 'react-router-dom';

// data
import { newsList } from 'assets/data/newsData.js';

// material-ui core components
import { Hidden } from '@material-ui/core';
import Button from 'components/CustomButtons/Button.js';

// Icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';

// Images
import bgImage from 'assets/media/img/mrg/poker/Poker_Header.jpeg';
import image1 from 'assets/media/img/mrg/poker/Poker_Logo.jpeg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';

// Custom Functions
import { urlify } from 'services/functions/urlify.js';

const useStyles = makeStyles(styles);

//const imageArray = [image1];
const imageObj = [{ src: image1, alt: 'Poker cards' }];
//const imageObj = [{ src: pokerWeekly2, alt: 'Poker Weekly Details' }];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const News = ({ history }) => {
  const language = useLanguage();
  const classes = useStyles();
  let match = useRouteMatch();

  const handleClick = (url, eventPage) => {
    if (eventPage) {
      history.push(eventPage);
    } else {
      history.push(url);
    }
  };

  const getUrl = (title, id) =>
    `/news/${urlify(title)}${id.split('/').join('')}`;

  const renderNews = () => {
    return newsList().map((news, index) => {
      const url = getUrl(news.title, news.newsId);

      return (
        <div key={news.newsId} style={{ marginBottom: '40px' }}>
          <h4>{news.title}</h4>
          <p>{news.excerpt}</p>
          <div
            style={{
              margin: '0px 12px 0px 0px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <a
              onClick={() => handleClick(url, news.eventPage)}
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  color: '#494949',
                  fontWeight: '500',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                }}
              >
                Read More
              </span>
              <ChevronRightIcon
                style={{ fontSize: '16px', color: '#494949' }}
              />
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <h3 style={{ marginBottom: '20px' }}>
          {language ? 'Miccosukee News' : 'Miccosukee News'}
        </h3>
        <div id="past">{renderNews()}</div>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default withRouter(News);
