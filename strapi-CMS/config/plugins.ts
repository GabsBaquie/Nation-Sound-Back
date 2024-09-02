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
