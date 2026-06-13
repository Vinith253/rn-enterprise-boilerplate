import React, {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {useAppTheme} from '@theme/useAppTheme';

const Screen = ({
  children,
}: PropsWithChildren) => {
  const theme = useAppTheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor:
            theme.colors.background,
        },
      ]}>
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});