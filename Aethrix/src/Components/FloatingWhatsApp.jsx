import React from 'react';
import '../App.css';

import whs from '../Assets/whatsapp.png';

const FloatingWhatsApp = () => {
    const phoneNumber = "94703464165"; 
    const prefilledMessage = "I would like to get more information about your services.";
    const encodedMessage = encodeURIComponent(prefilledMessage);

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <div className="whatsapp-float-container">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" >
                <img src={whs} alt="WhatsApp Chat" className="whatsapp-float-icon" />
            </a>
        </div>
    );
};

export default FloatingWhatsApp;