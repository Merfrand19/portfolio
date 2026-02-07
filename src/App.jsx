import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Popup from './components/Popup';
import Reviews from './components/Reviews';
import ImageReviews from './components/ImageReviews';
import Contact from './components/Contact';
import './App.css';

function Home({ onProjectClick }) {
  return (
    <>
      <Hero />
      <div id="library">
        <ProjectGrid onProjectClick={onProjectClick} />
      </div>
      <Reviews />
      <ImageReviews />
    </>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home onProjectClick={setSelectedProject} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />

      {selectedProject && (
        <Popup
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
