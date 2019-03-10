module.exports = function (api) {
  api.cache(true);

  const presets = ['module:metro-react-native-babel-preset'];
  const plugins = [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
  ];

  if (process.env.ENV === 'prod') {
    plugins.push([
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ]);
  }

  return {
    presets,
    plugins,
  };
};
