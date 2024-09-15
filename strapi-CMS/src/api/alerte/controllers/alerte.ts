/**
 * alerte controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::alerte.alerte",
  ({ strapi }) => ({
    // Méthode personnalisée pour récupérer les alertes urgentes
    async findUrgentAlerts(ctx) {
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

        ctx.body = urgentAlerts;
      } catch (error) {
        return ctx.throw(
          500,
          "Erreur lors de la récupération des alertes urgentes"
        );
      }
    },

    // Méthode personnalisée pour récupérer les alertes actives
    async findActiveAlerts(ctx) {
      try {
        const activeAlerts = await strapi.entityService.findMany(
          "api::alerte.alerte",
          {
            filters: { actif: true },
            populate: [],
          }
        );

        if (!activeAlerts || activeAlerts.length === 0) {
          return ctx.throw(404, "Aucune alerte active trouvée");
        }

        ctx.body = activeAlerts;
      } catch (error) {
        return ctx.throw(
          500,
          "Erreur lors de la récupération des alertes actives"
        );
      }
    },
  })
);
