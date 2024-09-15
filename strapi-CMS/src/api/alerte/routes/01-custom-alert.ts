/**
 * alerte router
 */

export default {
  routes: [
    // Route personnalisée pour récupérer les alertes urgentes
    {
      method: "GET",
      path: "/alertes/urgentes",
      handler: "alerte.findUrgentAlerts", // Méthode personnalisée pour les alertes urgentes
      config: {
        policies: [],
      },
    },
    // Route personnalisée pour récupérer les alertes actives
    {
      method: "GET",
      path: "/alertes/actives",
      handler: "alerte.findActiveAlerts",
      config: {
        policies: [],
      },
    },
  ],
};
