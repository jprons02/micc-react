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
            style={{
              width: '200px',
              padding: '10px 50px 0 0',
            }}
          />
        </a>
      );
    });
  };
  // slider settings
  const settings = {
    dots: false,
    arrows: false,
    //infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    //autoplay: true,
    //speed: 2000,
    //autoplaySpeed: 2000,
    //cssEase: 'linear',
    //TEST THIS
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          //slidesToShow: 2,
          //slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} style={{ display: 'flex', alignItems: 'center' }}>
      {sponsorLogos()}
    </Slider>
  );
};

export default LogoSlider;
