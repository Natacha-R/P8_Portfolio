import React from "react";

function Skills() {
  return (
    <div className="skills-page">
      {/* Section avec photo et présentation */}
      <div className="skill-section">
        <div className="skill-photo">
          <img
            src="../images/html-css-js.png"
            alt="logos html css javascript"
          />
        </div>
        <div className="skill-text">
          <h2>HTML / CSS / JavaScript</h2>
          <p>
            Ces trois technologies forment le cœur du développement web. HTML
            structure le contenu (titres, paragraphes, images), CSS le stylise
            (couleurs, mise en page, animations), et JavaScript ajoute
            l’interactivité (formulaires dynamiques, boutons, effets en temps
            réel). Leur synergie permet de créer des sites modernes,
            fonctionnels et esthétiques.
          </p>
        </div>
      </div>
      <div className="skill-section">
        <div className="skill-text">
          <h2>React</h2>
          <p>
            Bibliothèque JavaScript puissante pour créer des interfaces
            utilisateur dynamiques et interactives. Elle permet de construire
            des composants réutilisables, simplifie la gestion de l’état et
            garantit des performances optimisées pour des applications modernes
            et réactives.
          </p>
        </div>
        <div className="skill-photo">
          <img src="../images/react.png" alt="logo react" />
        </div>
      </div>
      <div className="skill-section">
        <div className="skill-photo">
          <img src="../images/sass.webp" alt="logo Sass" />
        </div>
        <div className="skill-text">
          <h2>Sass</h2>
          <p>
            Préprocesseur CSS qui simplifie et améliore le stylisme web. Il
            permet d’utiliser des variables, des mixins et des fonctions pour
            écrire un code CSS plus organisé, réutilisable et facile à
            maintenir.
          </p>
        </div>
      </div>
      <div className="skill-section">
        <div className="skill-text">
          <h2>MongoDB</h2>
          <p>
            Base de données NoSQL flexible et performante qui stocke les données
            sous forme de documents JSON. Idéale pour gérer des données
            volumineuses et évolutives, elle s’intègre parfaitement dans les
            applications modernes.
          </p>
        </div>
        <div className="skill-photo">
          <img src="../images/mongodb.svg" alt="logo mongoDB" />
        </div>
      </div>
      <div className="skill-section">
        <div className="skill-photo">
          <img src="../images/node-express.png" alt="logo Node.js et Express" />
        </div>
        <div className="skill-text">
          <h2>Node.js Express</h2>
          <p>
            Plateforme JavaScript côté serveur associée à un framework léger et
            rapide. Node.js offre un environnement pour exécuter JavaScript sur
            le serveur, tandis qu’Express simplifie la création d’API et
            d’applications web grâce à sa flexibilité et ses fonctionnalités
            prêtes à l’emploi.
          </p>
        </div>
      </div>
      <div className="skill-section">
        <div className="skill-text">
          <h2>GitHub</h2>
          <p>
            Plateforme de collaboration et de gestion de code basée sur Git.
            Elle permet de versionner des projets, collaborer en équipe et
            déployer facilement des applications, tout en gardant un historique
            clair des modifications.
          </p>
        </div>
        <div className="skill-photo">
          <img src="../images/github.png" alt="logo GitHub" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
