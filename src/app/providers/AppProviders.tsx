import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigator from '@app/navigation/RootNavigator';
// import {
//   darkTheme,
//   lightTheme,
// } from '@theme';

import {useAppStore} from '@app/store/useAppStore';
import { darkTheme } from '@theme/darkTheme';
import { lightTheme } from '@theme/lightTheme';

const AppProviders = () => {
  const isDarkMode = useAppStore(
    state => state.isDarkMode,
  );

  return (
    <NavigationContainer
      theme={
        isDarkMode
          ? darkTheme
          : lightTheme
      }>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default AppProviders;