/**
 * alerte controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::alerte.alerte",
  ({ strapi }) => ({
    // Méthode personnalisée pour récupérer les alertes urgentes
    async findUrgentAlerts(ctx) {
      console.log("findUrgentAlerts called"); // Debug
      try {
        const urgentAlerts = await strapi.entityService.findMany(
          "api::alerte.alerte",
          {
            filters: { urgence: true },
            populate: [],
          }
        );

        if (!urgentAlerts || urgentAlerts.length === 0) {
          return ctx.throw(404, "Aucune alerte urgente trouvée");
        }

        console.log("Urgent Alerts:", urgentAlerts); // Debug
        ctx.body = urgentAlerts;
      } catch (error) {
        console.log("Error:", error); // Debug
        return ctx.throw(
          500,
          "Erreur lors de la récupération des alertes urgentes"
        );
      }
    },

    // Méthode personnalisée pour récupérer les alertes actives
    async findActiveAlerts(ctx) {
      console.log("findActiveAlerts called"); // Debug
      try {
        const activeAlerts = await strapi.entityService.findMany(
          "api::alerte.alerte",
          {
            filters: { actif: true }, // Filtrer par le champ actif
            populate: [], // Remplir des relations si nécessaire
          }
        );

        console.log("Active Alerts:", activeAlerts); // Debug pour voir les résultats

        if (!activeAlerts || activeAlerts.length === 0) {
          return ctx.throw(404, "Aucune alerte active trouvée");
        }

        // Retourner les alertes actives
        ctx.body = activeAlerts;
      } catch (error) {
        console.log("Error:", error); // Debug des erreurs
        return ctx.throw(
          500,
          "Erreur lors de la récupération des alertes actives"
        );
      }
    },
  })
);
