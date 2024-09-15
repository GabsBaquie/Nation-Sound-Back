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
  ],
};
