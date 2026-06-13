module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@app': './src/app',
          '@features': './src/features',
          '@services': './src/services',
          '@shared': './src/shared',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@theme': './src/theme',
          '@constants': './src/constants',
          '@types': './src/types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};