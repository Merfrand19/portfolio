import React from 'react';
import './Reviews.css';

const reviews = [
    { id: 1, videoId: "vKwJ-U3UTwk", client: "Client 1" },
    { id: 2, videoId: "Rsu5LecUCe4", client: "Client 2" },
    { id: 3, videoId: "9I6AFYbF0rI", client: "Client 3" },
];

const Reviews = () => {
    return (
        <section className="reviews-section">
            <h2 className="section-title">Avis Clients.</h2>
            <p className="section-subtitle">Retours d'expérience de mes collaborations.</p>

            <div className="reviews-grid">
                {reviews.map(review => (
                    <div key={review.id} className="review-card">
                        <div className="video-wrapper">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${review.videoId}`}
                                title={review.client}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="review-video"
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
