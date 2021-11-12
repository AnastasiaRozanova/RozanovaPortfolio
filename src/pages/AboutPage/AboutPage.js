import React from 'react';
import foto from '../../assets/foto.jpg';
import './style.css';

export const AboutPage = () => {
  return (
    <div className="page-wrapper">
      <header className="page-row page-header">
        <div className="header">
          <div className="header-preheading">Information</div>
          <div className="header-heading">About Me</div>
        </div>
      </header>
      <div className="content-wrapper">
        <div className="image-wrapper">
          <img src={foto} className="about-page-image" alt="Фото автора" />
        </div>
        <div className="text-main-content intro">
          Hello, my name is Anastasiia Rozanova. I am a Junior Front-end Developer located in
          Voronezh.
        </div>
        <div className="text-main-content">
          I am passionate about web development and modern web design, UI effects, animations and
          creating intuitive, dynamic user experiences. Having started developing websites and web
          applications with HTML, CSS, and JavaScript, now I build it with React. When I am working
          on a project I always make sure that my work is fully responsive, look perfect on any
          device and delivered promptly.
        </div>
        <div className="text-main-content">
          Back in early 2019, I opened a completely new world of technologies. Having become
          interested in front-end development, I took several offline and online training courses
          and in 2020 I started working as a full-time developer.
        </div>
        <div className="text-main-content">
          For me, front-end web development is all about creativity and problem-solving. It’s a
          field that provides numerous opportunities for hands-on learning and professional growth.
          I enjoy interacting with new tools, learning new skills and meeting new people from all
          over the world. It is something that truly inspires me as a human being.
        </div>
        <div className="text-main-content">
          My hobbies are dancing bachata, reading books and working out :)
        </div>
      </div>
    </div>
  );
};
