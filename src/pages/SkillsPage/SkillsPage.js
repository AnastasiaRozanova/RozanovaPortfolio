import React from 'react';
import './style.css';

export const SkillsPage = () => {
  return (
    <div className="page-wrapper">
      <header className="page-row page-header">
        <div className="header">
          <div className="header-preheading">Abilities</div>
          <div className="header-heading">Professional Skills</div>
        </div>
        <div className="header-postheading">My experience includes the following technologies:</div>
      </header>
      <div className="page-row">
        <div className="page-col">
          <div className="technology-wrapper">
            <div className="technology-name">HTML/CSS:</div>
            <ul className="technology-list">
              <li>HTML5</li>
              <li>CSS3 ∕ Sass</li>
              <li>Boostrap</li>
              <li>Responsive</li>
            </ul>
          </div>
          <div className="technology-wrapper">
            <div className="technology-name">JavaScript:</div>
            <ul className="technology-list">
              <li>EcmaScript 5-6</li>
            </ul>
          </div>
          <div className="technology-wrapper">
            <div className="technology-name">Frameworks:</div>
            <ul className="technology-list">
              <li>React</li>
            </ul>
          </div>
          <div className="technology-wrapper">
            <div className="technology-name">Libs:</div>
            <ul className="technology-list">
              <li>React Table</li>
              <li>Redux</li>
              <li>Leaflet</li>
            </ul>
          </div>
        </div>
        <div className="page-col">
          <div className="technology-wrapper">
            <div className="technology-name">IDE:</div>
            <ul className="technology-list">
              <li>Visual Studio Code</li>
            </ul>
          </div>
          <div className="technology-wrapper">
            <div className="technology-name">Package managers:</div>
            <ul className="technology-list">
              <li>Npm</li>
              <li>Yarn</li>
            </ul>
          </div>
          <div className="technology-wrapper">
            <div className="technology-name">V.C. System:</div>
            <ul className="technology-list">
              <li>GitHub</li>
            </ul>
          </div>
          <div className="technology-wrapper">
            <div className="technology-name">Design:</div>
            <ul className="technology-list">
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
