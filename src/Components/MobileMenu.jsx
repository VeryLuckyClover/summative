import { Link } from "react-router-dom";
import { X } from 'react-bootstrap-icons';

const MobileMenu = ({ onClose }) => {
    return (
        <div className="mobile-menu-wrapper">
            <button id="close-nav-menu" onClick={onClose}>
                <X />
            </button>
            <div id='mobile-menu'>
                <div>
                    <Link to="/" onClick={onClose}>Home</Link>
                </div>
                <div>
                    <Link to="/About" onClick={onClose}>About</Link>
                </div>
                <div>
                    <Link to="/Services" onClick={onClose}>Services</Link>
                </div>
                <div>
                    <Link to="/Contact" onClick={onClose}>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu