import React from "react"; // importe React depuis la bibliothèque "react", (permet d'utiliser les fonctionnalités de React dans le fichier).

// Composant skill permet d'afficher les compétences par sujet

function Skill({ image, alt, title, description }) {
  return (
    <div className="skill-section">
      <div className="skill-photo">
        <img src={image} alt={alt} />
      </div>
      <div className="skill-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Skill; // composant Skill est exporté par défaut (permet à d'autres fichiers de l'importer et de l'utiliser).
