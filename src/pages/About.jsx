import React from "react";

function About() {
  return (
    <div className="about-page">
      {/* Section avec photo et présentation */}
      <div className="about-section">
        <div className="about-photo">
          <img src="../images/photo-profil.jpeg" alt="Natacha" />
        </div>
        <div className="about-text">
          <h2>À propos de moi</h2>
          <p>
            Bonjour ! Je suis Natacha, un développeuse passionnée par le design
            web, la création d’expériences utilisateurs intuitives, et les
            technologies modernes. J’aime résoudre des problèmes, apprendre de
            nouvelles choses, et collaborer sur des projets ambitieux.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
