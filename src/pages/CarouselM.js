import React from 'react';
import Slider from 'react-slick';
import './slick/slick.css';
import './slick/slick-theme.css';
import image1 from './movies/1.jpg'
import image2 from './movies/2.jpg'
import image3 from './movies/3.jpg'
import image4 from './movies/4.jpg'
import image5 from './movies/5.jpg'
import image6 from './movies/6.jpg'
import image7 from './movies/7.jpg'
import image8 from './movies/8.jpg'
import image9 from './movies/9.jpg'
import image10 from './movies/10.jpg'
import image11 from './movies/11.jpg'
import image12 from './movies/12.jpg'
import image13 from './movies/13.jpg'

const items = [
  { id: 1, name: 'Item 1', image: image1, link: './movie/1' },
  { id: 2, name: 'Item 2', image: image2, link: './' },
  { id: 3, name: 'Item 3', image: image3 },
  { id: 4, name: 'Item 4', image: image4 },
  { id: 5, name: 'Item 5', image: image5 },
  { id: 6, name: 'Item 6', image: image6 },
  { id: 7, name: 'Item 7', image: image7 },
  { id: 8, name: 'Item 8', image: image8 },
  { id: 9, name: 'Item 9', image: image9 },
  { id: 10, name: 'Item 10', image: image10 },
  { id: 11, name: 'Item 11', image: image11 },
  { id: 12, name: 'Item 12', image: image12 },
  { id: 13, name: 'Item 13', image: image13 },
];

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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

const CarouselM = () => {
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.image} alt={item.name} style={{ width: 220, height: 325 }} />
            <p>{item.name}</p>
          </a>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselM;