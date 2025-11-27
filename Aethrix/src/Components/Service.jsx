import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import '../App.css';

const servicesData = [
    {
        id: 'webDev',
        title: 'Web Development',
        heading: 'Crafting High-Performance Websites',
        description: `We specialize in building robust, scalable, and secure websites using the latest technologies. From simple static sites to complex corporate platforms, our Web Development service ensures your digital presence is technically superior and optimized for speed and stability. We focus on clean code, performance, and cross-browser compatibility to deliver an excellent user experience.`,
    },
    {
        id: 'webAppDev',
        title: 'Web Application Development',
        heading: 'Bespoke, Powerful Web Applications',
        description: `Our expertise lies in developing custom web applications designed to streamline your business processes. Whether you need an HR management system, inventory tracking, or a customer portal, we deliver user-friendly, feature-rich, and scalable solutions that automate tasks, improve efficiency, and provide a direct contribution to your bottom line.`,
    },
    {
        id: 'webDesign',
        title: 'Web Design',
        heading: 'Game-Changing and User-Centric Design',
        description: `First impressions matter. Our Web Design service focuses on creating visually stunning and highly engaging user interfaces (UI) and user experiences (UX). We combine aesthetic appeal with functionality, ensuring your site is fully mobile-responsive, easy to navigate, and meets international design standards, perfectly aligning with your brand identity.`,
    },
    {
        id: 'aiWebDev',
        title: 'AI-based Web Development',
        heading: 'Next-Generation AI-Driven Solutions',
        description: `Embrace the future with AI integration. We develop websites and applications featuring custom AI solutions, such as intelligent chatbots, predictive analytics, and personalized content generation. This service elevates your site's capabilities, offering personalized user journeys and sophisticated data-driven insights.`,
    },
];

const Service = () => {
    const [activeService, setActiveService] = useState(servicesData[0].id);

    const currentServiceContent = servicesData.find(service => service.id === activeService);

    return (
        <section className="service-section">

            <div className="service-content-container">
                <h2 className="service-heading">Our Advanced Digital Solutions</h2>
                <p className="service-text">
                    At Aethrix Software, we craft modern, intelligent, and high-performance digital solutions tailored to each
                    client’s unique vision. Our services span from creative logo design and visually captivating web design to cutting-edge
                    AI powered web development and robust web application engineering. Every project we build is driven by innovation,
                    precision, and a commitment to delivering exceptional digital experiences. With a dedicated team of experts,
                    we ensure reliable, scalable, and future ready solutions that help brands grow in today’s fast evolving digital world.
                </p>
            </div>


            <div className="services-tabs-container">
                <h2 className="services-tabs-main-title">Our Comprehensive Suite of Digital Services</h2>
                <div className="services-tabs-content">
                    <div className="services-tabs-list">
                        {servicesData.map(service => (
                            <div
                                key={service.id}
                                className={`service-tab-item ${activeService === service.id ? 'active' : ''}`}
                                onClick={() => setActiveService(service.id)}
                            >
                                <span className="tab-title">{service.title}</span>
                                <span className="tab-arrow">→</span>
                            </div>
                        ))}
                    </div>

                    <div className="services-tabs-description">
                        <AnimatePresence mode="wait">
                            {currentServiceContent && (
                                <motion.div
                                    key={currentServiceContent.id}
                                    className="description-inner"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <h3 className="description-heading">{currentServiceContent.heading}</h3>
                                    <p className="description-text">
                                        {currentServiceContent.description}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>


            <div className="packages-section-minimal">
                <h2 className="packages-title">Explore Our Packages</h2>
                <p className="packages-subtitle">Send your requirements, and we'll send you a quotation tailored to your needs.</p>

                <div className="packages-list-grid">
                    <div className="minimal-package-item">
                        <h4 className="package-heading">WEBSITE DEVELOPMENT PACKAGE</h4>
                        <ul className="package-features">
                            <li><span className="feature-marker">*</span> Fully Mobile Responsive Design</li>
                            <li><span className="feature-marker">*</span> Cost Varies by Number of Pages</li>
                            <li><span className="feature-marker">*</span> 2 Free Email Accounts & Social Media Facility</li>
                            <li><span className="feature-marker">*</span> Free SSL Certificate for Security</li>
                            <li><span className="feature-marker">*</span> Professional UI/UX with Modern Animations</li>
                            <li><span className="feature-marker">*</span> SEO-Friendly Structure & Meta Optimization</li>
                            <li><span className="feature-marker">*</span> Contact Forms with Auto Email Notifications</li>
                            <li><span className="feature-marker">*</span> High-Speed Performance Optimization</li>
                            <li><span className="feature-marker">*</span> Social Media Sharing Integration</li>
                            <li><span className="feature-marker">*</span> Free Maintenance for the First Month</li>
                        </ul>
                    </div>

                    <div className="minimal-package-item">
                        <h4 className="package-heading">WEB APPLICATION PACKAGE</h4>
                        <ul className="package-features">
                            <li><span className="feature-marker">*</span> Inventory/Reservation Systems</li>
                            <li><span className="feature-marker">*</span> HR Management Systems</li>
                            <li><span className="feature-marker">*</span> User-friendly and Attractive Layout</li>
                            <li><span className="feature-marker">*</span> Full Backend and Database Integration</li>
                            <li><span className="feature-marker">*</span> Admin Dashboard with Analytics</li>
                            <li><span className="feature-marker">*</span> Role-based User Access Control</li>
                            <li><span className="feature-marker">*</span> Secure Authentication (JWT/OAuth)</li>
                            <li><span className="feature-marker">*</span> Audit Logs & Activity Tracking</li>
                            <li><span className="feature-marker">*</span> Automated Email / Notification System</li>
                            <li><span className="feature-marker">*</span> Cloud Deployment & Performance Optimization</li>
                        </ul>
                    </div>

                    <div className="minimal-package-item">
                        <h4 className="package-heading">WEB DESIGN PACKAGE</h4>
                        <ul className="package-features">
                            <li><span className="feature-marker">*</span> Portfolio and Corporate Website Designs</li>
                            <li><span className="feature-marker">*</span> User-friendly and Attractive Layouts</li>
                            <li><span className="feature-marker">*</span> Brand-aligned Mockups and Prototypes</li>
                            <li><span className="feature-marker">*</span> Seamless UX/UI Implementation</li>
                            <li><span className="feature-marker">*</span> Custom Color Palettes & Typography Systems</li>
                            <li><span className="feature-marker">*</span> Interactive Animations & Micro-Interactions</li>
                            <li><span className="feature-marker">*</span> High-Fidelity Figma Wireframes</li>
                            <li><span className="feature-marker">*</span> Mobile-First Responsive Layouts</li>
                            <li><span className="feature-marker">*</span> Conversion-Optimized Page Structures</li>
                            <li><span className="feature-marker">*</span> Image Optimization & Graphic Asset Creation</li>
                        </ul>
                    </div>

                    <div className="minimal-package-item">
                        <h4 className="package-heading">AI-BASED WEB DEVELOPMENT</h4>
                        <ul className="package-features">
                            <li><span className="feature-marker">*</span> Next-Generation AI Driven Solutions</li>
                            <li><span className="feature-marker">*</span> Custom AI Chatbot Integration</li>
                            <li><span className="feature-marker">*</span> Predictive Analytics Dashboards</li>
                            <li><span className="feature-marker">*</span> Automated Content Generation Tools</li>
                            <li><span className="feature-marker">*</span> AI-Powered Recommendation Systems</li>
                            <li><span className="feature-marker">*</span> Real-time Data Processing & Insights</li>
                            <li><span className="feature-marker">*</span> Machine Learning Model Integration (NLP, CV, ML)</li>
                            <li><span className="feature-marker">*</span> Intelligent Automation & Workflow Optimization</li>
                            <li><span className="feature-marker">*</span> Voice Search & Speech Recognition Capabilities</li>
                            <li><span className="feature-marker">*</span> Cloud-Based Scalable AI Deployment</li>
                        </ul>
                    </div>
                </div>
                <div className="quotation-callout">
                    SEND YOUR REQUIREMENTS, AND WE'LL SEND YOU A QUOTATION
                </div>
            </div>
        </section>
    )
}

export default Service;