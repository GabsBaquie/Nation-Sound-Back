/**
 * partenaire controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::partenaire.partenaire",
  ({ strapi }) => ({
    // Méthode personnalisée pour récupérer les partenaires par type
    async findByType(ctx) {
      try {
        // Récupérer le type depuis les paramètres de l'URL
        const { type } = ctx.params;

        // Logique pour filtrer les partenaires en fonction de leur type
        const partenaires = await strapi.entityService.findMany(
          "api::partenaire.partenaire",
          {
            filters: { type }, // Filtrer par type de partenaire
            populate: ["logo"], // Inclure les logos associés dans la réponse
          }
        );

        // Si aucun partenaire n'est trouvé, renvoyer une erreur 404
        if (!partenaires || partenaires.length === 0) {
          return ctx.throw(404, "Aucun partenaire trouvé pour ce type");
        }

        // Retourner la liste des partenaires filtrés
        ctx.body = partenaires;
      } catch (error) {
        // Gérer les erreurs éventuelles
        ctx.throw(500, "Erreur lors de la récupération des partenaires");
      }
    },
  })
);
