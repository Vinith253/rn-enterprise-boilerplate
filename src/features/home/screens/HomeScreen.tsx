import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import {
  Button,
  Screen,
  Typography,
  AppHeader,
} from '@shared/components';

import {spacing} from '@theme/spacing';
import {useAppStore} from '@app/store/useAppStore';

const HomeScreen = () => {
  const toggleTheme =
    useAppStore(
      state => state.toggleTheme,
    );

  return (
  <Screen>
    <View style={styles.container}>
      <AppHeader title="Home" />

      <View style={styles.content}>
        <Typography
          variant="headingMedium"
          style={styles.title}>
          RN Enterprise Boilerplate 🚀
        </Typography>

        <Button
          title="Toggle Theme"
          onPress={toggleTheme}
        />
      </View>
    </View>
  </Screen>
);
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
    paddingTop: spacing.xl,
  },

  content: {
    marginTop: spacing.xl,
  },

  title: {
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
});