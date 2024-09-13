export default ({ env }) => ({
  "wysiwyg-react-md-editor": {
    enabled: true,
  },
  "google-maps": {
    enabled: true,
    config: {
      apiKey: env("GOOGLE_MAPS_API_KEY"),
    },
  },
  "entity-relationship-chart": {
    enabled: true,
    config: {
      // Par défaut, tous les types de contenu et composants sont inclus.
      // Pour exclure les modèles internes de Strapi, utilisez :
      exclude: [
        "strapi::core-store",
        "webhook",
        "admin::permission",
        "admin::user",
        "admin::role",
        "admin::api-token",
        "admin::api-token-permission",
        "admin::transfer-token-permission",
        "admin::transfer-token",
        "plugin::upload.file",
        "plugin::i18n.locale",
        "plugin::upload.folder",
        "plugin::content-releases.release-action",
        "plugin::content-releases.release",
        "plugin::users-permissions.user",
        "plugin::users-permissions.permission",
        "plugin::users-permissions.role",
      ],
    },
  },
  transformer: {
    enabled: true,
    config: {
      prefix: "/api",
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
});
