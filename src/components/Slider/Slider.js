import React, { useState, useEffect } from 'react';
import './style.css';

export const Slider = ({ sliders = [] }) => {
  const [sliderHeight, setSliderHeight] = useState(0);
  const [activeSlider, setActiveSlider] = useState(0);

  const resizeHandler = () => {
    const height = document.querySelector('#slider-item--0')?.height;
    setSliderHeight(height);
  };

  useEffect(() => {
    window.innerWidth > 1366
      ? setSliderHeight(Math.round(window.innerWidth * 0.1589))
      : setSliderHeight(Math.round(window.innerWidth * 0.245));
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const arrowLeftClickHandler = () => {
    setActiveSlider(prev => {
      return prev !== 0 ? prev - 1 : sliders.length - 1;
    });
  };

  const arrowRightClickHandler = () => {
    setActiveSlider(prev => {
      return prev !== sliders.length - 1 ? prev + 1 : 0;
    });
  };

  return (
    <div className="slider-wrapper" style={{ height: sliderHeight + 'px' }}>
      <ul className="slider-list">
        {sliders.map((item, index) => (
          <li
            className={`slider-item ${index === activeSlider ? 'show' : 'hidden'}`}
            key={`slider-item--${index}`}
          >
            <img src={item} alt="slider" className="slider-item-pic" id={`slider-item--${index}`} />
          </li>
        ))}
      </ul>
      <div className="slider-arrow-left-wrapper" onClick={arrowLeftClickHandler}>
        <span className="slider-arrow-left" />
      </div>
      <div className="slider-arrow-right-wrapper" onClick={arrowRightClickHandler}>
        <span className="slider-arrow-right" />
      </div>
      <div className="slider-dots">
        {sliders.map((_, index) => (
          <span
            className={`slider-dot ${index === activeSlider && 'active'}`}
            key={`span--${index}`}
            onClick={() => setActiveSlider(index)}
          />
        ))}
      </div>
    </div>
  );
};
