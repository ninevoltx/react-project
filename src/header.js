import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from './home.png';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      const menu = document.getElementById('menu');
      const bannerHeight = document.getElementById('banner').clientHeight;

      if (window.pageYOffset >= bannerHeight) {
        menu.classList.add('fixed');
      } else {
        menu.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header-container">
      <div id="banner" className="banner">
      <Link to="/home">
          <img src={logoImage} alt="Logo" className="logo" />
        </Link>
      </div>
      <div id="menu" className="menu">
        <div className="menu-left">
          <Link className={`menuItem ${showDropdown ? 'clicked' : ''}`} onClick={toggleDropdown}>
            MOVIES
            {showDropdown && (
              <div className="dropdown">
                <Link to="/intheaters" className="dropdownItem">
                  IN THEATERS
                </Link>
                <Link to="/upcoming" className="dropdownItem">
                  UPCOMING
                </Link>
                <Link to="/news" className="dropdownItem">
                  NEWS
                </Link>
                <Link to="/past" className="dropdownItem">
                  PAST
                </Link>
              </div>
            )}
          </Link>
          <Link to="/showings" className="menuItem">
            SHOWINGS
          </Link>
          <Link to="/theaters" className="menuItem">
            THEATERS
          </Link>
          <Link to="/database" className="menuItem">
            DATABASE
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search in this site" />
        </div>
      </div>
    </div>
  );
};

export default Header;
