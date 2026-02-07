import React from 'react';
import './Hero.css';
import heroPortrait from '../assets/ruben_photo.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Déo-Gratias <br />
                    <span className="text-blue">LOKONON</span>, <br />
                    développeur web
                </h1>

                <p className="hero-description">
                    Freelance pendant 2 ans, j'ai accompagné des e-commercants sur les tâches techniques de leur site web.
                    Je suis actuellement en 3e année à <span className="highlight">Polytech Nantes</span> et je suis à la recherche d'un stage ou CDI de 2 mois à partir du 15 Juin.
                </p>

                <div className="hero-actions">
                    <a href="#library" className="btn btn-primary">Découvrir mes réalisations</a>
                    <a href="https://urlr.me/zrwY8p" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Mon CV</a>
                </div>

                <div className="status-bar">
                    <span>DISPONIBLE DÈS LE 15 JUIN</span>
                </div>
            </div>

            <div className="hero-image-container">
                <div className="image-wrapper">
                    <img src={heroPortrait} alt="Déo-Gratias LOKONON" className="hero-image" />
                    <div className="image-overlay">
                        <div className="stat-box">
                            <span>Expérience</span>
                            <h3>2 ANS</h3>
                        </div>
                        <div className="stat-box bottom-right">
                            <span>Formation</span>
                            <h3>POLYTECH</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
