import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

import {
    FaBolt,
    FaAward,
    FaChartLine,
    FaShieldAlt,
    FaUsersCog,
    FaClock
} from "react-icons/fa";

import Video from '../Assets/Video3.mp4';

const Section = () => {
    return (
        <div className="section-container">
            <div className="section-heading">

                <div className="section-video">
                    <video autoPlay loop muted>
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className="section-content">
                    <h1>Shaping Digital Futures</h1>
                    <p>
                        Experience the difference. At Aethrix, a leading web design company in Sri Lanka,
                        we craft bespoke digital solutions that elevate your brand and drive tangible results.
                        Your vision, our expertise. Let’s build something extraordinary together.
                    </p>
                    <div className="section-buttons">
                        <Link to="/Contact"><button className="btn-primary">Start Your Transformation ➝</button></Link>
                        <Link to="/Service"><button className="btn-secondary">Explore Services</button></Link>
                    </div>
                </div>
            </div>


            <div className="technology-container">
                <div className="text-content-wrapper">
                    <h2>Comprehensive Technology Solutions</h2>
                    <p>
                        At Aethrix Systems, we understand that every business has unique technology challenges. Our comprehensive suite of services is designed to address the full spectrum of your digital infrastructure needs, from initial consultation and strategy development to implementation, maintenance, and ongoing optimization.
                    </p>
                    <p>
                        Our team of certified professionals brings decades of combined experience in enterprise technology solutions. We work closely with your team to understand your business objectives, assess your current technology landscape, and develop customized solutions that drive measurable results.
                    </p> <br /><br />

                    <h3>Our Approach Goes Beyond Simple Technology Implementation</h3>
                    <p>
                        We become your strategic technology partner, helping you navigate the complexities of digital transformation while ensuring your systems remain secure, efficient, and scalable as your business grows.
                    </p>
                </div>
            </div>


            <div className="why-choose-container">
                <h2 className="why-title">Why Choose Aethrix Systems?</h2>
                <p className="why-subtitle">
                    We combine technical excellence with business insight to deliver solutions that
                    drive real results for your organization.
                </p>

                <div className="why-grid">

                    <div className="why-item">
                        <div className="icon-circle" style={{ backgroundColor: "#e42a2aff" }}>
                            <FaBolt className="why-icon" style={{ color: "#fff" }} />
                        </div>
                        <h3>Agile & Fast</h3>
                        <h4>3x faster delivery</h4>
                        <p>Rapid deployment with iterative development</p>
                    </div>

                    <div className="why-item">
                        <div className="icon-circle" style={{ backgroundColor: "#2a77f2ff" }}>
                            <FaAward className="why-icon" style={{ color: "#fff" }} />
                        </div>
                        <h3>Proven Results</h3>
                        <h4>99% success rate</h4>
                        <p>Strong track record across industries.</p>
                    </div>

                    <div className="why-item">
                        <div className="icon-circle" style={{ backgroundColor: "#e4579eff" }}>
                            <FaChartLine className="why-icon" style={{ color: "#fff" }} />
                        </div>
                        <h3>Built for Growth</h3>
                        <h4>500% scalability</h4>
                        <p>Solutions that scale with your business.</p>
                    </div>

                    <div className="why-item">
                        <div className="icon-circle" style={{ backgroundColor: "#8343c3ff" }}>
                            <FaShieldAlt className="why-icon" style={{ color: "#fff" }} />
                        </div>
                        <h3>Enterprise Security</h3>
                        <h4>SOC 2 certified</h4>
                        <p>Bank-level protection and compliance.</p>
                    </div>

                    <div className="why-item">
                        <div className="icon-circle" style={{ backgroundColor: "#ebb145ff" }}>
                            <FaUsersCog className="why-icon" style={{ color: "#fff" }} />
                        </div>
                        <h3>Expert Team</h3>
                        <h4>50+ certifications</h4>
                        <p>Professionals with deep technical expertise.</p>
                    </div>

                    <div className="why-item">
                        <div className="icon-circle" style={{ backgroundColor: "#34e8c4ff" }}>
                            <FaClock className="why-icon" style={{ color: "#fff" }} />
                        </div>
                        <h3>24/7 Support</h3>
                        <h4>&lt; 1hr response time</h4>
                        <p>Round-the-clock monitoring and support.</p>
                    </div>
                </div>
            </div>


            <div className="cta-container">
                <div className="cta-box">
                    <h2>Ready to Transform Your Business?</h2>
                    <p>
                        Join hundreds of successful companies that have streamlined their operations,
                        reduced costs, and accelerated growth with our technology solutions.
                    </p>

                    <div className="cta-buttons">
                        <Link to="/Contact"><button className="cta-primary">Get Free Consultation →</button></Link>
                        <button className="cta-secondary">View Success Stories</button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Section;