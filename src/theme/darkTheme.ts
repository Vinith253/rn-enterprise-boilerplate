import {DarkTheme} from '@react-navigation/native';

import {colors} from './colors';

export const darkTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    background: colors.darkBackground,
    text: colors.darkText,
    primary: colors.primary,
  },
};
