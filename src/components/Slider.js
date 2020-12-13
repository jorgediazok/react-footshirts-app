import React from 'react';
import '../styles/slider.css';

const Slider = () => {
  return (
    <div className="slider__container">
      <div className="slider__prev"></div>
      <div className="slider__next"></div>
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
    </div>
  );
};

export default Slider;
