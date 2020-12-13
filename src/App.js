import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Client from './api';

function App() {
  const [camisetas, setCamisetas] = useState([]);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow__next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow__prev" onClick={onClick}>
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
  };

  const getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'footballShirts',
      });
      const data = await response.items;
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
          <div>
            <img
              className="slider__image"
              src={camiseta.fields.image.fields.file.url}
              alt={camiseta.fields.title}
            />
            ;
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;

/*
 <div>
        {camisetas.map((camiseta) => {
          return (
            <img
              src={camiseta.fields.image.fields.file.url}
              alt={camiseta.fields.title}
            />
          );
        })}
      </div>
*/

/*
 <ul className="slider__list">
        <li>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_758478-MLA44299392963_122020-O.webp"
            alt="camiseta1"
            className="slider__image"
          />
        </li>
        <li>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_815304-MLA44108743770_112020-O.webp"
            alt="camiseta2"
            className="slider__image"
          />
        </li>
        <li>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_826023-MLA44227287013_122020-O.webp"
            alt="camiseta3"
            className="slider__image"
          />
        </li>
        <li>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_999174-MLA44211511681_112020-O.webp"
            alt="camiseta4"
            className="slider__image"
          />
        </li>
        <li>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_764178-MLA43683735791_102020-O.webp"
            alt="camiseta5"
            className="slider__image"
          />
        </li>
      </ul>
*/
