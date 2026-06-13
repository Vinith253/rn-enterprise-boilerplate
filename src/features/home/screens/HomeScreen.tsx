import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Screen from '@shared/components/Screen/Screen';
import Button from '@shared/components/Button/Button';

import {useAppStore} from '@app/store/useAppStore';
import {useAppTheme} from '@theme/useAppTheme';

const HomeScreen = () => {
  const toggleTheme =
    useAppStore(
      state => state.toggleTheme,
    );
  const theme = useAppTheme();

  return (
    <Screen>
      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            {color: theme.colors.text},
          ]}>
          RN Enterprise Boilerplate 🚀
        </Text>

        <Button
          title="Toggle Theme"
          onPress={toggleTheme}
        />
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
  },
});
