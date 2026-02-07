import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
    return (
        <div className="project-card" onClick={onClick}>
            <div className="card-header">
                <div className="window-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                </div>
                <div className="file-name">{project.title.substring(0, 20).replace(/\s+/g, '_')}.json</div>
            </div>

            <div className="card-content">
                <div className="image-container">
                    <img src={project.imageUrl} alt={project.title} className="project-image" />
                </div>

                <div className="card-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">
                        {project.description.length > 160
                            ? `${project.description.substring(0, 160)}...`
                            : project.description}
                    </p>

                    <div className="tags">
                        {project.tags.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>

                    <button className="view-more-btn">
                        Voir plus <span className="arrow">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
