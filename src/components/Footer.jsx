// Importation de React, nécessaire pour définir le composant React
import React from "react";

// Importation des icônes depuis la bibliothèque react-icons/fa pour inclure des icônes d'email, LinkedIn et GitHub
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Icônes spécifiques de React Icons

// Définition du composant Footer
function Footer() {
  return (
    // Balise footer qui enveloppe tout le contenu du footer
    <footer className="footer">
      {/* Conteneur principal du footer contenant le texte et les icônes */}
      <div className="footer-content">
        <p>Natacha RIPPERT</p>

        {/* Conteneur pour les icônes sociales (email, LinkedIn, GitHub) */}
        <div className="footer-icons">
          {/* Icône pour envoyer un email */}
          <a
            href="mailto:natacha.le.barbier@gmail.com" // Lien mailto qui permet d'ouvrir le client mail par défaut pour envoyer un email
            aria-label="Envoyer un email" // Texte alternatif pour améliorer l'accessibilité
          >
            <FaEnvelope /> {/* Affichage de l'icône enveloppe (email) */}
          </a>

          {/* Icône pour LinkedIn */}
          <a
            href="https://www.linkedin.com/in/natacha-rippert-971b09232/" // Lien vers le profil LinkedIn
            target="_blank" // Ouvre le lien dans un nouvel onglet
            rel="noopener noreferrer" // Amélioration de la sécurité lors de l'ouverture du lien dans un nouvel onglet
            aria-label="LinkedIn" // Texte alternatif pour l'accessibilité, pour les lecteurs d'écran
          >
            <FaLinkedin /> {/* Affichage de l'icône LinkedIn */}
          </a>

          {/* Icône pour GitHub */}
          <a
            href="https://github.com/Natacha-R" // Lien vers le profil GitHub
            target="_blank" // Ouvre le lien dans un nouvel onglet
            rel="noopener noreferrer" // Sécurité supplémentaire lors de l'ouverture dans un nouvel onglet
            aria-label="GitHub" // Texte alternatif pour l'accessibilité
          >
            <FaGithub /> {/* Affichage de l'icône GitHub */}
          </a>
        </div>
      </div>
    </footer>
  );
}

// Exportation du composant Footer pour qu'il soit utilisé ailleurs dans l'application
export default Footer;
