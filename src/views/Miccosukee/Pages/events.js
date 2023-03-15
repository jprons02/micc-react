import wildlifeSponsor1 from 'assets/media/logos/sponsors/wildlifeEvent/LOGOm3x.jpg';
import wildlifeSponsor2 from 'assets/media/logos/sponsors/wildlifeEvent/Iggies store logo.png';

import React, { useState, useEffect } from 'react';
import { Link, withRouter, useRouteMatch } from 'react-router-dom';

import { eventbriteIDs } from 'assets/data/events/eventbriteIDs';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

// Styles
import styles from 'assets/jss/material-kit-react/views/miccosukee/components/customRaisedContainerStyle.js';
import { events } from 'assets/data/events/eventList.js';

// Custom Components
import Badge from 'components/Badge/Badge.js';

// @material-ui/icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// Core components
import Button from 'components/CustomButtons/Button.js';

// Custom Functions
import { setEstTime } from 'services/functions/setEstTime.js';
import { urlify } from 'services/functions/urlify.js';

// Colors
import { standardLinkColor, errorColor } from 'themes/colors.js';

// Context
import { useLanguage } from 'contexts/languageContext';
import { ContactsOutlined } from '@material-ui/icons';

const useStyles = makeStyles(styles);

const Events = ({ history, badgeColor, entityMargin }) => {
  const language = useLanguage();
  const classes = useStyles();

  const [category, setCategory] = useState('All');
  const [defaultUpcommingText, setDefaultUpcommingText] = useState(false);

  let match = useRouteMatch();

  useEffect(() => {
    // Set the default category depending on url.
    // ex) if url === mrg/events, category default is "Casino & Resort"
    switch (history.location.pathname) {
      //mrg to mcr change
      case '/mcr/events':
        //setCategory('Casino & Resort');
        setCategory('All');
        break;
      case '/mrg/events':
        //setCategory('Casino & Resort');
        setCategory('All');
        break;
      case '/golf/events':
        setCategory('Golf & Country Club');
        break;
    }
  }, []);

  useEffect(() => {
    // When category changes, insert default upcomming text if needed.
    const renderUpcommingDefault = () => {
      if (document.getElementById('upcomming')) {
        if (!document.getElementById('upcomming').innerText) {
          setDefaultUpcommingText(true);
        } else {
          setDefaultUpcommingText(false);
        }
      }
    };
    renderUpcommingDefault();
  }, [category]);

  // Eventbrite - create widget for each id
  useEffect(() => {
    events(language).map((event) => {
      if (event.eventbriteButton) {
        var exampleCallbackEvents = function () {
          console.log('Order complete!');
        };

        window.EBWidgets.createWidget({
          widgetType: 'checkout',
          eventId: event.buttons[0].eventbrite.eventId,
          modal: true,
          modalTriggerElementId: `${event.buttons[0].eventbrite.modalTriggerElementId}events`,
          iframeContainerId: `eventbrite-widget-container-${event.buttons[0].eventbrite.eventId}`,
          //onOrderComplete: exampleCallbackEvents,
        });
      }
    });
  }, []);

  const handleBadgeClick = (category) => {
    setCategory(category);
  };

  const handleClick = (url) => {
    history.push(url);
  };

  const d = setEstTime();
  const currentDateObj = new Date(d.getFullYear(), d.getMonth(), d.getDate());

  const isUpcomming = (event) => {
    const split = event.endDate.split('/');
    const month = parseInt(split[0] - 1);
    const day = parseInt(split[1]);
    const year = parseInt(split[2]);

    const eventDateObj = new Date(year, month, day);

    if (currentDateObj <= eventDateObj) {
      return true;
    } else {
      return false;
    }
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
        <Badge
          styleProp={category === 'All' ? selectedStyle : defaultStyle}
          color="info"
          onClick={() => handleBadgeClick('All')}
        >
          {language ? 'ALL EVENTS' : 'TODOS LOS EVENTOS'}
        </Badge>
        {events(language).map((event) => {
          if (event.category) {
            return (
              <Badge
                key={event.title}
                margin="2px"
                styleProp={
                  event.category === category ? selectedStyle : defaultStyle
                }
                color="danger"
                onClick={() => handleBadgeClick(event.category)}
              >
                {event.category}
              </Badge>
            );
          }
        })}
      </div>
    );
  };

  const renderTitle = (title, startDate, type, link) => {
    const url = `${match.path}/${urlify(title)}${startDate
      .split('/')
      .join('')}`;

    if (type === 'standard') {
      return (
        <a onClick={() => handleClick(url)}>
          <h4
            style={{
              fontWeight: '400',
              cursor: 'pointer',
              color: standardLinkColor.color,
            }}
          >
            {title}
          </h4>
        </a>
      );
    }

    if (type === 'virtual') {
      return (
        <Link
          style={{ fontWeight: '400', color: standardLinkColor.color }}
          to={link}
        >
          {title}
        </Link>
      );
    }
  };

  const renderEvents = () => {
    //if not category... dont render.
    const isCategory = (event) => {
      if (category === 'All' || event.category === category) {
        return true;
      } else {
        return false;
      }
    };

    const eventDate = (event) => {
      if (event.startDate === event.endDate) {
        return `${event.endDate}`;
      } else {
        return `${event.startDate} - ${event.endDate}`;
      }
    };

    const renderUpcommingEvents = () => {
      return events(language).map((event) => {
        if (isCategory(event)) {
          if (isUpcomming(event)) {
            return (
              <div style={{ marginBottom: '22px' }} key={event.title}>
                {renderTitle(
                  event.title,
                  event.startDate,
                  event.type,
                  event.link
                )}
                <h6>{eventDate(event)}</h6>
                <h6>{`${language ? 'Admission: ' : 'Admisión: '}${
                  event.admission
                }`}</h6>
                <p>{event.excerpt}</p>
                {!event.buttons
                  ? null
                  : event.buttons.map((button) => {
                      return (
                        <Button
                          key={button.key}
                          href={button.href}
                          target={button.target}
                          color="success"
                          type="button"
                          className={classes.button}
                          variant="contained"
                        >
                          {button.name}
                        </Button>
                      );
                    })}
                {!event.sponsors ? null : (
                  <div style={{ marginTop: '30px', marginBottom: '60px' }}>
                    <h4>Sponsors:</h4>
                    {event.sponsors.map((sponsor) => {
                      return (
                        <React.Fragment key={sponsor.name}>
                          <a target="_blank" href={sponsor.link}>
                            <img
                              style={sponsor.imageStyle}
                              src={sponsor.image}
                            />
                          </a>
                        </React.Fragment>
                      );
                    })}
                  </div>
                )}

                {/*event.eventbriteButton ? (
                  <Button
                    color="success"
                    id={`${event.buttons[0].eventbrite.modalTriggerElementId}events`}
                    type="button"
                    dataautomation="ticket-modal-btn"
                    datatrackinglabel="Tickets"
                    className={classes.button}
                    variant="contained"
                  >
                    {event.buttons[0].name}
                  </Button>
                ) : null*/}
              </div>
            );
          }
        }
      });
    };

    const renderPastEvents = () => {
      return events(language).map((event) => {
        if (isCategory(event)) {
          if (!isUpcomming(event)) {
            return (
              <div style={{ marginBottom: '22px' }} key={event.title}>
                {renderTitle(
                  event.title,
                  event.startDate,
                  event.type,
                  event.link
                )}
                <h6>{eventDate(event)}</h6>
                <h6>{`Admission: ${event.admission}`}</h6>
                <p>{event.excerpt}</p>
              </div>
            );
          }
        }
      });
    };

    return (
      <React.Fragment>
        <h3 style={{ marginBottom: '20px' }}>
          {
            /* Weird if statements here is necessary for spanish "Todos los Proximos..." copy. */
            language
              ? category + ' Upcoming Events'
              : category === 'All'
              ? 'Todos los Próximos Eventos'
              : category + ' Próximos Eventos'
          }
        </h3>
        <div id="upcomming">{renderUpcommingEvents()}</div>
        {defaultUpcommingText ? (
          <p>
            {language
              ? 'No upcoming events at this time'
              : 'No hay eventos programados por el momento.'}
          </p>
        ) : (
          ''
        )}
        <Divider />
        <h3 style={{ marginBottom: '20px' }}>
          {language ? 'Past Events' : 'Eventos Pasados'}
        </h3>
        <div id="past">{renderPastEvents()}</div>
      </React.Fragment>
    );
  };

  return (
    <div
      style={entityMargin ? { marginBottom: '20px' } : { margin: '20px 0px' }}
      className={classNames(classes.main, classes.mainRaised)}
    >
      <div>
        <div className={classes.container} style={{ padding: '15px' }}>
          {renderBadges()}
          {/* <h6 style={{ paddingTop: '10px', color: 'red' }}>
            {language
              ? 'The Miccosukee Indian Arts & Crafts Festival is canceled this year. We look forward to resuming this event in 2022.'
              : 'El Festival de Artesanías Miccosukee está cancelado este año. Esperamos reanudar este evento en 2022.'}
          </h6> */}
          <div>{renderEvents()}</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Events);
