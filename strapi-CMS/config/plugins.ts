export default ({ env }) => ({
  "wysiwyg-react-md-editor": {
    enabled: true,
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
