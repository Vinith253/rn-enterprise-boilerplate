import {DefaultTheme} from '@react-navigation/native';

import {colors} from './colors';

export const lightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    text: colors.text,
    primary: colors.primary,
  },
};
