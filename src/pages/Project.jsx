import React from "react"; // Importé depuis la bibliothèque react pour créer des composants react.
import { useParams } from "react-router-dom"; // Hook fourni par react-router-dom, permet d’accéder aux paramètres de l’URL. (utilisé pour extraire l’id du projet depuis l’URL)

import ProjectsList from "../data/projects.json"; // Import des données des projets depuis le fichier projects.json.
import Error from "./Error";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";

function Project() {
  const { id } = useParams(); // Hook extrait le paramètre 'id' de l'url (ex: si URL "project/123" alors id = "123"
  const project = ProjectsList.find((item) => item.id === id); // Cherche dans la liste des projets celui dont l’id correspond à celui extrait de l’URL. (project sera stocké dans project)

  if (!project) {
    return <Error />;
  } // Si aucun projet ne correspond à l’id fourni, le composant affiche la page d’erreur en utilisant le composant Error.

  // Déstructuration des données du projet pour simplifier leur utilisation et éviter les répétitions.
  const { title, tags, description, difficulties, link } = project;

  return (
    <div className="project-container">
      {/****************** Informations principales : Titre, Localisation, Tags ******************/}
      <div className="project-header">
        <div className="title-project">
          {/* affiche le titre*/}
          <h1 className="titleProject">{title}</h1>{" "}
          {/* Parcourt le tableau tags et affiche chaque tag dans un <span> avec une classe. Chaque tag reçoit une clé unique basée sur son index */}
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          {/****************** Description ******************/}
          <div className="project-details">
            <Collapse title="Description" class="collapse-container-no-margin">
              <p>{description}</p>
            </Collapse>
          </div>
          {/****************** Difficultés rencontrées ******************/}
          <div className="project-details">
            <Collapse
              title="Difficultés rencontrées"
              class="collapse-container-no-margin"
            >
              <p>{difficulties}</p>
            </Collapse>
          </div>
          <a href={link} target="_blank">
            Lien GitHub
          </a>
        </div>
      </div>

      {/****************** Affichage du diaporama des images du projet en passant le tableau pictures en tant que prop images ******************/}
      <Slideshow images={project.pictures} />
    </div>
  );
}

export default Project;
