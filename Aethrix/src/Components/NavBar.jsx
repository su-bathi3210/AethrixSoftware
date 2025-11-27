import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

import Logo from '../Assets/AethrixLogo.png';

const NavBar = ({ logoSrc, logoAlt = 'Aethrix Logo' }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };

    return (
        <header className="navbar-container">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={Logo} alt="Aethrix Logo" className="site-logo" />
                </Link>
            </div>

            <nav className="navbar-menu-btn" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <>
                        <span className="navbar-menu-text">Close</span>
                        <span className="navbar-close-icon">×</span>
                    </>
                ) : (
                    <>
                        <span className="navbar-menu-textM">Menu</span>
                        <div className="navbar-hamburger-icon">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </>
                )}
            </nav>

            <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                <ul className="menu-links">
                    <li><a href="/About" onClick={toggleMenu}>ABOUT</a></li>
                    <li><a href="/Portfolio" onClick={toggleMenu}>PORTFOLIO</a></li>
                    <li><a href="/Service" onClick={toggleMenu}>SERVICES</a></li>
                    <li><a href="/Contact" onClick={toggleMenu}>CONTACT</a></li>
                </ul>
                <a href="#quote" className="menu-quote-btn" onClick={toggleMenu}>
                    Get a quote
                </a>
            </div>
        </header>
    );
};

export default NavBar;