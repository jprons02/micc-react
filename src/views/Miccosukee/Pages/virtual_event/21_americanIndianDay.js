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

// Colors
import { aid21Colors } from "themes/colors.js";

// My styles
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/miccosukee/events/aid2021Styles.js";
const useStyles = makeStyles(styles);

const AID = (props) => {
  const classes = useStyles();
  const eventbriteID = "165141162663";
  //Eventbrite TestID: 144427499539

  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    var exampleCallback = function () {
      console.log("Order complete!");
    };

    window.EBWidgets.createWidget({
      widgetType: "checkout",
      eventId: eventbriteID,
      modal: true,
      modalTriggerElementId: "example-widget-trigger",
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
          cardTitle: "1",
          image: image1,
          cardBody: () => <span>test01</span>,
        },
        {
          cardTitle: "2",
          image: image1,
          cardBody: () => <span>test02</span>,
        },
        {
          cardTitle: "3",
          image: image1,
          cardBody: () => <span>test03</span>,
        },
      ],
    },
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
  ];

  // Set order of videos young to old for logic to work
  const events = [
    {
      key: "bees",
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
      key: "birds",
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
      key: "weather",
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
      link: "https://www.google.com",
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
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </span>
    ),
  };

  return (
    <VirtualEvent
      customprimarycolor={aid21Colors}
      logo={logo}
      sliderContent={sliderContent}
      classes={classes}
      welcome={welcomeSectionContent}
      events={events}
      eventCards={eventCardsContent}
      vendors={vendors}
      extras={extras}
      eventbriteButton={() => (
        <button id="example-widget-trigger" type="button">
          Buy Tickets
        </button>
      )}
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
