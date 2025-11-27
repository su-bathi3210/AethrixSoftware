import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-content-container">
                <h2 className="about-heading">About Aethrix Software</h2>
                <p className="about-text">
                    At Aethrix Software – Shaping Digital Futures, we are committed to redefining what’s possible in the digital world.
                    Even within a short span of time, we’ve built a strong reputation for reliability, creativity, and forward-thinking
                    solutions.

                    Our team continues to push boundaries with modern web design, high-performance e-commerce platforms, strategic
                    digital marketing, and next-generation AI driven solutions that empower businesses to grow, innovate, and stay
                    ahead in a fast-changing digital landscape.

                    With a vision rooted in quality and advancement, Aethrix Software is not just developing digital products we’re
                    building the future of digital experiences for businesses in Sri Lanka and beyond.
                </p>
            </div>


            <div className="culture-values-section">
                <h2 className="section-title">Culture & Core Values</h2>
                <div className="content-grid">

                    <div className="culture-column">
                        <h3 className="column-heading">Our Culture</h3>
                        <p className="culture-description">
                            At Aethrix Systems, we've cultivated a a culture that balances innovation
                            with reliability, technical excellence with business pragmatism, and
                            individual growth with collective success. Our team environment
                            encourages continuous learning, creative problem-solving, and
                            collaborative approach to client challenges.
                        </p>
                        <ul className="culture-points">
                            <li className="point blue">
                                <strong>Continuous Learning</strong>
                                <p>We invest in our team’s growth through training, certifications, and conference attendance</p>
                            </li>
                            <li className="point green">
                                <strong>Innovation Focus</strong>
                                <p>20% of our time is dedicated to exploring emerging technologies and improving our methodologies</p>
                            </li>
                            <li className="point purple">
                                <strong>Work-Life Integration</strong>
                                <p>Flexible work arrangements and mental health support ensure sustainable high performance</p>
                            </li>
                        </ul>
                    </div>

                    <div className="values-column">
                        <h3 className="column-heading">Core Values</h3>
                        <div className="value-card blue-border">
                            <h4 className="value-title blue-text">Excellence</h4>
                            <p className="value-description">
                                We pursue excellence in everything we do, from technical implementation
                                to client communication. Our commitment to quality has earned us a 98%
                                client satisfaction rate and industry recognition.
                            </p>
                        </div>
                        <div className="value-card green-border">
                            <h4 className="value-title green-text">Integrity</h4>
                            <p className="value-description">
                                Transparency, honesty, and ethical business practices guide all our
                                relationships. We provide realistic timelines, honest assessments, and
                                maintain confidentiality at all times.
                            </p>
                        </div>
                        <div className="value-card purple-border">
                            <h4 className="value-title purple-text">Partnership</h4>
                            <p className="value-description">
                                We view ourselves as true partners in our clients’ success, not just
                                vendors. This partnership mindset drives us to understand deeply and
                                deliver lasting value.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="transform -container">
                <div className="transform-box">
                    <h2>Ready to Transform Your Business?</h2>
                    <p>
                        Join hundreds of successful companies that have streamlined their operations,
                        reduced costs, and accelerated growth with our technology solutions.
                    </p>

                    <div className="transform-buttons">
                        <Link to="/Contact"><button className="transform-primary">Get Free Consultation →</button></Link>
                        <button className="transform-secondary">View Success Stories</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About