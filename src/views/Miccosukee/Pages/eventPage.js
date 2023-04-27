import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import { events } from 'assets/data/events/eventList.js';
import { urlify } from 'services/functions/urlify.js';
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';

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
    const matchedEvent = events().find((event) => {
      const title = language ? event.titleEn : event.titleSp;
      const eventUrl = `${urlify(title)}${event.startDate.split('/').join('')}`;
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
  }, []);

  useEffect(() => {
    // if event object is not empty
    if (event) {
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
      if (language) {
        if (event.fullDescriptionEn) {
          return event.fullDescriptionEn.map((content) => {
            return <p key={content}>{content}</p>;
          });
        } else {
          return 'Loading...';
        }
      } else {
        if (event.fullDescriptionSp) {
          return event.fullDescriptionSp.map((content) => {
            return <p key={content}>{content}</p>;
          });
        } else {
          return 'Loading...';
        }
      }
    };

    const renderFlyer = () => {
      if (event.flyer) {
        return (
          <a target="_blank" href={event.flyer.link ? event.flyer.link : null}>
            <img
              style={{
                width: '100%',
                maxWidth: '600px',
                marginTop: '20px',
                marginBottom: '20px',
              }}
              alt={event.flyer.alt}
              src={event.flyer.img}
            />
          </a>
        );
      } else {
        return null;
      }
    };

    const renderSponsors = () => {
      if (event.sponsors) {
        return (
          <div>
            <h4>Sponsors: </h4>
            <Hidden mdUp>
              <div>
                {event.sponsors.map((sponsor) => {
                  return (
                    <React.Fragment key={sponsor.name}>
                      <a
                        style={{
                          display: 'inline-block',
                          marginRight: '15px',
                        }}
                        target="_blank"
                        href={sponsor.link}
                      >
                        <img style={sponsor.imageStyle} src={sponsor.image} />
                      </a>
                    </React.Fragment>
                  );
                })}
              </div>
            </Hidden>
            <Hidden smDown>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {event.sponsors.map((sponsor) => {
                  return (
                    <React.Fragment key={sponsor.name}>
                      <a
                        style={{
                          display: 'inline-block',
                          marginRight: '15px',
                        }}
                        target="_blank"
                        href={sponsor.link}
                      >
                        <img style={sponsor.imageStyle} src={sponsor.image} />
                      </a>
                    </React.Fragment>
                  );
                })}
              </div>
            </Hidden>
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
              {event.buttons[0]
                ? language
                  ? event.buttons[0].nameEn
                  : event.buttons[0].nameSp
                : 'Null'}
            </Button>
          );
        }
        return event.buttons.map((item) => {
          return (
            <Button
              color="success"
              key={item.nameEn}
              style={{ marginRight: '5px' }}
              href={item.href}
              target={item.target}
            >
              {language ? item.nameEn : item.nameSp}
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
            <h3>{language ? event.titleEn : event.titleSp}</h3>
            <p>
              <span style={{ fontWeight: '400' }}>
                {language ? 'Date: ' : 'Fecha: '}{' '}
              </span>
              {eventDate}
            </p>
            {event.startTime ? (
              <p>
                <span style={{ fontWeight: '400' }}>
                  {language ? 'Time: ' : 'Hora: '}{' '}
                </span>
                {`${event.startTime} - ${event.endTime}`}
              </p>
            ) : null}
            {language ? (
              event.admissionEn ? (
                <p>
                  <span style={{ fontWeight: '400' }}>Admission: </span>
                  {event.admissionEn}
                </p>
              ) : null
            ) : (
              <p>
                <span style={{ fontWeight: '400' }}>Entrada: </span>
                {event.admissionSp}
              </p>
            )}
            {renderFlyer()}
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
