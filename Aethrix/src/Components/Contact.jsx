import React, { useRef } from 'react';
import {
    FaWhatsapp,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaMapMarkerAlt
} from 'react-icons/fa';
import emailjs from 'emailjs-com';
import '../App.css';

import Video from '../Assets/Video2.mp4';

const ccc = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_4edrowh',
            'template_id7ylne',
            form.current,
            'cZzeskozkZ0v_R_gT'
        ).then(
            (result) => {
                alert('Message Sent Successfully!');
                console.log(result.text);
                e.target.reset();
            },
            (error) => {
                alert('Failed to send message, please try again.');
                console.log(error.text);
            }
        );
    };

    return (
        <div className="contact-container">
            <h1>CONTACT</h1>
            <p>
                Welcome to Aethrix Software — your trusted partner for high-quality digital solutions. We build modern, scalable, and
                user-friendly software tailored to your business needs. Our experienced team delivers reliable and secure systems that
                help startups, SMEs, and enterprises streamline operations and accelerate growth.
            </p>

            <div className="contact-video">
                <video autoPlay loop muted>
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <h2>
                PARTNER WITH SRI LANKA'S LEADING <br /> SOFTWARE & DIGITAL SOLUTIONS PROVIDER
            </h2>
            <p>
                <span className="highlight-text">
                    Ready to collaborate with a results-driven software and web solutions company?
                </span>
                <br />
                Contact us today to discuss your project and discover how we deliver impactful,
                measurable results. At Aethrix, we focus on innovative, data-driven strategies and
                transparent reporting to ensure a clear return on your investment.
            </p>

            <div className="heading-info">
                <h2>SEND US YOUR <span className="highlight">REQUIREMENT</span></h2>
                <p>
                    Please send us your requirements, and we will respond with a comprehensive quotation
                    covering all the necessary details.
                </p>
            </div>

            <div class="contact-section">
                <div class="form-container">
                    <form ref={form} onSubmit={sendEmail} class="contact-form">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <input type="text" name="phone" placeholder="Your Phone Number" required />
                        <input type="text" name="title" placeholder="Subject" required />
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>

                <div className="contact-info">
                    <div className="contact-item">
                        <div className="contact-icon-circle">
                            <FaPhoneAlt className="contact-icon" />
                        </div>
                        <div>
                            <p className="help-text">Need Help ?</p>
                            <p className="phone-number">(011) 2 708 591 - (Hotline)</p>
                            <p className="phone-number">(+94) 70 346 4165 - (Mobile)</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="whatsapp-icon-circle">
                            <FaWhatsapp className="contact-icon" size={23} />
                        </div>
                        <div>
                            <p className="help-text">Need Help ?</p>
                            <p className="phone-number">(+94) 70 346 4165 - (Mobile)</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="email-icon-circle">
                            <FaEnvelope className="contact-icon" />
                        </div>
                        <div>
                            <p className="email">aethrixsoftware@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="map-icon-circle">
                            <FaMapMarkerAlt className="contact-icon" />
                        </div>
                        <div>
                            <p>179, 10 Vijaya Kumarathunga Mawatha, Colombo 00500</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="clock-icon-circle">
                            <FaClock className="contact-icon" />
                        </div>
                        <div>
                            <p>Monday - Friday | 9:00 AM - 5:30 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ccc;