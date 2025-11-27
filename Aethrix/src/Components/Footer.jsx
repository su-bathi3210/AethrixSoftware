import React from 'react';
import '../App.css';

import fb from '../Assets/fb.png';
import ins from '../Assets/instagram.png';
import yelp from '../Assets/yelp.png';
import whs from '../Assets/whatsapp.png';
import google from '../Assets/google.png';


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p className="footer-copyright">
                    © 2025 All Right Reserved | <a href="#" className="privacy-link">Obviously Design By Out Team</a>
                </p>
                <div className="social-icons">
                    <a href="https://www.instagram.com/onenine.ae/" target="_blank" rel="noopener noreferrer">
                        <img src={fb} alt="Instagram" className="social-icon-img" />
                    </a>
                    <a href="https://x.com/onenineae" target="_blank" rel="noopener noreferrer">
                        <img src={ins} alt="X (formerly Twitter)" className="social-icon-img" />
                    </a>
                    <a href="https://www.facebook.com/OneNineae/" target="_blank" rel="noopener noreferrer">
                        <img src={yelp} alt="Facebook" className="social-icon-img" />
                    </a>
                    <a href="https://www.pinterest.com/onenineae/" target="_blank" rel="noopener noreferrer">
                        <img src={whs} alt="Pinterest" className="social-icon-img" />
                    </a>
                    <a href="https://www.pinterest.com/onenineae/" target="_blank" rel="noopener noreferrer">
                        <img src={google} alt="Pinterest" className="social-icon-img" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;