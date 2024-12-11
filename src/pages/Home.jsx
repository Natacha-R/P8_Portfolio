import React, { useState, useRef } from "react"; // Importation de React pour créer des composants
import Cards from "../components/Cards"; // Importation du composant pour afficher les projets
import emailjs from "@emailjs/browser"; // Importation de la librairie pour envoyer des emails

// Composant Home : représente la page d'accueil du portfolio
function Home() {
  // État pour les données du formulaire et les erreurs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const form = useRef();

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Réinitialiser les messages d'erreur au fur et à mesure de la saisie
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Fonction pour valider l'email avec une expression régulière
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Fonction pour valider le formulaire avant de le soumettre
  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialiser un objet pour les erreurs
    const newErrors = {};

    // Validation des champs requis
    if (!formData.firstName) newErrors.firstName = "Le nom est requis.";
    if (!formData.lastName) newErrors.lastName = "Le prénom est requis.";
    if (!formData.email) {
      newErrors.email = "L'email est requis.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "L'email n'est pas valide.";
    }
    if (!formData.message) newErrors.message = "Le message est requis.";

    // Si des erreurs sont présentes, les afficher
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Si le formulaire est valide, afficher un message d'alerte ou envoyer le formulaire
      alert("Message envoyé !");
      // Réinitialiser les données du formulaire plus envoi
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };

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
      <section id="projects" className="projects-section">
        <h2 className="projects-title">Mes Projets</h2>
        <Cards />
      </section>

      {/* Section Contact */}
      <section id="contact" className="contact-section">
        <h2>Contactez-moi</h2>
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="firstName">Nom</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Entrez votre nom"
              required
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Prénom</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Entrez votre prénom"
              required
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre adresse email"
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Écrivez votre message ici"
              required
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit">Envoyer</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
