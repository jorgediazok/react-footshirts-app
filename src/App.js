import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Client from './api';

function App() {
  const [camisetas, setCamisetas] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  const getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'footballShirts',
      });
      const data = await response.items;
      console.log(data);
      setCamisetas(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Slider {...settings}>
        {camisetas.map((camiseta, index) => (
          <div className={index === imageIndex ? 'slide activeSlide' : 'slide'}>
            <img
              className="slider__image"
              src={camiseta.fields.image.fields.file.url}
              alt={camiseta.fields.title}
            />
            <div className="slider__model__container">
              <p className="slider__model__text">{camiseta.fields.model}</p>
            </div>
            <p className="slider__model__year">{camiseta.fields.year}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
