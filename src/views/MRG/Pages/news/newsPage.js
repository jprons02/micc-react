import React, { useEffect, useState } from 'react';
import { Link, withRouter, useRouteMatch, useHistory } from 'react-router-dom';

import { newsList } from 'assets/data/newsData.js';
import { urlify } from 'services/functions/urlify.js';
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';

// Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// Core components
import Button from 'components/CustomButtons/Button.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';

// Images
import bgImage from 'assets/media/img/mrg/poker/Poker_Header.jpeg';

// Context
import { useLanguage } from 'contexts/languageContext.js';

const NewsPage = () => {
  const history = useHistory();
  const [newsItem, setNewsItem] = useState({});

  const sliderContent = [
    {
      id: 1,
      bgImage: bgImage,
      header: '',
      subHeader: '',
    },
  ];

  let match = useRouteMatch();
  const language = useLanguage();

  // Fetch news item that matches url and set as state
  useEffect(() => {
    const matchedNewsItem = newsList().find((news) => {
      const title = news.title;
      const newsPageUrl = `${urlify(title)}${news.newsId.split('/').join('')}`;
      return newsPageUrl === match.params.newsId;
    });

    setNewsItem(matchedNewsItem);

    if (!matchedNewsItem) {
      history.push('/404');
    }
  }, []);

  const handleClick = () => {
    history.push('/news');
  };

  if (!newsItem) {
    return <p>redirecting...</p>;
  } else {
    const renderBackButton = () => {
      return (
        <div
          style={{
            margin: '0px 0px 0px -5px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <a
            onClick={() => handleClick()}
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <ChevronLeftIcon style={{ fontSize: '16px', color: '#494949' }} />
            <span
              style={{
                color: '#494949',
                fontWeight: '500',
                fontSize: '12px',
                textTransform: 'uppercase',
              }}
            >
              Back
            </span>
          </a>
        </div>
      );
    };

    const renderNewsItem = () => {
      return (
        <React.Fragment>
          <h3>{newsItem.title}</h3>
          {newsItem.publishedDate !== '' ? (
            <p>
              <span style={{ fontWeight: '400' }}>
                {language ? 'Date: ' : 'Fecha: '}{' '}
              </span>
              {newsItem.publishedDate}
            </p>
          ) : null}
          {newsItem.body ? newsItem.body() : 'loading...'}
          <div style={{ marginTop: '20px', paddingBottom: '20px' }}>
            {renderBackButton()}
          </div>
        </React.Fragment>
      );
    };

    return (
      <React.Fragment>
        <HeroSection sliderContent={sliderContent} />
        <RaisedContainer>{renderNewsItem()}</RaisedContainer>
      </React.Fragment>
    );
  }
};

export default NewsPage;
