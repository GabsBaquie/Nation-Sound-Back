/**
 * partenaire router
 */

export default {
  routes: [
    // Route personnalisée pour filtrer par type
    {
      method: "GET",
      path: "/partenaires/type/:type", // Route personnalisée
      handler: "partenaire.findByType",
      config: {
        policies: [], // Optionnel : policies pour gérer l'authentification
      },
    },
    // Route par défaut pour récupérer tous les partenaires
    {
      method: "GET",
      path: "/partenaires",
      handler: "partenaire.find",
      config: {
        policies: [],
      },
    },
    // Route par défaut pour récupérer un partenaire par ID
    {
      method: "GET",
      path: "/partenaires/:id",
      handler: "partenaire.findOne",
      config: {
        policies: [],
      },
    },
    // Route par défaut pour créer un nouveau partenaire
    {
      method: "POST",
      path: "/partenaires",
      handler: "partenaire.create",
      config: {
        policies: [],
      },
    },
    // Route par défaut pour mettre à jour un partenaire existant
    {
      method: "PUT",
      path: "/partenaires/:id",
      handler: "partenaire.update",
      config: {
        policies: [],
      },
    },
    // Route par défaut pour supprimer un partenaire
    {
      method: "DELETE",
      path: "/partenaires/:id",
      handler: "partenaire.delete",
      config: {
        policies: [],
      },
    },
  ],
};
