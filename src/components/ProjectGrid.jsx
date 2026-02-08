import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';
import './ProjectGrid.css';

const projects = [
    {
        id: 1,
        title: "Refonte du site consultationvoyance.com",
        description: "Refonte complète du site consultationvoyance.com avec un objectif clair : moderniser l'interface tout en préservant intégralement le référencement existant. Le projet a été mené à partir d'une copie conforme du site en production afin de garantir une continuité SEO totale. Les contenus textuels, la structure des pages, les URLs, ainsi que l'ensemble des données SEO (méta-titres, méta-descriptions, balises, maillage interne) ont été strictement conservés. La refonte a porté exclusivement sur le design visuel, l'ergonomie, l'adaptation responsive (desktop, tablette, mobile), sans modification de la structure SEO existante.",
        tags: ["WordPress", "Site vitrine", "SEO"],
        imageUrl: "https://thumbor.comeup.com/FgR6QL7-dMVMxwPcVnnUQlrz0IE=/filters:no_upscale()/uploads/media/picture/5f33e8a6-9ced-47c7-b87d-00b2e72389c5/tmp/projects/5f33e8a6-9ced-47c7-b87d-00b2e72389c5/consulationvoyance-6948ff4d0eeac.png",
        link: "https://consultationvoyance.com"
    },
    {
        id: 2,
        title: "BikeSellier – Application Shopify de personnalisation",
        description: "BikeSellier est une application Shopify sur-mesure conçue pour offrir aux clients une expérience de personnalisation visuelle complète pour la décoration de leur moto. À travers une interface fluide et intuitive, les utilisateurs peuvent configurer chaque detail esthétique : couleurs, motifs, matière, finitions, etc, tout en ajoutant des accessoires optionnels (housse de selle, mousse de guidon...) pour enrichir leur personnalisation — et augmenter la valeur du panier grâce à une stratégie d'upsell intégrée. Fonctionnalités : Personnalisation en temps réel, aperçu dynamique synchronisé, intégration native Shopify.",
        tags: ["Shopify", "React", "Application", "GraphQL"],
        videoUrl: "https://www.youtube.com/embed/dt2OyvG3v50",
        imageUrl: "https://img.youtube.com/vi/dt2OyvG3v50/maxresdefault.jpg",
        link: "https://bikesellier.fr/products/kit-deco-bks-50cc-semi-perso"
    },
    {
        id: 3,
        title: "Refonte de la page produit de ZayanaOil",
        description: "Refonte complète de la page produit pour ZayanaOil, une marque de soins naturels. L’objectif : améliorer l’ergonomie, moderniser le design et optimiser la conversion. Résultat : une interface épurée, responsive, mettant en valeur les bénéfices produits, les avis clients et les appels à l'action.",
        tags: ["Shopify", "Liquid", "UX/UI"],
        imageUrl: "https://thumbor.comeup.com/NeAim90w23-8OI3gyCJFLELs198=/filters:no_upscale()/uploads/media/picture/5f33e8a6-9ced-47c7-b87d-00b2e72389c5/tmp/projects/5f33e8a6-9ced-47c7-b87d-00b2e72389c5/3-devices-black-68624af1e6164.png",
        link: "https://zayana-oil.fr/products/huile-pepins-figue-barbarie"
    },
    {
        id: 4,
        title: "Migration & refonte du site vhenus.com",
        description: "Refonte complète du site avec migration vers PrestaShop 8.2 et changement de nom de domaine (anciennement maisoncoquine.com). Le projet inclut également la mise en place d'un connecteur sur mesure pour l'intégration automatisée de plus de 5 000 références produits, ainsi qu'une interface modernisée pensée pour optimiser l'expérience utilisateur.",
        tags: ["PrestaShop", "Migration", "Connecteur API", "Refonte"],
        imageUrl: "https://thumbor.comeup.com/ysbnmt9clnvKTao0nhQ7IpY_14o=/filters:no_upscale()/uploads/media/picture/5f33e8a6-9ced-47c7-b87d-00b2e72389c5/tmp/projects/5f33e8a6-9ced-47c7-b87d-00b2e72389c5/final-686255d9c2d66.png",
        link: "http://vhenus.com/"
    },
    {
        id: 5,
        title: "Refonte du site PanoSolaire",
        description: "Refonte complète du site e-commerce Panosolaire.fr, incluant l’optimisation de l’expérience utilisateur, la modernisation de l’interface. Le projet a consisté à repenser l’architecture, le design et la navigation pour améliorer les performances et la conversion.",
        tags: ["PrestaShop", "E-commerce", "UX/UI"],
        imageUrl: "https://thumbor.comeup.com/7FmrbVC-Qa_agiz61xyE944UFV4=/filters:no_upscale()/uploads/media/picture/5f33e8a6-9ced-47c7-b87d-00b2e72389c5/tmp/projects/5f33e8a6-9ced-47c7-b87d-00b2e72389c5/refontepanosolaire-692b0cca69499.png",
        link: "https://panosolaire.fr/"
    },
    {
        id: 6,
        title: "Formulaire de simulation – Éligibilité aux aides",
        description: "Codage d'un formulaire interactif type Typeform, destiné à simuler l'éligibilité à des aides, avec une expérience fluide et orientée conversion. Les données collectées sont automatiquement envoyées vers un Google Sheet, facilitant la gestion des leads. Ce formulaire est 100 % réutilisable et peut être intégré sur toutes les plateformes web (System.io, Wordpress, Framer, etc).",
        tags: ["HTML", "CSS", "JavaScript", "Automatisation", "Google Sheets API"],
        imageUrl: "https://thumbor.comeup.com/FzhBadmWOgf-jBeyFrWlm5aqiVk=/filters:no_upscale()/uploads/media/picture/5f33e8a6-9ced-47c7-b87d-00b2e72389c5/tmp/projects/5f33e8a6-9ced-47c7-b87d-00b2e72389c5/form-nicolas-68626712beb47.png",
        link: "https://nicolas-form.vercel.app/"
    },
    {
        id: 7,
        title: "Ajout de produits via API",
        description: "Intégration massive de près de 5 000 références produits sur la plateforme e-commerce Woomban à partir du catalogue fournisseur BDroppy. Le projet a nécessité l'exploitation de l'API REST du fournisseur via Postman pour la phase de test et de structuration des données, suivie du développement d'un script Python sur-mesure pour automatiser l'importation et la mise à jour des produits vers PrestaShop.",
        tags: ["PrestaShop", "Python", "API REST", "Postman", "Automatisation"],
        imageUrl: "/bdroppy.png",
        link: "#"
    },
    {
        id: 8,
        title: "Snake Game – Développement C#",
        description: "Développement d'une version classique du jeu Snake réalisée en C#. Le projet met l'accent sur la logique de programmation, la gestion des collisions et la manipulation des structures de données pour le mouvement fluide du serpent. Ce projet illustre la maîtrise des concepts fondamentaux de la programmation orientée objet.",
        tags: ["C#", "Algorithmique", "Jeu Vidéo"],
        imageUrl: "/snake.jpeg",
        link: "https://github.com/Merfrand19/Snake"
    },
    {
        id: 9,
        title: "Courtiz – Formulaire de simulation de crédit",
        description: "Développement d'un tunnel de conversion dynamique par étapes pour le courtage en crédit. Le formulaire utilise une logique conditionnelle pour adapter les questions en temps réel selon le profil de l'utilisateur (rachat de crédit, prêt immobilier, etc.). L'interface intègre des composants interactifs fluides pour optimiser l'expérience utilisateur et maximiser le taux de complétion.",
        tags: ["HTML", "CSS", "JS", "Swiper"],
        imageUrl: "/courtiz.png",
        link: "https://courtiz-form.vercel.app/"
    }
];

const ProjectGrid = ({ onProjectClick }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ["All", "Shopify", "PrestaShop", "WordPress", "React", "JavaScript", "HTML", "CSS", "C#"];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.tags.includes(activeFilter));

    return (
        <section className="project-grid-section" id="library">
            <div className="grid-header">
                <div className="grid-header-title">
                    <h2 className="section-title">Mes réalisations</h2>
                    <p className="section-subtitle">Quelques projets sur lesquels j'ai travaillé</p>
                </div>

                <div className="filters">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} onClick={() => onProjectClick(project)} />
                ))}
            </div>
        </section>
    );
};

export default ProjectGrid;
