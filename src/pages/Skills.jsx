import React from "react";
import Skill from "../components/Skill";

function Skills() {
  return (
    <div className="skills-page">
      {/* Section avec photo et présentation */}
      <Skill
        image="../images/html-css-js.png"
        alt="logos html css javascript"
        title="HTML / CSS / JavaScript"
        description="Ces trois technologies forment le cœur du développement web. HTML
            structure le contenu (titres, paragraphes, images), CSS le stylise
            (couleurs, mise en page, animations), et JavaScript ajoute
            l’interactivité (formulaires dynamiques, boutons, effets en temps
            réel). Leur synergie permet de créer des sites modernes,
            fonctionnels et esthétiques."
      />
      <Skill
        image="../images/react.png"
        alt="logo react"
        title="React"
        description="Bibliothèque JavaScript puissante pour créer des interfaces
            utilisateur dynamiques et interactives. Elle permet de construire
            des composants réutilisables, simplifie la gestion de l’état et
            garantit des performances optimisées pour des applications modernes
            et réactives."
      />
      <Skill
        image="../images/sass.webp"
        alt="logo Sass"
        title="Sass"
        description="Préprocesseur CSS qui simplifie et améliore le stylisme web. Il
            permet d’utiliser des variables, des mixins et des fonctions pour
            écrire un code CSS plus organisé, réutilisable et facile à
            maintenir."
      />
      <Skill
        image="../images/mongodb.svg"
        alt="logo mongoDB"
        title="MongoDB"
        description="Base de données NoSQL flexible et performante qui stocke les données
            sous forme de documents JSON. Idéale pour gérer des données
            volumineuses et évolutives, elle s’intègre parfaitement dans les
            applications modernes."
      />
      <Skill
        image="../images/node-express.png"
        alt="logo Node.js et Express"
        title="Node.js Express"
        description="Plateforme JavaScript côté serveur associée à un framework léger et
            rapide. Node.js offre un environnement pour exécuter JavaScript sur
            le serveur, tandis qu’Express simplifie la création d’API et
            d’applications web grâce à sa flexibilité et ses fonctionnalités
            prêtes à l’emploi."
      />
      <Skill
        image="../images/github.png"
        alt="logo GitHub"
        title="GitHub"
        description="Plateforme de collaboration et de gestion de code basée sur Git.
            Elle permet de versionner des projets, collaborer en équipe et
            déployer facilement des applications, tout en gardant un historique
            clair des modifications."
      />
    </div>
  );
}

export default Skills;
