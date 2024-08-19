export default () => ({
  "wysiwyg-react-md-editor": {
    enabled: true,
  },
});

module.exports = ({ env }) => ({
  transformer: {
    enabled: true,
    config: {
      prefix: "/api",
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      "vercel-deploy": {
        enabled: true,
        config: {
          deployHook: "https://nation-sound-back.vercel.app/",
        },
      },
    },
  },
});
