import React from "react"; // Importé depuis la bibliothèque react pour créer des composants react.
import { useParams } from "react-router-dom"; // Hook fourni par react-router-dom, permet d’accéder aux paramètres de l’URL. (utilisé pour extraire l’id du logement depuis l’URL)

import AccommodationList from "../data/logements.json"; // Import des données des logements depuis le fichier logements.json.
import Error from "./Error";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";

function Accommodation() {
  const { id } = useParams(); // Hook extrait le paramètre 'id' de l'url (ex: si URL "accommodation/123" alors id = "123")
  const accommodation = AccommodationList.find((item) => item.id === id); // Cherche dans la liste des logements celui dont l’id correspond à celui extrait de l’URL. (logement sera stocké dans accommodation)

  if (!accommodation) {
    return <Error />;
  } // Si aucun logement ne correspond à l’id fourni, le composant affiche la page d’erreur en utilisant le composant Error.

  // Déstructuration des données du logement pour simplifier leur utilisation et éviter les répétitions.
  const { title, tags, description } = accommodation;

  return (
    <div className="accommodation-container">
      {/****************** Informations principales : Titre, Localisation, Tags ******************/}
      <div className="accommodation-header">
        <div className="title-location">
          {/* affiche le titre*/}
          <h1 className="titleAccommodation">{title}</h1>{" "}
          {/* Parcourt le tableau tags et affiche chaque tag dans un <span> avec une classe. Chaque tag reçoit une clé unique basée sur son index */}
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          {/****************** Description et Équipements avec le composant Collapse ******************/}
          <div className="accommodation-details">
            <Collapse title="Description" class="collapse-container-no-margin">
              <p>{description}</p>
            </Collapse>
          </div>
        </div>
      </div>

      {/****************** Affichage du diaporama des images du logement en passant le tableau pictures en tant que prop images ******************/}
      <Slideshow images={accommodation.pictures} />
    </div>
  );
}

export default Accommodation;
