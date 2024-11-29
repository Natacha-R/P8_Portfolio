import React from "react"; // Importation de React pour créer des composants
import Cards from "../components/Cards"; // Importation du composant pour afficher les projets

// Composant Home : représente la page d'accueil du portfolio
function Home() {
  return (
    <div className="home">
      {/* Section d'accueil : présentation */}
      <section className="intro-section">
        {/* Bulles animées */}
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>

        {/* Contenu principal */}
        <div className="intro-content">
          <h1>
            <span>Natacha RIPPERT</span>
          </h1>
          <h2 className="developer-title">Développeuse Web</h2>
          <p>Créatrice d'expériences numériques modernes et performantes</p>
        </div>
      </section>

      {/* Liste des projets via le composant Cards */}
      <section className="projects-section">
        <Cards />
      </section>
    </div>
  );
}

export default Home; // Exportation pour l'utilisation dans l'application
