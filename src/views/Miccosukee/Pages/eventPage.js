import wildlifeSponsor1 from 'assets/media/logos/sponsors/wildlifeEvent/LOGOm3x.jpg';
import wildlifeSponsor2 from 'assets/media/logos/sponsors/wildlifeEvent/Iggies store logo.png';

import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import { events } from 'assets/data/events/eventList.js';
import { urlify } from 'services/functions/urlify.js';
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// Core components
import Button from 'components/CustomButtons/Button.js';

// Styles
import styles from 'assets/jss/material-kit-react/views/miccosukee/components/customRaisedContainerStyle.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';

const useStyles = makeStyles(styles);

const EventPage = ({ entityMargin, entity }) => {
  const history = useHistory();
  const [event, setEvent] = useState({});

  const classes = useStyles();

  let match = useRouteMatch();
  const language = useLanguage();

  // Fetch event that matches url and set as state
  useEffect(() => {
    const matchedEvent = events(language).find((event) => {
      const title = () => {
        if (event) {
          if (language) {
            return event.test.english;
          } else {
            return event.test.spanish;
          }
        } else {
          return 'no event selected';
        }
      };
      const eventUrl = `${urlify(event.title)}${event.startDate
        .split('/')
        .join('')}`;

      return eventUrl === match.params.eventId;
    });
    setEvent(matchedEvent);
    if (!matchedEvent) {
      const url = () => {
        if (entity) {
          return `/${entity}/404`;
        } else {
          return '/404';
        }
      };
      history.push(url());
    }
  }, [language]);

  useEffect(() => {
    // if event object is not empty
    if (Object.keys(event).length !== 0) {
      if (event.buttons) {
        if (event.buttons[0].eventbrite) {
          var exampleCallbackEventPage = function () {
            console.log('Order complete!');
          };

          window.EBWidgets.createWidget({
            widgetType: 'checkout',
            eventId: event.buttons[0].eventbrite.eventId,
            modal: true,
            modalTriggerElementId: `${event.buttons[0].eventbrite.modalTriggerElementId}eventpage`,
            iframeContainerId: `eventbrite-widget-container-${event.buttons[0].eventbrite.eventId}`,
            //onOrderComplete: exampleCallbackEventPage,
          });
        }
      }
    }
  }, [event]);

  if (!event) {
    return <p>redirecting...</p>;
  } else {
    const eventDate =
      event.startDate === event.endDate
        ? event.endDate
        : `${event.startDate} - ${event.endDate}`;

    const renderFullDescription = () => {
      if (event.fullDescription) {
        return event.fullDescription.map((content) => {
          return <p key={content}>{content}</p>;
        });
      } else {
        return 'Loading...';
      }
    };

    const renderSponsors = () => {
      if (event.sponsors) {
        return (
          <div>
            <h4>Sponsors: </h4>
            {event.sponsors.map((sponsor) => {
              return (
                <React.Fragment>
                  <a target="_blank" href={sponsor.link}>
                    <img style={sponsor.imageStyle} src={sponsor.image} />
                  </a>
                </React.Fragment>
              );
            })}
          </div>
        );
      } else {
        return null;
      }
    };

    const renderPromoVideo = () => {
      if (event.video) {
        if (event.video.format === 'youtube') {
          return (
            //https://css-tricks.com/fluid-width-video/
            <div style={{ maxWidth: '560px' }}>
              <div
                style={{
                  position: 'relative',
                  paddingBottom: '56.25%' /* 16:9 */,
                  height: '0',
                }}
              >
                <iframe
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                  }}
                  width="560"
                  height="315"
                  src={event.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          );
        } else {
          return (
            <div style={{ maxWidth: '560px', paddingTop: '10px' }}>
              <video
                style={{
                  boxShadow:
                    '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
                }}
                width="100%"
                controls
                poster={event.video.poster}
              >
                <source src={event.video.src} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
          );
        }
      } else {
        return '';
      }
    };

    const renderButtons = () => {
      if (event.buttons) {
        if (event.buttons[0].eventbrite) {
          return (
            <Button
              color="success"
              id={
                event.buttons[0]
                  ? `${event.buttons[0].eventbrite.modalTriggerElementId}eventpage`
                  : 'no-button'
              }
              type="button"
              dataautomation="ticket-modal-btn"
              datatrackinglabel="Tickets"
              className={classes.button}
              variant="contained"
            >
              {event.buttons[0] ? event.buttons[0].name : 'Null'}
            </Button>
          );
        }
        return event.buttons.map((item) => {
          return (
            <Button
              key={item.name}
              style={{ marginRight: '5px' }}
              href={item.href}
              target={item.target}
            >
              {item.name}
            </Button>
          );
        });
      } else {
        return '';
      }
    };

    return (
      <div
        style={entityMargin ? { marginBottom: '20px' } : { margin: '20px 0px' }}
        className={classNames(classes.main, classes.mainRaised)}
      >
        <div>
          <div
            className={classes.container}
            style={{ padding: '15px', paddingBottom: '40px' }}
          >
            <h3>{event.title}</h3>
            <p>
              <span style={{ fontWeight: '400' }}>Date: </span>
              {eventDate}
            </p>
            {event.startTime ? (
              <p>
                <span style={{ fontWeight: '400' }}>Time: </span>{' '}
                {`${event.startTime} - ${event.endTime}`}
              </p>
            ) : null}
            {renderPromoVideo()}
            <div style={{ marginTop: '25px' }}>{renderFullDescription()}</div>
            <div style={{ marginTop: '20px' }}>{renderButtons()}</div>
            <div style={{ marginTop: '40px' }}>{renderSponsors()}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default EventPage;
