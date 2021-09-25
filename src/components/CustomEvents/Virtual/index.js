import React, { useState, useEffect, useContext } from "react";

// material-ui core components
import { Hidden } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// Core Components
import MuiButton from "@material-ui/core/Button";
import Button from "components/CustomButtons/Button.js";

// @material-ui/icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DownloadIcon from "@material-ui/icons/GetApp";

// My Custom Components
import VirtualEventHeroSection from "components/CustomSections/VirtualEventHeroSection.js";
import RaisedContainer from "components/CustomSections/RaisedContainer";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import EventVideo from "components/CustomEvents/Virtual/components/EventVideo.js";
import Schedule from "components/CustomEvents/Virtual/components/Schedule/Schedule.js";
import ScheduleModal from "components/CustomEvents/Virtual/components/Schedule/ScheduleModal.js";
import LoginModal from "components/CustomEvents/Virtual/components/Login/LoginModal.js";
import VirtualEventFooter from "components/CustomFooters/VirtualEventFooter.js";
import EventCards from "components/CustomEvents/Virtual/components/EventCards";

import painting1 from "assets/event/aid21/Painting1.png";
import painting2 from "assets/event/aid21/Painting2.png";
import painting3 from "assets/event/aid21/Painting3.png";

// Service
import { formatTime } from "services/formatTime";

// Context
import { AlertContext, virtualEventLoginId } from "contexts/AlertContext.js";
import { VirtualEventLoginFormProvider } from "contexts/VirtualEventLoginFormContext.js";

const VirtualEvent = (props) => {
  const classes = props.classes;
  const [alerts, setAlerts] = useContext(AlertContext);

  //const [isLoggedIn, setLogIn] = useState(false);
  // loginClick state used for Login component. If user clicks login they should go to email input render.
  const [loginButtonClicked, setLoginButtonClicked] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  useEffect(() => {
    if (props.isLoggedIn === "not matched") {
      setShowLoginModal(true);
    }
  }, []);

  // Reset snackbar state when component unmounts.
  useEffect(() => {
    return () => {
      setAlerts({
        ...alerts,
        [virtualEventLoginId]: false,
      });
    };
  }, []);

  const closeScheduleModal = () => {
    setShowScheduleModal(false);
  };

  const scheduleClick = () => {
    setShowScheduleModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const renderWelcome = (device) => {
    return device === "desktop" ? (
      <div className={classes.welcomeSection}>
        <div
          style={{
            marginTop: "-8px",
            backgroundImage: `url(${props.welcome.bgBanner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            textAlign: "center",
          }}
        >
          <img
            style={{
              maxHeight: "200px",
              display: "inline-block",
            }}
            src={props.welcome.pngImage}
          />
        </div>
        <div style={{ paddingTop: "10px" }}>
          <Typography component={"h2"} className={classes.welcomeHeader}>
            {props.welcome.title}
          </Typography>
        </div>
        <div style={{ paddingTop: "10px" }}>
          <Typography component={"h2"} className={classes.welcomeBody}>
            {props.welcome.body()}
          </Typography>
        </div>
      </div>
    ) : (
      <div className={classes.welcomeSection}>
        <div>
          <Typography component={"h2"} className={classes.welcomeHeader}>
            {props.welcome.title}
          </Typography>
        </div>
        <div style={{ paddingTop: "10px" }}>
          <Typography component={"h2"} className={classes.welcomeBody}>
            {props.welcome.body()}
          </Typography>
        </div>
      </div>
    );
  };

  const renderPurchaseButton = () => {
    return (
      <div className={classes.buttonSection}>
        <Button
          id="example-widget-trigger"
          type="button"
          dataautomation="ticket-modal-btn"
          datatrackinglabel="Tickets"
          className={classes.button}
          variant="contained"
        >
          <ShoppingCartIcon /> PURCHASE TICKETS
        </Button>
      </div>
    );
  };

  const loginClick = () => {
    setShowLoginModal(true);
    setLoginButtonClicked(true);
  };
  const renderLoginButton = () => {
    if (props.isLoggedIn === "not matched") {
      return (
        <div className={classes.loginButtonSection}>
          <MuiButton onClick={loginClick} className={classes.loginButton}>
            Login Here
          </MuiButton>
        </div>
      );
    }
  };

  const renderSchedule = () => {
    return (
      <div className={classes.subsection}>
        <Typography
          className={classes.subHeader}
          paragraph
          variant="h5"
          component="h3"
        >
          EVENT SCHEDULE
        </Typography>
        <Schedule events={props.events} />
      </div>
    );
  };

  const renderEventLinks = () => {
    const renderLinks = () => {
      const d = new Date();
      const s = new Date(2021, 8, 25, 10);
      if (d >= s) {
        return props.events.map((event) => {
          if (event.purchased) {
            const linkTime = new Date(
              event.releaseTime.year,
              event.releaseTime.month,
              event.releaseTime.day,
              event.releaseTime.hour,
              event.releaseTime.minutes
            );
            if (d > linkTime) {
              return (
                <div key={event.key} style={{ marginBottom: "12px" }}>
                  <a
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "500",
                      textDecoration: "underline",
                    }}
                    target="_blank"
                    href={event.link}
                  >
                    {`${event.key}, ${formatTime(
                      event.releaseTime.hour,
                      event.releaseTime.minutes
                    )}`}
                  </a>
                </div>
              );
            } else {
              return;
            }
          }
        });
      } else {
        return (
          <p
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Coming Soon!
          </p>
        );
      }
    };

    return (
      <div className={classes.subsection}>
        <Typography
          className={classes.subHeaderRedLinksPurchasedHeader}
          paragraph
          variant="h5"
          component="h3"
        >
          PURCHASED CONTENT
        </Typography>
        <div style={{ marginTop: "28px" }}>
          <Typography
            className={classes.subHeaderRedLinksPurchased}
            paragraph
            variant="h6"
            component="h4"
          >
            Event Video Links:
          </Typography>
          <p
            style={{
              color: "white",
              fontSize: "16px",
              fontWeight: "500",
              marginTop: "-15px",
              marginBottom: "20px",
            }}
          >
            Don't see the links? Try refreshing your browser after the scheduled
            time.
          </p>
          {renderLinks()}
        </div>
        <div style={{ marginTop: "30px" }}>
          <Typography
            className={classes.subHeaderRedLinksPurchased}
            paragraph
            variant="h6"
            component="h4"
          >
            Painting classes with Cristina Osceola:
          </Typography>
          <p
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Download, print, sketch out the images and follow along!
          </p>
          <div
            style={{
              display: "inline-block",
              paddingBottom: "10px",
              paddingRight: "15px",
            }}
          >
            <a
              target="_blank"
              href="https://mapa-media.s3.amazonaws.com/events/Painting1.pdf"
            >
              <figure style={{ margin: "0" }}>
                <img
                  style={{
                    height: "185px",
                    marginLeft: "-14px",
                    marginRight: "8px",
                  }}
                  src={painting1}
                  alt="panther"
                />

                <figcaption
                  style={{
                    fontWeight: "500",
                    marginTop: "-5px",
                    color: "white",
                  }}
                >
                  Panther
                </figcaption>
              </figure>
            </a>
          </div>
          <div
            style={{
              display: "inline-block",
              paddingBottom: "10px",
              paddingRight: "15px",
            }}
          >
            <a
              target="_blank"
              href="https://mapa-media.s3.amazonaws.com/events/Painting2.pdf"
            >
              <figure style={{ margin: "0" }}>
                <img
                  style={{
                    height: "185px",
                    marginLeft: "-18px",
                    marginRight: "8px",
                  }}
                  src={painting2}
                  alt="panther"
                />
                <figcaption
                  style={{
                    fontWeight: "500",
                    marginTop: "-5px",
                    color: "white",
                  }}
                >
                  Turtle
                </figcaption>
              </figure>
            </a>
          </div>
          <div
            style={{
              display: "inline-block",
              paddingBottom: "10px",
              paddingRight: "15px",
            }}
          >
            <a
              target="blank"
              href="https://mapa-media.s3.amazonaws.com/events/Painting3.pdf"
            >
              <figure style={{ margin: "0" }}>
                <img
                  style={{
                    height: "185px",
                    marginLeft: "-14px",
                    marginRight: "8px",
                  }}
                  src={painting3}
                  alt="panther"
                />
                <figcaption
                  style={{
                    fontWeight: "500",
                    marginTop: "-5px",
                    color: "white",
                  }}
                >
                  Panther &amp; Turtle
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
    );
  };

  /*
  const renderEventLinks = () => {

    return (
      <div className={classes.subsection}>
        <Typography
          className={classes.subHeaderRedLinksPurchasedHeader}
          paragraph
          variant="h5"
          component="h3"
        >
          PURCHASED CONTENT
        </Typography>
        <div style={{ marginTop: "28px" }}>
          <Typography
            className={classes.subHeaderRedLinksPurchased}
            paragraph
            variant="h6"
            component="h4"
          >
            Event Video Links:
          </Typography>
          <p
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Coming Soon!
          </p>

          {props.events.map((event) => {
            if (event.purchased) {
              return (
                <div key={event.key} style={{ marginBottom: "12px" }}>
                  <a
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "500",
                      textDecoration: "underline",
                    }}
                    target="_blank"
                    href={event.link}
                  >
                    {`${event.key}, ${formatTime(
                      event.releaseTime.hour,
                      event.releaseTime.minutes
                    )}`}
                  </a>
                </div>
              );
            }
          })}
        </div>
        <div style={{ marginTop: "30px" }}>
          <Typography
            className={classes.subHeaderRedLinksPurchased}
            paragraph
            variant="h6"
            component="h4"
          >
            Painting classes with Cristina Osceola:
          </Typography>
          <p
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Before the art class on Saturday, download, print and sketch out the
            images
          </p>
          <div
            style={{
              display: "inline-block",
              paddingBottom: "10px",
              paddingRight: "15px",
            }}
          >
            <a
              target="_blank"
              href="https://mapa-media.s3.amazonaws.com/events/Painting1.pdf"
            >
              <figure style={{ margin: "0" }}>
                <img
                  style={{
                    height: "185px",
                    marginLeft: "-14px",
                    marginRight: "8px",
                  }}
                  src={painting1}
                  alt="panther"
                />

                <figcaption
                  style={{
                    fontWeight: "500",
                    marginTop: "-5px",
                    color: "white",
                  }}
                >
                  Panther
                </figcaption>
              </figure>
            </a>
          </div>
          <div
            style={{
              display: "inline-block",
              paddingBottom: "10px",
              paddingRight: "15px",
            }}
          >
            <a
              target="_blank"
              href="https://mapa-media.s3.amazonaws.com/events/Painting2.pdf"
            >
              <figure style={{ margin: "0" }}>
                <img
                  style={{
                    height: "185px",
                    marginLeft: "-18px",
                    marginRight: "8px",
                  }}
                  src={painting2}
                  alt="panther"
                />
                <figcaption
                  style={{
                    fontWeight: "500",
                    marginTop: "-5px",
                    color: "white",
                  }}
                >
                  Turtle
                </figcaption>
              </figure>
            </a>
          </div>
          <div
            style={{
              display: "inline-block",
              paddingBottom: "10px",
              paddingRight: "15px",
            }}
          >
            <a
              target="blank"
              href="https://mapa-media.s3.amazonaws.com/events/Painting3.pdf"
            >
              <figure style={{ margin: "0" }}>
                <img
                  style={{
                    height: "185px",
                    marginLeft: "-14px",
                    marginRight: "8px",
                  }}
                  src={painting3}
                  alt="panther"
                />
                <figcaption
                  style={{
                    fontWeight: "500",
                    marginTop: "-5px",
                    color: "white",
                  }}
                >
                  Panther &amp; Turtle
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
    );
  };
  */

  const boxShadow =
    "rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 12%) 0px 1px 5px 0px";

  const renderPreviewLinks = () => {
    return (
      <div className={classes.subsection}>
        <Typography
          className={classes.subHeaderRedLinks}
          paragraph
          variant="h5"
          component="h3"
        >
          FREE PREVIEW VIDEO LINKS
        </Typography>
        {props.events.map((event) => {
          if (!event.purchased) {
            if (event.embed) {
              //console.log(event.embed());
              return <div key={event.key}>{event.embed()}</div>;
            } else {
              return (
                <div
                  key={event.key}
                  style={{
                    marginBottom: "20px",
                    paddingRight: "20px",
                    display: "inline-block",
                  }}
                >
                  <a target="_blank" href={event.link}>
                    <img
                      src={event.poster}
                      style={{
                        boxShadow: boxShadow,
                        width: "100%",
                        maxWidth: "300px",
                      }}
                    />
                  </a>
                </div>
              );
            }
          }
        })}
      </div>
    );
  };

  const renderVendors = () => {
    return (
      <div className={classes.vendorsSection}>
        <div className={classes.subsection}>
          <Hidden smDown>
            <Typography
              className={classes.subHeader}
              paragraph
              variant="h5"
              component="h3"
            >
              VENDORS
            </Typography>
          </Hidden>
          {props.vendors.map((vendor) => {
            return (
              <Button
                key={vendor.name}
                target="_blank"
                href={vendor.link}
                style={{ width: "100%" }}
                variant="contained"
              >
                {vendor.name}
              </Button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderExtras = () => {
    return (
      <div className={classes.extrasSection}>
        {props.extras.map((extra) => {
          if (extra.banner) {
            return (
              <div className={classes.subsection} key={extra.title}>
                {extra.banner()}
              </div>
            );
          } else {
            return (
              <div key={extra.title} className={classes.subsection}>
                <Typography
                  className={classes.subHeader}
                  paragraph
                  variant="h5"
                  component="h3"
                >
                  {extra.title}
                </Typography>
                <p>{extra.text}</p>
                <MuiButton
                  target="_blank"
                  href={extra.link}
                  className={classes.extrasButton}
                >
                  <DownloadIcon className={classes.extrasButtonIcon} />{" "}
                  {extra.linkText}
                </MuiButton>
              </div>
            );
          }
        })}
      </div>
    );
  };

  const renderMobileView = () => {
    const renderHorizontalrule = () => {
      return (
        <hr
          style={{
            border: "none",
            color: "rgb(196, 196, 196)",
            backgroundColor: "rgb(196, 196, 196)",
            width: "80%",

            height: "1px",
          }}
        />
      );
    };
    return (
      <React.Fragment>
        <div
          style={{
            marginTop: "-8px",
            backgroundImage: `url(${props.welcome.bgBanner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            textAlign: "center",
          }}
        >
          <img
            style={{
              width: "100%",
              maxWidth: "500px",
              display: "inline-block",
            }}
            src={props.welcome.pngImage}
          />
        </div>
        {renderWelcome("mobile")}
        {props.isLoggedIn === "purchased" ? null : renderPurchaseButton()}
        <div
          style={
            props.isLoggedIn !== "not matched"
              ? { textAlign: "left" }
              : { textAlign: "center" }
          }
        >
          <div className={classes.loginButtonSection}>
            <MuiButton onClick={scheduleClick} className={classes.loginButton}>
              Event Schedule
            </MuiButton>
          </div>
          {/*props.isLoggedIn === "not matched" ? null : renderLoginButton()*/}
        </div>
        {props.isLoggedIn === "purchased" ? (
          <div className={classes.purchasedLinkSection}>
            {renderEventLinks()}
          </div>
        ) : null}
        <div className={classes.eventLinkSection}>{renderPreviewLinks()}</div>
        <div style={{ marginTop: "30px", marginBottom: "80px" }}>
          {renderHorizontalrule()}
        </div>
        <div>
          <CustomTabs
            headerColor="primary"
            customprimarycolor={props.customprimarycolor}
            variant="fullWidth"
            cardBodyStyle={{
              padding: "20px 15px 0px",
            }}
            tabs={[
              {
                tabName: "Artist Info",
                //tabIcon: Face,
                tabContent: (
                  <div style={{ marginTop: "15px" }}>
                    <EventCards
                      content={props.eventCards}
                      class={classes.subHeaderRed}
                      device={"mobile"}
                    />
                  </div>
                ),
              },
              /*
              {
                tabName: "Vendors",
                //tabIcon: Chat,
                tabContent: <React.Fragment>{renderVendors()}</React.Fragment>,
              },
              */
              {
                tabName: "Extras",
                //tabIcon: Build,
                tabContent: <React.Fragment>{renderExtras()}</React.Fragment>,
              },
            ]}
          />
        </div>
      </React.Fragment>
    );
  };

  const renderDesktopView = () => {
    return (
      <RaisedContainer>
        <div style={{ padding: "40px 0" }}>
          {renderWelcome("desktop")}
          {props.isLoggedIn === "purchased" ? null : renderPurchaseButton()}
          {/*renderLoginButton()*/}
          <hr className={classes.hr} />
          <Grid justify="space-evenly" spacing={5} container>
            <Grid md={7} item>
              {/*<EventVideo videos={props.events} />*/}
              {props.isLoggedIn === "purchased" ? (
                <div className={classes.purchasedLinkSection}>
                  {renderEventLinks()}
                </div>
              ) : null}
              {renderPreviewLinks()}
              <EventCards
                content={props.eventCards}
                class={classes.subHeaderRed}
                device={"desktop"}
              />
            </Grid>
            <Grid md={4} item>
              {renderSchedule()}
              {/*renderVendors()*/}
              {renderExtras()}
            </Grid>
          </Grid>
        </div>
      </RaisedContainer>
    );
  };

  return (
    <React.Fragment>
      <VirtualEventLoginFormProvider>
        <LoginModal
          loginModalContent={props.loginModalContent}
          classes={classes}
          setLoginStatus={props.setLoggedIn}
          loginClicked={loginButtonClicked}
          closeModal={closeLoginModal}
          showLoginModal={showLoginModal}
          eventbriteID={props.eventbriteID}
        />
        <ScheduleModal
          scheduleClicked={scheduleClick}
          closeModal={closeScheduleModal}
          showModal={showScheduleModal}
          events={props.events}
          titleClass={classes.subHeader}
        />
        <VirtualEventHeroSection
          classes={classes}
          sliderContent={props.sliderContent}
        />
        <Hidden mdUp>{renderMobileView()}</Hidden>
        <Hidden smDown>{renderDesktopView()}</Hidden>
        <VirtualEventFooter />
      </VirtualEventLoginFormProvider>
    </React.Fragment>
  );
};

export default VirtualEvent;
