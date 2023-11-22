import React from 'react'
import { Link } from 'react-router-dom';
import { Envelope } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';


const Footer = () => {
  return (
    <div className="footer-container">

        <div className="footer-link-container">
            <ul className="footer-links">
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

        <div className="socials">
            <Link className="social-link" to="mailto: manawaora@gmail.com">
                <Envelope id="bi bi-envelope"/>
            </Link>

            <Link className="social-link" to="https://www.facebook.com/manawaora1">
                <Facebook id="bi bi-facebook" />
            </Link>

            <Link className="social-link" to="https://www.instagram.com/manawa_ora_mirimiri/">
                <Instagram id="bi bi-instagram" />
            </Link>
        </div>

        <div className="footer-blurb">
            <p>Design with love © CloverStudios 2023. All right reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
