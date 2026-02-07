import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <Link to="/" className="fancy-logo">DEO-GRATIAS <br /> LOKONON   </Link>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h4>NAVIGATION</h4>
                        <Link to="/">ACCUEIL</Link>
                        <a href="/#library">PROJETS</a>
                        <Link to="/contact">CONTACT</Link>
                    </div>

                    <div className="link-group">
                        <h4>CONTACT</h4>
                        <a href="mailto:gratiaslokonon19@gmail.com">gratiaslokonon19@gmail.com</a>
                        <a href="tel:+33744117865">+33 7 44 11 78 65</a>
                        <a
                            href="https://wa.me/33744117865"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-btn"
                        >
                            <span className="whatsapp-icon">💬</span> Message WhatsApp
                        </a>
                    </div>

                    <div className="link-group">
                        <h4>RÉSEAUX</h4>
                        <a href="https://www.linkedin.com/in/d%C3%A9o-gratias-lokonon-705976284/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/Merfrand19" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Dev par Déo-Gratias LOKONON</p>
            </div>
        </footer>
    );
};

export default Footer;
