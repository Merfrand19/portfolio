import React, { useEffect } from 'react';
import './Popup.css';

const Popup = ({ project, onClose }) => {
    useEffect(() => {
        // Prevent scrolling when popup is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!project) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>

                <div className="popup-header">
                    <h2>{project.title}</h2>
                    <div className="popup-tags">
                        {project.tags.map(tag => (
                            <span key={tag} className="popup-tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="popup-grid">
                    <div className="popup-left">
                        {project.videoUrl ? (
                            <div className="video-container" style={{ height: '100%', minHeight: '300px', background: '#000', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={project.videoUrl}
                                    title={project.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ) : (
                            <div className="image-container-popup" style={{ height: '100%', borderRadius: '12px', overflow: 'hidden' }}>
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        )}
                    </div>

                    <div className="popup-right">
                        <div className="info-section">
                            <h3>Description</h3>
                            <p>{project.description}</p>
                        </div>

                        <div className="popup-actions">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Voir le projet</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
