import React, { useState, useEffect } from 'react';
import '../App.css';

const CeylexGlob = import.meta.glob('../Assets/4X4/*.{png,jpg,jpeg,svg,webp}', { eager: false });
const ArtDecorGlob = import.meta.glob('../Assets/Dermaluxe/*.{png,jpg,jpeg,svg,webp}', { eager: false });
const BadmintonGlob = import.meta.glob('../Assets/ABC/*.{png,jpg,jpeg,svg,webp}', { eager: false });

const importAllImages = (globResult) => {
    let importPromises = [];
    for (const path in globResult) {
        importPromises.push(globResult[path]().then(module => module.default));
    }
    return Promise.all(importPromises);
};


const ProjectsModal = ({ isOpen, onClose, images }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                <h2 className="modal-heading">Project Screenshots</h2>
                <div className="project-gallery">
                    {images && images.map((imgSrc, index) => (
                        <div key={index} className="project-item">
                            <img
                                src={imgSrc}
                                alt={`Project Screenshot ${index + 1}`}
                                className="project-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Portfolio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProjectImages, setSelectedProjectImages] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadPortfolioData = async () => {
            try {
                const [ceylex, artdecor, badminton] = await Promise.all([
                    importAllImages(CeylexGlob),
                    importAllImages(ArtDecorGlob),
                    importAllImages(BadmintonGlob),
                ]);

                const structuredData = [
                    {
                        id: 'ceylex',
                        name: "4X4 AutoMotive Service",
                        thumbnail: ceylex[0],
                        galleryImages: ceylex
                    },
                    {
                        id: 'artdecor',
                        name: "Dermaluxe Skincare ",
                        thumbnail: artdecor[0],
                        galleryImages: artdecor
                    },
                    {
                        id: 'badminton',
                        name: "ABC Restaurant",
                        thumbnail: badminton[0],
                        galleryImages: badminton
                    },
                ];

                setProjectData(structuredData);
            } catch (error) {
                console.error("Failed to load portfolio images:", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadPortfolioData();
    }, []);

    const handleProjectClick = (images) => {
        setSelectedProjectImages(images);
        setIsModalOpen(true);
    };

    if (isLoading) {
        return (
            <div className="portfolio-section">
                Loading Portfolio Assets...
            </div>
        );
    }

    return (
        <div className="portfolio-section">
            <h1 className="portfolio-heading">PORTFOLIO</h1>
            <p className="portfolio-description">
                Discover the results we’ve achieved for our clients at Aethrix Software. Explore our
                portfolio showcasing innovative web design and digital marketing projects that have driven real business growth and
                consistently exceeded expectations. By partnering with Aethrix Software, our clients have experienced increased brand
                visibility, enhanced customer engagement, and stronger digital performance across all platforms. We take pride in
                delivering solutions that not only look exceptional but perform exceptionally helping brands scale with confidence
                in the digital world.
            </p>

            <div className="portfolio-display-area">
                <h2 className="secondary-heading">WHAT WE'VE BUILT</h2>
                <p className="secondary-paragraph">building businesses, one pixel at a time</p>

                <div className="portfolio-main-grid">
                    {projectData.map((project) => (
                        <div
                            key={project.id}
                            className="portfolio-project-tile"
                            onClick={() => handleProjectClick(project.galleryImages)}
                        >
                            <img
                                src={project.thumbnail}
                                alt={project.name}
                                className="project-thumbnail-image"
                            />
                            <div className="tile-overlay">
                                <h3>{project.name}</h3>
                                <p>Click to view screenshots</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="still-counting-container">
                    <div className="still-counting">
                        <span className="counting-text">STILL COUNTING</span>
                        <div className="counting-dots">
                            <span className="dot dot-1">.</span>
                            <span className="dot dot-2">.</span>
                            <span className="dot dot-3">.</span>
                        </div>
                    </div>
                </div>

            </div>

            <ProjectsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                images={selectedProjectImages}
            />
        </div>
    );
}

export default Portfolio;