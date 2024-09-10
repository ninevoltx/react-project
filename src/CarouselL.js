import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const CarouselItem = styled.div`
  padding: 10px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 200px; /* Adjust the max-width as needed */
  margin: 0 auto;
`;

const TextBox = styled.div`
  padding: 5px;
`;

const NewsTitle = styled.h1`
  margin-bottom: 10px;
`;

const CarouselL = () => {
  const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec dui vel ex pulvinar fermentum ac vel odio. Nullam nec sagittis velit, et tincidunt erat.';

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...carouselSettings}>
      {[1, 2, 3, 4].map((item) => (
        <CarouselItem key={item}>
          <Image src={`image${item}.jpg`} alt={`Image ${item}`} />
          <TextBox>
            <NewsTitle>News</NewsTitle>
            <p>{loremIpsum}</p>
          </TextBox>
        </CarouselItem>
      ))}
    </Slider>
  );
};

export default CarouselL;