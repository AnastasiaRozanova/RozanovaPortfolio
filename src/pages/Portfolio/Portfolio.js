import React from 'react';

import { Slider } from '../../components/Slider/Slider';
import slideFirst from '../../assets/slide-1.jpg';
import slideSecond from '../../assets/slide-2.jpg';
import slideThird from '../../assets/slide-3.jpg';
import slideFourth from '../../assets/slide-4.jpg';
import slideFifth from '../../assets/slide-5.jpg';
import slideSixth from '../../assets/slide-6.jpg';
import slideSeventh from '../../assets/slide-7.jpg';
import slideEighth from '../../assets/slide-8.jpg';

import './style.css';

const slidesTop = [slideFirst, slideSecond, slideThird, slideFourth];
const slidesBottom = [slideFifth, slideSixth, slideSeventh, slideEighth];

export const Portfolio = () => {
  return (
    <div className="portfolio-page-wrapper">
      <header className="page-row page-header">
        <div className="header">
          <div className="header-preheading">Abilities</div>
          <div className="header-heading">Portfolio</div>
        </div>
        <div className="header-postheading">Examples of my work as a graphic designer:</div>
      </header>
      <div className="sliders-wrapper">
        <Slider sliders={slidesTop} />
        <Slider sliders={slidesBottom} />
      </div>
    </div>
  );
};
