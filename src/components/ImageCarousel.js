import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  lazyLoad: true,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "60px",
};

const ImageCarousel = () => {
  return (
    <CarouselContainer>
      <Slider {...carouselSettings}>
        <Slide>
          <SliderImage src="/images/slider-badag.jpg" />
        </Slide>
        <Slide>
          <SliderImage src="/images/slider-badging.jpg" />
        </Slide>
        <Slide>
          <SliderImage src="/images/slider-scale.jpg" />
        </Slide>
        <Slide>
          <SliderImage src="/images/slider-badag.jpg" />
        </Slide>
      </Slider>
    </CarouselContainer>
  );
};

export default ImageCarousel;

const CarouselContainer = styled.div`
  position: relative;
  padding-top: 30px;

  .slick-track {
    display: flex;
  }

  .slick-slide {
    margin-right: 24px;
  }

  .slick-dots {
    position: absolute;
    bottom: 3vh;
    right: 9vw;
    display: flex !important;
    justify-content: flex-end;
  }

  .slick-dots li {
    margin: 0 2px;
  }

  .slick-dots button::before {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.8) !important;
  }

  .slick-active button::before {
    color: white !important;
  }
`;

const Slide = styled.div``;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border: 4px solid transparent;
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    border: 4px solid rgba(149, 249, 249, 0.8);
  }
`;
