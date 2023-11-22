import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import { List } from 'react-bootstrap-icons';
import Logo from '../assets/images/manawaoralogowhite.png';

const Navbar = () => {
  // Declare on and off state for mobile menu
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // Toggle the state of menuIsOpen
  const toggleMobileMenu = () => {
    setMenuIsOpen(!menuIsOpen);
    document.body.classList.toggle('no-scroll');
  };

  return (
    <>
      {/* Conditionally render MobileMenu based on menuIsOpen */}
      {menuIsOpen && <MobileMenu onClose={() => toggleMobileMenu()} />}
      <nav>
        <div className="nav-flex-container">
          <div className="logo-container">
            {/* Place logo here */}
            <Link to="/">
              <img src={Logo} alt="Manawa Ora's Logo" />
            </Link>
          </div>

          <div className="nav-link-container">
            <ul className="nav-links">
              <Link to="/">
                {/* Home link */}
                <li className="link-styling">Home</li>
              </Link>

              <Link to="/about">
                {/* About link */}
                <li className="link-styling">About</li>
              </Link>

              <Link to="/services">
                {/* Services link */}
                <li className="link-styling">Services</li>
              </Link>

              <Link to="/contact">
                {/* Contact link */}
                <li className="link-styling">Contact</li>
              </Link>
            </ul>
          </div>

          <div className="menu-container">
            {/* Button to toggle mobile menu */}
            <button
              id="menu-button"
              className="show-mobile-menu-button"
              onClick={toggleMobileMenu}
            >
              <List id="hamburger-icon" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


