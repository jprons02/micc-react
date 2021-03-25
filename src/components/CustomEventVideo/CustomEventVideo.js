import React, { useState, useEffect } from "react";
// My Custom Functions
import { setEstTime } from "services/setEstTime.js";

const CustomEventVideo = (props) => {
  const [video, setVideo] = useState({});

  useEffect(() => {
    // Get initial video source
    const d = setEstTime();
    const time = {
      currentYear: d.getFullYear(),
      currentMonth: d.getMonth() + 1,
      currentDay: d.getDate(),
      currentHour: d.getHours(),
      currentMinutes: d.getMinutes(),
    };
    videoSrc(time);

    // Set interval to look for new video source every 10 seconds
    const interval = setInterval(() => {
      console.log("interval started...");
      const d = setEstTime();
      const time = {
        currentYear: d.getFullYear(),
        currentMonth: d.getMonth() + 1,
        currentDay: d.getDate(),
        currentHour: d.getHours(),
        currentMinutes: d.getMinutes(),
      };
      // Pass interval argument to be cleared
      videoSrc(time, interval);
    }, 10000);
    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  //console.log("minutes state: ", timeState.currentMinutes);
  console.log("video state: ", video);

  const videoSrc = (time, interval) => {
    // Loop through all videos and break as soon as isVideoAvailable returns true
    for (let i = 0; i < props.videos.length; i++) {
      if (isVideoAvailable(time, props.videos[i].releaseTime)) {
        setVideo(props.videos[i]);
        if (i === 0) {
          console.log("interval cleared!");
          clearInterval(interval);
        }
        break;
      }
    }
  };

  // Takes input of when Video should be available to view
  const isVideoAvailable = (time, videoTime) => {
    // Return true if its the next year/month/day
    if (
      time.currentYear > videoTime.year ||
      time.currentMonth > videoTime.month ||
      time.currentDay > videoTime.day
    ) {
      return true;
    }

    // Return true if time is met
    if (time.currentYear === videoTime.year) {
      if (time.currentMonth === videoTime.month) {
        if (time.currentDay === videoTime.day) {
          if (time.currentHour >= videoTime.hour) {
            if (time.currentMinutes >= videoTime.minutes) {
              return true;
            } else if (time.currentHour > videoTime.hour) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };

  // Adding a key property in <video> to rerender the video without a page refresh.
  // https://stackoverflow.com/questions/41303012/updating-source-url-on-html5-video-with-react
  return (
    <video
      key={video ? video.key : ""}
      poster={video ? video.poster : ""}
      width="100%"
      controls
    >
      <source src={video ? video.source : ""} type="video/mp4" />
      Your browser does not support HTML video.
    </video>
  );
};

export default CustomEventVideo;

/*
Parent component will pass video(s) to this component
Example:
const videos = [
    {
      key: "bees",
      poster: image1,
      source: beesVid,
      releaseTime: {
        year: 2021,
        month: 3,
        day: 18,
        hour: 11,
        minutes: 26,
      },
    }
]
<CustomEventVideo videos={videos} />
*/
