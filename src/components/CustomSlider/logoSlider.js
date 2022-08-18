import React from 'react';

// react component for creating beautiful carousel
import Slider from 'react-slick';

const LogoSlider = (props) => {
  const sponsorLogos = () => {
    return props.content.map((item) => {
      return (
        <a
          key={item.key}
          href={item.link !== '' ? item.link : null}
          target="_blank"
        >
          <img
            src={item.img}
            style={item.style !== '' ? item.style : { maxWidth: '200px' }}
          />
        </a>
      );
    });
  };
  // slider settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    //slidesToShow: 3,
    //slidesToScroll: 10,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    //TEST THIS
    variableWidth: true,
  };

  return <Slider {...settings}>{sponsorLogos()}</Slider>;
};

export default LogoSlider;
