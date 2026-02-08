import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-container">
                <h1 className="contact-title">Contactez-moi</h1>
                <p className="contact-subtitle">
                    Je suis joignable aux contacts ci-dessous
                </p>

                <div className="contact-card">
                    <div className="contact-item">
                        <span className="contact-label">Email</span>
                        <a href="mailto:gratiaslokonon19@gmail.com" className="contact-link">
                            gratiaslokonon19@gmail.com
                        </a>
                    </div>

                    <div className="contact-item">
                        <span className="contact-label">Téléphone</span>
                        <a href="tel:+33744117865" className="contact-link">
                            +33 7 44 11 78 65
                        </a>
                    </div>

                    <div className="contact-item">
                        <span className="contact-label">LinkedIn</span>
                        <a
                            href="https://www.linkedin.com/in/d%C3%A9o-gratias-lokonon-705976284/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            Voir mon profil
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
