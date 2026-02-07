import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/" className="fancy-logo">D</Link>
            </div>

            <nav className="nav-links">
                <Link to="/" className="nav-link">ACCUEIL</Link>
                <a href="/#library" className="nav-link">PROJETS</a>
                <Link to="/contact" className="nav-link">CONTACT</Link>
            </nav>

            <div className="header-status">
                <span className="status-dot"></span>
                <span className="status-text pulsating-text">Disponible dès le 15 Juin</span>
            </div>
        </header>
    );
};

export default Header;
