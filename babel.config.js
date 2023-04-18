module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['.'],
        alias: {
          '@src': './src',
          '@comps': './src/comps',
          '@features': './src/features',
          '@hooks': './src/hooks',
          '@navigation': './navigation',
          '@routes': './src/routes',
          '@theme': './src/theme',
          '@types': './src/types',
          '@utils': './src/utils',
          '@screens': './src/screens',
        },
      },
    ],
  ],
  sourceType: 'unambiguous',
};
