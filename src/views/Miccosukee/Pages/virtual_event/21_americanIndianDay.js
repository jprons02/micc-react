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

// @material-ui/icons
import Typography from "@material-ui/core/Typography";

import MuiButton from "@material-ui/core/Button";
import { standardLinkColor } from "themes/colors.js";

import coloringBook from "assets/event/aid21/sample.png";

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
      window.location.replace("https://www.miccosukee.io/virtual-event/aid");
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
      title: "Featured Performers",
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
          image: image1,
          dkImage: yellowBirdDancersDesktop,
          cardBody: () => (
            <span>
              Known as "The Hoop Ninja", she puts a modern spin on the native
              hoop dancing tradition, integrating elements such as smoke, fire
              and lights in her mesmerizing routines.
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
      bannerAd: true,
      bannerSrc: coloringBook,
      link: "https://mapa-media.s3.amazonaws.com/events/AID_ColoringBook.pdf",
    },
    {
      title: "RAFFLE",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut lorem ex",
      linkText: "DOWNLOAD RULES",
      link: "https://www.yahoo.com",
    },
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
