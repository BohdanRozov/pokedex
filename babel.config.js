module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@features": "./src/features",
            "@components": "./src/components",
            "@utils": "./src/utils",
            "@theme": "./src/theme",
            "@routes": "./src/routes",
            "@hooks": "./src/hooks",
            "@types": "./src/types",
            "@models": "./src/models",
            "@assets": "./assets",
            "@src": "./src",
          },
        },
      ],
      "react-native-reanimated/plugin", // ! has to be listed last
    ],
  };
};
