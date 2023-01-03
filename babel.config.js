const buildPluginConfig = (api) => {
  const plugins = [];

  plugins.push([
    require.resolve("babel-plugin-module-resolver"),
    {
      root: ["."],
      extensions: [".js", ".json"],
      alias: {
        "@components": "./src/components",
        "@contexts": "./src/contexts",
      },
    },
  ]);
  return plugins;
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: buildPluginConfig(api),
  };
};
