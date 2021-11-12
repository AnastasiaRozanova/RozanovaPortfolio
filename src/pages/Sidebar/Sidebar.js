import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <header className="logo-wrapper">
        <div className="logo-initials">
          <span>FRONTEND</span>
          <span>DEVELOPER</span>
        </div>
        <div className="logo-decryption">
          <span>ANASTASIIA</span>
          <span>ROZANOVA</span>
        </div>
      </header>
      <div className="nav-wrapper">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-item-link">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-item-link">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-item-link">
              SKILLS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-item-link">
              PORTFOLIO
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" className="nav-item-link">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <footer className="sidebar-footer">
        <div className="sidebar-footer__item">
          <a href="https://github.com/AnastasiaRozanova" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <div className="sidebar-footer__item">
          <a href="https://mail.ru/" target="_blank" rel="noreferrer">
            Mail
          </a>
        </div>
      </footer>
    </div>
  );
};
