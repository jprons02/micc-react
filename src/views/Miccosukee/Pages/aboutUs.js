import React, { useState, useEffect } from 'react';
import { withRouter, useRouteMatch } from 'react-router-dom';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// Styles
import styles from 'assets/jss/material-kit-react/views/miccosukee/components/customRaisedContainerStyle.js';

// Custom Components
import Badge from 'components/Badge/Badge.js';

// Covid content
import MrgCovidInfo from 'business_info/covid-19/mrgCovidInfo.js';
import GolfCovidInfo from 'business_info/covid-19/golfCovidInfo.js';
import AirboatsCovidInfo from 'business_info/covid-19/airboatsCovidInfo.js';
import VillageCovidInfo from 'business_info/covid-19/villageCovidInfo.js';

// context
import { useLanguage } from 'contexts/languageContext.js';

// Colors
import { errorColor } from 'themes/colors.js';

const useStyles = makeStyles(styles);

const AboutUs = ({ history, badgeColor, entityMargin }) => {
  const language = useLanguage();
  const classes = useStyles();

  const [category, setCategory] = useState('all');

  let match = useRouteMatch();

  const businessContent = [
    {
      category: 'Casino & Resort',
      component: <MrgCovidInfo language={language} />,
    },
    {
      category: 'Golf',
      component: <GolfCovidInfo language={language} />,
    },
    {
      category: 'Village',
      component: <VillageCovidInfo language={language} />,
    },
    {
      category: 'Airboats',
      component: <AirboatsCovidInfo language={language} />,
    },
  ];

  useEffect(() => {
    // Set the default category depending on url.
    // ex) if url === mrg/events, category default is "Casino & Resort"
    switch (history.location.pathname) {
      //mrg to mcr change
      case '/info':
        setCategory('Casino & Resort');
        break;
      case '/mrg/info':
        setCategory('Casino & Resort');
        break;
      case '/golf/info':
        setCategory('Golf');
        break;
      case '/village/info':
        setCategory('Village');
        break;
      case '/airboats/info':
        setCategory('Airboats');
        break;
      default:
        setCategory('Casino & Resort');
    }
  }, []);

  const renderContentBody = () => {
    return businessContent.map((business) => {
      const isCategory = (business) => {
        if (business.category === category) {
          return true;
        } else {
          return false;
        }
      };

      if (isCategory(business)) {
        return <div key={business.category}>{business.component}</div>;
      }
    });
  };

  const handleBadgeClick = (category) => {
    setCategory(category);
  };

  const renderBadges = () => {
    const selectedStyle = {
      backgroundColor: badgeColor ? badgeColor : errorColor,
      color: 'white',
      cursor: 'pointer',
      margin: '2px',
    };
    const defaultStyle = {
      backgroundColor: 'transparent',
      color: badgeColor ? badgeColor : errorColor,
      cursor: 'pointer',
      margin: '2px',
    };

    return (
      <div style={{ marginTop: '20px' }}>
        {businessContent.map((business) => {
          return (
            <Badge
              key={business.category}
              margin="2px"
              styleProp={
                business.category === category ? selectedStyle : defaultStyle
              }
              color="danger"
              onClick={() => handleBadgeClick(business.category)}
            >
              {business.category}
            </Badge>
          );
        })}
      </div>
    );
  };

  return (
    <div
      style={entityMargin ? { marginBottom: '20px' } : { margin: '20px 0px' }}
      className={classNames(classes.main, classes.mainRaised)}
    >
      <div>
        <div className={classes.container} style={{ padding: '15px' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2>{language ? 'About Us' : 'Sobre Nosotros'}</h2>
            <p>
              {language
                ? 'The Miccosukee Tribe of Indians of Florida first ventured into the gaming industry when they opened the Miccosukee Indian Bingo Hall in 1990. Nine years later, after much success and high demand, they established a complete resort and gaming facility boasting over 1,800 slot machines, 20 live-action poker tables, bingo, and entertainment, 24/7. Located at the edge of the Everglades at 500 SW 177 Ave, Miccosukee Casino & Resort is a world-class hotel with modernized suites, ancillary amenities, and excellent eateries ranging from deli favorites to fine dining. For reservations and information, call 1-877-242-6464 or visit Miccosukee.com.'
                : 'The Miccosukee Tribe of Indians of Florida first ventured into the gaming industry when they opened the Miccosukee Indian Bingo Hall in 1990. Nine years later, after much success and high demand, they established a complete resort and gaming facility boasting over 1,800 slot machines, 20 live-action poker tables, bingo, and entertainment, 24/7. Located at the edge of the Everglades at 500 SW 177 Ave, Miccosukee Casino & Resort is a world-class hotel with modernized suites, ancillary amenities, and excellent eateries ranging from deli favorites to fine dining. For reservations and information, call 1-877-242-6464 or visit Miccosukee.com.'}
            </p>
          </div>
          {renderBadges()}
          <div>{renderContentBody()}</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AboutUs);
