import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import bg from '../../assets/bg.mp4';
import poster from '../../assets/laptop.jpg';

export const HomePage = () => {
  return (
    <div className="home-wrapper">
      <div className="content">
        <div className="content-header">
          <span>ANASTASIIA</span>
          <span>ROZANOVA</span>
        </div>
        <div className="content-text">I'm a frontend developer</div>
      </div>
      <NavLink to="/about" className="arrow" />
      <div className="page-bg-wrapper">
        <div className="page-bg-container">
          <div className="video-overlay" />
          <video className="video" loop autoPlay muted poster={poster}>
            <source src={bg} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};
