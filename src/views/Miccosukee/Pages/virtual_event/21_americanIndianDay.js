import React, { useEffect, useState } from "react";
import VirtualEvent from "components/CustomEvents/Virtual";

// My content
import beesVid from "assets/event/bees.mp4";
import birdsVid from "assets/event/birds.mp4";
import weatherVid from "assets/event/weather.mp4";
import image1 from "assets/img/bg.jpg";
import logo from "assets/img/events/aid/AID-LOGO.png";
import bannerbg from "assets/img/events/aid/bannerbg.jpg";
import nativeLogo from "assets/img/events/aid/native_logo.png";
//import yellowBirdDancersDesktop from "assets/event/aid21/FamilySedona1x1.jpg";
import yellowBirdDancersDesktop from "assets/event/aid21/FamilySedona1x1-1.5.jpg";
import yellowBirdDancersMobile from "assets/event/aid21/FamilySedona.jpg";
import frankDesktop from "assets/event/aid21/Frank-11_Photo-Credit-Leslie-Frempong_desktop.jpg";
import frankMobile from "assets/event/aid21/Frank-11_Photo-Credit-Leslie-Frempong_mobile.jpg";
import jamesDesktop from "assets/event/aid21/JamesJones_desktop.jpg";
import jamesMobile from "assets/event/aid21/JamesJones_mobile.jpg";
import marikaDesktop from "assets/event/aid21/Marika_desktop.jpg";
import marikaMobile from "assets/event/aid21/Marika_mobile.jpg";
import cristinaDesktop from "assets/event/aid21/Cristina_desktop.jpg";
import cristinaMobile from "assets/event/aid21/Cristina_mobile.jpg";

// @material-ui/icons
import Typography from "@material-ui/core/Typography";

import MuiButton from "@material-ui/core/Button";
import { standardLinkColor } from "themes/colors.js";

//import coloringBook from "assets/event/aid21/sample.png";
import coloringBook from "assets/img/events/aid/ColoringBook_bg.jpg";
import coloringPng from "assets/img/events/aid/ColoringPages_image.png";

// Event id
import { eventbriteIDs } from "assets/event/EventData/eventbriteIDs.js";

// Colors
import { aid21Colors } from "themes/colors.js";

// My styles
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/miccosukee/events/aid2021Styles.js";
const useStyles = makeStyles(styles);

const AID = (props) => {
  const classes = useStyles();
  const eventbriteID = eventbriteIDs.aid2021;
  //Eventbrite TestID: 144427499539

  const [isLoggedIn, setLoggedIn] = useState("not matched");

  useEffect(() => {
    var exampleCallback = function () {
      console.log("Order complete!");
      window.location.replace("https://www.miccosukee.com/virtual-event/aid");
    };

    window.EBWidgets.createWidget({
      widgetType: "checkout",
      eventId: eventbriteID,
      modal: true,
      modalTriggerElementId: "example-widget-trigger",
      iframeContainerId: `eventbrite-widget-container-${eventbriteID}`,
      onOrderComplete: exampleCallback,
    });
  }, []);

  const getColoringBookLinks = () => {
    //if date is sept 20 return 1 li with book 1 link
    //if date is sept 21 return 2 lis with book 1 and book 2 link...

    const d = new Date();
    const currentDateObj = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const lastDayOfEvent = new Date(2021, 8, 25);

    const coloringBook1 = () => {
      return (
        <li>
          <a
            target="_blank"
            href="https://mapa-media.s3.amazonaws.com/events/AID_ColoringBook1.pdf"
          >
            Coloring Book 1
          </a>
        </li>
      );
    };
    const coloringBook2 = () => {
      return (
        <li>
          <a
            target="_blank"
            href="https://mapa-media.s3.amazonaws.com/events/AID_ColoringBook2.pdf"
          >
            Coloring Book 2
          </a>
        </li>
      );
    };
    const coloringBook3 = () => {
      return (
        <li>
          <a
            target="_blank"
            href="https://mapa-media.s3.amazonaws.com/events/AID_ColoringBook3.pdf"
          >
            Coloring Book 3
          </a>
        </li>
      );
    };
    const coloringBook4 = () => {
      return (
        <li>
          <a
            target="_blank"
            href="https://mapa-media.s3.amazonaws.com/events/AID_ColoringBook4.pdf"
          >
            Coloring Book 4
          </a>
        </li>
      );
    };
    const coloringBook5 = () => {
      return (
        <li>
          <a
            target="_blank"
            href="https://mapa-media.s3.amazonaws.com/events/AID_ColoringBook5.pdf"
          >
            Coloring Book 5
          </a>
        </li>
      );
    };

    if (currentDateObj >= lastDayOfEvent) {
      return {
        title: "",
        listItems: () => {
          return (
            <React.Fragment>
              {coloringBook1()}
              {coloringBook2()}
              {coloringBook3()}
              {coloringBook4()}
              {coloringBook5()}
            </React.Fragment>
          );
        },
      };
    } else if (currentDateObj >= new Date(2021, 8, 24)) {
      return {
        listItems: () => {
          return (
            <React.Fragment>
              {coloringBook1()}
              {coloringBook2()}
              {coloringBook3()}
              {coloringBook4()}
              {coloringBook5()}
            </React.Fragment>
          );
        },
      };
    } else if (currentDateObj >= new Date(2021, 8, 23)) {
      return {
        listItems: () => {
          return (
            <React.Fragment>
              {coloringBook1()}
              {coloringBook2()}
              {coloringBook3()}
              {coloringBook4()}
            </React.Fragment>
          );
        },
      };
    } else if (currentDateObj >= new Date(2021, 8, 22)) {
      return {
        listItems: () => {
          return (
            <React.Fragment>
              {coloringBook1()}
              {coloringBook2()}
              {coloringBook3()}
            </React.Fragment>
          );
        },
      };
    } else if (currentDateObj >= new Date(2021, 8, 21)) {
      return {
        listItems: () => {
          return (
            <React.Fragment>
              {coloringBook1()}
              {coloringBook2()}
            </React.Fragment>
          );
        },
      };
    } else {
      return {
        listItems: () => {
          return <React.Fragment>{coloringBook1()}</React.Fragment>;
        },
      };
    }
  };

  // Title area
  const sliderContent = [
    {
      id: 1,
      height: "40vh",
      bgImage: "",
      bgColor: aid21Colors.red,
      header: () => (
        <span>
          MICCOSUKEE CELEBRATES
          <br />
          AMERICAN INDIAN DAY
        </span>
      ),
      subHeader: () => (
        <span>
          VIRTUAL EVENT
          <br />
          SEPTEMBER 20 - 25
        </span>
      ),
    },
  ];

  const eventCardsContent = [
    {
      title: "Featured Artists",
      content: [
        {
          cardTitle: "Yellow Bird Indian Dancers",
          image: yellowBirdDancersMobile,
          dkImage: yellowBirdDancersDesktop,
          cardBody: () => (
            <span>
              Members of the San Carlos Apache Tribe from Phoenix, Arizona, the
              Duncan Family has traveled the world presenting their unique
              repertoire of songs, dances and stories that entertain and educate
              audiences of all ages.
            </span>
          ),
        },
        {
          cardTitle: "Frank Waln",
          image: frankMobile,
          dkImage: frankDesktop,
          cardBody: () => (
            <span>
              The award-winning Sicangu Lakota Hip-Hop artist and producer from
              the Rosebud Reservation in South Dakota shares his native roots by
              performing across the United States.
            </span>
          ),
        },
        {
          cardTitle: "James Jones",
          image: jamesMobile,
          dkImage: jamesDesktop,
          cardBody: () => (
            <span>
              Known in the online world as @notoriouscree, he's an influencer
              and native content creator that has gained over 3.1 million
              followers on Tik Tok.
            </span>
          ),
        },
        {
          cardTitle: "Marika Sila",
          image: marikaMobile,
          dkImage: marikaDesktop,
          cardBody: () => (
            <span>
              Known as "The Hoop Ninja", Marika is an actress, influencer and
              entertainer from the Inuit Tribe who puts a modern spin on the
              native hoop dancing tradition, integrating elements such as smoke,
              fire and lights in her mesmerizing routines. As an actress, she is
              best known for her work in the popular TV series “The Twilight
              Zone”.
            </span>
          ),
        },
        {
          cardTitle: "Cristina Osceola",
          image: cristinaMobile,
          dkImage: cristinaDesktop,
          cardBody: () => (
            <span>
              As a proud Miccosukee tribal member, Cristina shares her culture
              with the world through various art forms, including painting,
              drawing, sewing and jewelry-making.
            </span>
          ),
        },
      ],
    },
    /*
    {
      title: "Fashion Show",
      content: [
        {
          cardTitle: "1",
          image: image1,
          cardBody: () => <span>test11</span>,
        },
        {
          cardTitle: "2",
          image: image1,
          cardBody: () => <span>test12</span>,
        },
        {
          cardTitle: "3",
          image: image1,
          cardBody: () => <span>test13</span>,
        },
      ],
    },
    {
      title: "3",
      content: [
        {
          cardTitle: "1",
          image: image1,
          cardBody: () => <span>test21</span>,
        },
        {
          cardTitle: "2",
          image: image1,
          cardBody: () => <span>test22</span>,
        },
        {
          cardTitle: "3",
          image: image1,
          cardBody: () => <span>test23</span>,
        },
      ],
    },
    */
  ];

  // Set order of videos young to old for logic to work
  const events = [
    {
      key: "Yellow Bird Indian Dancers",
      purchased: true,
      poster: image1,
      source: beesVid,
      link: "https://google.com",
      releaseTime: {
        year: 2021,
        month: 3,
        day: 18,
        hour: 23,
        minutes: 28,
      },
    },
    {
      key: "Frank Waln",
      purchased: true,
      poster: image1,
      source: birdsVid,
      link: "https://yahoo.com",
      releaseTime: {
        year: 2021,
        month: 3,
        day: 18,
        hour: 12,
        minutes: 27,
      },
    },
    {
      key: "James Jones",
      purchased: true,
      poster: image1,
      source: weatherVid,
      link: "https://youtube.com",
      releaseTime: {
        year: 2021,
        month: 3,
        day: 18,
        hour: 11,
        minutes: 24,
      },
    },
    {
      key: "Marika Sila",
      purchased: true,
      poster: image1,
      source: weatherVid,
      link: "https://youtube.com",
      releaseTime: {
        year: 2021,
        month: 3,
        day: 18,
        hour: 11,
        minutes: 24,
      },
    },
    {
      key: "Cristina Osceola",
      purchased: true,
      poster: image1,
      source: weatherVid,
      link: "https://youtube.com",
      releaseTime: {
        year: 2021,
        month: 3,
        day: 18,
        hour: 11,
        minutes: 24,
      },
    },
    {
      key: "Free Preview 1",
      purchased: false,
      poster: image1,
      source: weatherVid,
      link: "https://youtube.com",
      releaseTime: {
        year: 2021,
        month: 3,
        day: 18,
        hour: 11,
        minutes: 24,
      },
    },
    {
      key: "Free Preview 2",
      purchased: false,
      poster: image1,
      source: weatherVid,
      link: "https://youtube.com",
      releaseTime: {
        year: 2021,
        month: 3,
        day: 18,
        hour: 11,
        minutes: 24,
      },
    },
    {
      key: "Free Preview 3",
      purchased: false,
      poster: image1,
      source: weatherVid,
      link: "https://youtube.com",
      releaseTime: {
        year: 2021,
        month: 3,
        day: 18,
        hour: 11,
        minutes: 24,
      },
    },
    {
      key: "Free Preview 4",
      purchased: false,
      poster: image1,
      source: weatherVid,
      link: "https://youtube.com",
      releaseTime: {
        year: 2021,
        month: 3,
        day: 18,
        hour: 11,
        minutes: 24,
      },
    },
    {
      key: "Free Preview 5",
      purchased: false,
      poster: image1,
      source: weatherVid,
      link: "https://youtube.com",
      releaseTime: {
        year: 2021,
        month: 3,
        day: 18,
        hour: 11,
        minutes: 24,
      },
    },
  ];

  const vendors = [
    {
      name: "GOOGLE",
      link: "https://www.google.com",
      img: "",
    },
    {
      name: "YAHOO",
      link: "https://www.yahoo.com",
      img: "",
    },
  ];

  const extras = [
    {
      title: "COLORING CONTEST",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut lorem ex. Quisque varius nisi eu nunc malesuada, consequat elementum ante aliquet.",
      linkText: "DOWNLOAD COLORING BOOK",
      banner: () => {
        return (
          <div
            style={{
              backgroundImage: `url("${coloringBook}")`,
              borderRadius: "6px",
              backgroundPosition: "center",
              width: "100%",
            }}
          >
            <div style={{ padding: "10px" }}>
              <Typography
                component={"h2"}
                className={classes.eventFont}
                style={{
                  color: aid21Colors.yellow,
                  textAlign: "center",
                  fontSize: "32px",
                  marginBottom: "10px",
                  lineHeight: "1.1",
                }}
              >
                <span style={{ fontSize: "46px" }}>FREE</span>
                <br />
                COLORING BOOKS
              </Typography>
              <div style={{ paddingBottom: "30px" }}>
                <img style={{ width: "100%" }} src={coloringPng} />
              </div>
              <div style={{ padding: "10px" }}>
                <Typography
                  component={"h3"}
                  className={classes.eventFont}
                  style={{
                    color: aid21Colors.red,
                    textAlign: "center",
                    fontSize: "22px",
                    marginBottom: "10px",
                    lineHeight: "1.1",
                  }}
                >
                  CHECK BACK EVERYDAY THIS
                  <br /> WEEK TO COLLECT ALL 5 BOOKS
                </Typography>
                <Typography
                  component={"h4"}
                  className={classes.eventFont}
                  style={{
                    color: aid21Colors.red,
                    textAlign: "left",
                    fontSize: "18px",
                    marginBottom: "10px",
                  }}
                >
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "5px 0 0 0",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    {getColoringBookLinks().listItems()}
                  </ul>
                </Typography>
                <div style={{ marginTop: "20px" }}>
                  <Typography
                    component={"h5"}
                    style={{
                      color: "#454545",
                      textAlign: "left",
                      fontSize: "14px",
                      paddingTop: "10px",
                      marginBottom: "0px",
                    }}
                  >
                    <span style={{ color: aid21Colors.red }}>
                      Share your work with us!
                    </span>
                    <br />
                    Tag us at #americanindianday
                    <br />
                    Facebook:{" "}
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      target="_blank"
                      href="https://www.facebook.com/Miccosukee-Tribe-of-Indians-of-Florida-107623718263285/"
                    >
                      miccosukeetribeofindiansofflorida
                    </a>
                    <br />
                    Instagram:{" "}
                    <a
                      target="_blank"
                      href="https://www.instagram.com/miccosukeetribeofindians/"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      miccosukeetribeofindians
                    </a>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        );
      },
      link: "https://mapa-media.s3.amazonaws.com/events/AID_ColoringBook.pdf",
    },
    /*
    {
      title: "RAFFLE",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut lorem ex",
      linkText: "DOWNLOAD RULES",
      link: "https://www.yahoo.com",
    },
    */
  ];

  const welcomeSectionContent = {
    bgBanner: bannerbg,
    pngImage: nativeLogo,
    title: "A CELEBRATION OF INDIGENOUS NATIONS",
    body: () => (
      <span>
        Celebrate American Indian Day from September 20 - 25 alongside the
        Miccosukee Tribe of Indians of Florida. “A Celebration of Indigenous
        Nations” is a week-long virtual festival including performances and
        presentations showcasing the culture and traditions of Native American
        Tribes around the globe. Enjoy this virtual event with the whole family
        from the comfort of your home and learn about the art, lifestyle and
        customs of modern-day Natives.
      </span>
    ),
  };

  // This info is passed to login modal component
  const renderNotSignedInCopy = () => {
    return (
      <React.Fragment>
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: "300",
            marginBottom: "10px",
          }}
        >
          Not signed up? Please choose one of the ticket options below:
        </Typography>
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: "300",
            marginBottom: "10px",
            marginLeft: "10px",
          }}
        >
          1) Register for FREE and receive previews to this Saturday's
          performances, as well as coloring pages for the kids.
        </Typography>
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: "300",
            marginBottom: "10px",
            marginLeft: "10px",
          }}
        >
          2) $10 ticket includes event previews, coloring pages for the kids,
          access to Saturday's show and a goodie bag with art supplies for the
          first 50 people who purchase tickets.
        </Typography>
        <div>
          <MuiButton
            style={{
              fontSize: "14px",
              color: standardLinkColor.color,
              "&:hover,&:focus": {
                color: standardLinkColor.hover,
              },
            }}
            href="https://www.eventbrite.com/e/miccosukee-celebrates-american-indian-day-registration-165141162663?aff=website"
            target="_blank"
          >
            REGISTER HERE!
          </MuiButton>
        </div>
      </React.Fragment>
    );
  };

  const loginModalContent = {
    welcome: "Welcome to the Miccosukee American Indian Day Event Page!",
    notSignedUpDetails: renderNotSignedInCopy,
    registerLink:
      "https://www.eventbrite.com/e/miccosukee-celebrates-american-indian-day-registration-165141162663?aff=website",
  };

  return (
    <VirtualEvent
      loginModalContent={loginModalContent}
      customprimarycolor={aid21Colors}
      logo={logo}
      sliderContent={sliderContent}
      classes={classes}
      welcome={welcomeSectionContent}
      events={events}
      eventCards={eventCardsContent}
      vendors={vendors}
      extras={extras}
      eventbriteID={eventbriteID}
      isLoggedIn={isLoggedIn}
      setLoggedIn={setLoggedIn}
    />
  );
};

export default AID;

/*
<!-- THIS IS FOUND IN public/index.js bottom of body tag (with exception of button...) -->
<!-- THIS IS FOUND IN public/index.js bottom of body tag -->
<!-- THIS IS FOUND IN public/index.js bottom of body tag -->
<!-- THIS IS FOUND IN public/index.js bottom of body tag -->
<!-- Noscript content for added SEO -->
<noscript><a href="https://www.eventbrite.com/e/aid-test-tickets-144427499539" rel="noopener noreferrer" target="_blank"></noscript>
<!-- You can customize this button any way you like -->
<button id="eventbrite-widget-modal-trigger-144427499539" type="button">Buy Tickets</button>
<noscript></a>Buy Tickets on Eventbrite</noscript>

<script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>
<!-- THIS IS FOUND IN public/index.js bottom of body tag -->
<!-- THIS IS FOUND IN public/index.js bottom of body tag -->
<!-- THIS IS FOUND IN public/index.js bottom of body tag -->
<!-- THIS IS FOUND IN public/index.js bottom of body tag -->

<!-- I want this on AID 2021 component mount. -->
<!-- I want this on AID 2021 component mount. -->
<script type="text/javascript">
    var exampleCallback = function() {
        console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '144427499539',
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-144427499539',
        onOrderComplete: exampleCallback
    });
</script>
<!-- I want this on AID 2021 component mount. -->
<!-- I want this on AID 2021 component mount. -->
*/
