import {useAppStore} from '@app/store/useAppStore';

import {
  darkTheme,
  lightTheme,
} from './index';

export const useAppTheme = () => {
  const isDarkMode = useAppStore(
    state => state.isDarkMode,
  );

  return isDarkMode
    ? darkTheme
    : lightTheme;
};