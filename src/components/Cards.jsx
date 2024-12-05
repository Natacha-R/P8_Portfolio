import React from "react"; // importe React depuis la bibliothèque "react", (permet d'utiliser les fonctionnalités de React dans le fichier).
import { NavLink } from "react-router-dom"; // Importation du composant NavLink depuis la bibliothèque react router (liens de navigation).

import Card from "./Card"; // composants card, responsable de l'affichage de la carte avec l'image et le titre pour chaque projet.
import ProjectsList from "../data/projects.json"; // importation des données sur les projets (fichier JSON)

// composant conteneur cartes projet "Accueil" qui génère la liste de cartes pour les projet à partir des données (projet.json) :

function Cards() {
  return (
    <div className="ProjectsList">
      {ProjectsList.map(
        (
          project // methode 'map' pour parcourir le tableau 'ProjectsList' et créer un composant card pour chaque projet.
        ) => (
          <NavLink
            to={`/project/${project.id}`} // NavLink crée un lien cliquable pour chaque projet (/project/123).
            key={project.id} //doit être unique pour chaque élément (identifie chaque élément de manière unique).
          >
            <Card
              id={project.id}
              image={project.cover}
              title={project.title}
              shortDescription={project.short_description}
            />
          </NavLink>
        )
      )}
    </div>
  );
}

export default Cards; // composant Cards est exporté par défaut (permet à d'autres fichiers de l'importer et de l'utiliser).
