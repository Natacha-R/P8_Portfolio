import React from "react"; // // importe React depuis la bibliothèque "react", (permet d'utiliser les fonctionnalités de React dans le fichier)
import { NavLink } from "react-router-dom"; // Importation du composant NavLink depuis react-router-dom (liens de navigation).

import Logo from "../assets/logo.png";
import SmallLogo from "../assets/logo_mobile.png";

// composant Header "intégralité du site" pour l'en-tête des pages (Logo & menu de navigation) :

function Header() {
  return (
    <div className="header">
      <div className="navigation">
        {/* Conteneur pour le menu de navigation central */}
        <ul className="nav-buttons">
          {/* Liste contenant les liens de navigation stylisés comme des boutons */}

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-button active" : "nav-button"
            }
            // Si le lien est actif, applique la classe "active" en plus de "nav-button".
          >
            <li>Accueil</li>
            {/* Bouton pour la page d'accueil */}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-button active" : "nav-button"
            }
            // Même logique pour appliquer la classe "active" au lien actif.
          >
            <li>A Propos</li>
            {/* Bouton pour la page À Propos */}
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-button active" : "nav-button"
            }
          >
            <li>Skills</li>
            {/* Bouton pour la page Services */}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-button active" : "nav-button"
            }
          >
            <li>Contact</li>
            {/* Bouton pour la page Contact */}
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

// Exportation du composant Header pour qu'il puisse être utilisé dans d'autres fichiers
export default Header;
