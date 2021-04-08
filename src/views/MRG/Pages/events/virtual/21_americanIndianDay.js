import React, { useEffect } from "react";
import VirtualEvent from "components/CustomEvents/Virtual";

// My content
import beesVid from "assets/event/bees.mp4";
import birdsVid from "assets/event/birds.mp4";
import weatherVid from "assets/event/weather.mp4";
import image1 from "assets/img/bg.jpg";

const AID = () => {
  //Eventbrite embed here...?
  useEffect(() => {
    console.log("AID EVENTBRITE useefffect load.");
    /*
    I gain access to the EBWidget variables below from the <script> added in public/index.js.
    var exampleCallback = function () {
      console.log("Order complete!");
    };

    window.EBWidgets.createWidget({
      widgetType: "checkout",
      eventId: "144427499539",
      modal: true,
      modalTriggerElementId: "eventbrite-widget-modal-trigger-144427499539",
      onOrderComplete: exampleCallback,
    });
    */
  }, []);

  // Title area
  const sliderContent = [
    {
      id: 1,
      height: "40vh",
      bgImage: "",
      header: "AMERICAN INDIAN DAY",
      subHeader:
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    },
  ];

  // Set order of videos young to old for logic to work
  const events = [
    {
      key: "bees",
      poster: image1,
      source: beesVid,
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

  return (
    <VirtualEvent
      sliderContent={sliderContent}
      welcomeMessage={
        "Welcome to American Indian Day, we hope you enjoy your visit!"
      }
      events={events}
      vendors={vendors}
      extras={extras}
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
