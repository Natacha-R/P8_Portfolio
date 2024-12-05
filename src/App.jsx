// Système de routage dynamique

// Importations des dépendances :
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Error from "./pages/Error";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Sélectionne l'élément du curseur personnalisé
    const cursor = document.querySelector(".custom-cursor");
    const body = document.querySelector("body"); // Sélectionne le body pour gérer le curseur par défaut

    // Vérifie que l'élément du curseur a été trouvé
    if (!cursor) {
      console.error(
        "Le curseur personnalisé n'a pas pu être trouvé dans le DOM."
      );
      return;
    }

    // Fonction pour déplacer le curseur en fonction de la souris
    const moveCursor = (e) => {
      cursor.style.top = `${e.clientY}px`; // Position verticale de la souris
      cursor.style.left = `${e.clientX}px`; // Position horizontale de la souris
    };

    // Ajout de l'événement pour suivre la souris
    document.addEventListener("mousemove", moveCursor);

    // Désactive le curseur par défaut sur tout le document (empêche la flèche)
    body.style.cursor = "none";

    // Nettoyage des événements au démontage du composant
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      body.style.cursor = "auto"; // Réactive le curseur par défaut une fois le composant démonté
    };
  }, []); // L'effet se déclenche une seule fois après le montage du composant

  return (
    <BrowserRouter>
      {/* Le curseur personnalisé qui suit la souris */}
      <div className="custom-cursor"></div>

      {/* En-tête de l'application */}
      <Header />

      {/* Routes pour les pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Page d'accueil */}
        <Route path="/about" element={<About />} /> {/* Page "À propos" */}
        <Route path="/project/:id" element={<Project />} />{" "}
        {/* Page de projet */}
        <Route path="*" element={<Error />} /> {/* Page d'erreur */}
      </Routes>

      {/* Pied de page de l'application */}
      <Footer />
    </BrowserRouter>
  );
}

export default App; // permet d'exporter la fonction App afin qu'elle puisse être utilisée ailleurs dans l'application.
