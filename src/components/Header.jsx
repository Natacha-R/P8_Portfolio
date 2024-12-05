// Importation de React et des composants nécessaires depuis la bibliothèque "react-router-dom" pour la navigation
import React from "react";
import { NavLink, useNavigate } from "react-router-dom"; // NavLink pour la navigation entre les pages et useNavigate pour naviguer dynamiquement

// Importation des logos pour l'affichage dans l'en-tête
import Logo from "../assets/logo.png";
import SmallLogo from "../assets/logo_mobile.png";

// Composant Header, qui représente l'en-tête global du site avec le menu de navigation
function Header() {
  // Utilisation du hook useNavigate pour permettre une navigation programmatique dans l'application
  const navigate = useNavigate();

  // Fonction qui gère le clic sur le bouton "Projets" et défile automatiquement jusqu'à la section des projets
  const handleProjectsClick = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien <a> (qui serait de recharger la page)

    // Si l'utilisateur n'est pas sur la page d'accueil ("/"), on navigue d'abord vers la page d'accueil
    if (window.location.pathname !== "/") {
      navigate("/"); // Navigue vers la page d'accueil

      // Après un court délai (100 ms), on fait défiler la page jusqu'à la section des projets
      setTimeout(() => {
        const projectsSection = document.getElementById("projects"); // Recherche la section ayant l'ID "projects"
        if (projectsSection) {
          // Si la section des projets existe
          // Défile jusqu'à cette section avec un mouvement doux
          projectsSection.scrollIntoView({
            behavior: "smooth", // Défilement doux
            block: "start", // Positionner la section en haut de la fenêtre de visualisation
          });
        }
      }, 100); // Le délai de 100ms est ajouté pour permettre à la page de se charger complètement avant le défilement
    } else {
      // Si l'utilisateur est déjà sur la page d'accueil, on défile directement jusqu'à la section des projets
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        // Si la section des projets existe
        projectsSection.scrollIntoView({
          behavior: "smooth", // Défilement doux
          block: "start", // Positionner la section en haut de la fenêtre de visualisation
        });
      }
    }
  };

  // Fonction qui gère le clic sur le bouton "Contact" et défile automatiquement jusqu'à la section de contact
  const handleContactClick = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien <a> (qui serait de recharger la page)

    // Si l'utilisateur n'est pas sur la page d'accueil ("/"), on navigue d'abord vers la page d'accueil
    if (window.location.pathname !== "/") {
      navigate("/"); // Navigue vers la page d'accueil

      // Après un court délai (100 ms), on fait défiler la page jusqu'à la section de contact
      setTimeout(() => {
        const contactSection = document.getElementById("contact"); // Recherche la section ayant l'ID "contact"
        if (contactSection) {
          // Si la section de contact existe
          // Défile jusqu'à cette section avec un mouvement doux
          contactSection.scrollIntoView({
            behavior: "smooth", // Défilement doux
            block: "start", // Positionner la section en haut de la fenêtre de visualisation
          });
        }
      }, 100); // Le délai de 100ms est ajouté pour permettre à la page de se charger complètement avant le défilement
    } else {
      // Si l'utilisateur est déjà sur la page d'accueil, on défile directement jusqu'à la section de contact
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        // Si la section de contact existe
        contactSection.scrollIntoView({
          behavior: "smooth", // Défilement doux
          block: "start", // Positionner la section en haut de la fenêtre de visualisation
        });
      }
    }
  };

  return (
    <div className="header">
      <div className="navigation">
        {/* Conteneur pour le menu de navigation central */}
        <ul className="nav-buttons">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-button active" : "nav-button"
            }
          >
            <li>Accueil</li>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-button active" : "nav-button"
            }
          >
            <li>A Propos</li>
          </NavLink>

          {/* Lien de navigation qui défile vers la section des projets */}
          <a
            href="#projects"
            onClick={handleProjectsClick}
            className="nav-button" // Ajout de la classe "nav-button" pour un style cohérent
          >
            <li>Projets</li>
          </a>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "nav-button active" : "nav-button"
            }
          >
            <li>Skills</li>
          </NavLink>

          {/* Lien de navigation qui défile vers la section de contact */}
          <a
            href="#contact"
            onClick={handleContactClick}
            className="nav-button" // Ajout de la classe "nav-button" pour un style cohérent
          >
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
