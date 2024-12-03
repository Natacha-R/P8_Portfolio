import React from "react";
import Banner from "../components/Banner";
import BannerA from "../assets/banniereA.png";

function About() {
  return (
    <div className="about-page">
      {/* Section avec photo et présentation */}
      <div className="about-section">
        <div className="about-photo">
          <img src="../images/photo-profil.jpeg" alt="Ma photo" />
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
