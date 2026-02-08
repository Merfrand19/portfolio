import React from 'react';
import './ImageReviews.css';
import review1 from '../assets/review_barbara.png';
import review2 from '../assets/review_fabrice.png';
import review3 from '../assets/review_grfrance.png';
import review4 from '../assets/review_guinee.png';
import review5 from '../assets/review_fleur.png';

const reviews = [
    { id: 1, image: review1, alt: "Avis BarbaraJesuisla" },
    { id: 2, image: review2, alt: "Avis FabriceSAIB" },
    { id: 3, image: review3, alt: "Avis GRFrance" },
    { id: 4, image: review4, alt: "Avis GuineeDiallo" },
    { id: 5, image: review5, alt: "Avis Fleurdenature" },
];

const ImageReviews = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    return (
        <section className="image-reviews-section">
            <h2 className="section-title">Témoignages</h2>
            <p className="section-subtitle">Ils m'ont fait confiance</p>

            <div className="image-reviews-grid">
                {reviews.map(review => (
                    <div
                        key={review.id}
                        className="image-review-card"
                        onClick={() => setSelectedImage(review)}
                    >
                        <img src={review.image} alt={review.alt} className="review-image" />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
                        <img src={selectedImage.image} alt={selectedImage.alt} className="lightbox-image" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default ImageReviews;
