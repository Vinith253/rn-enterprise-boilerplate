import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Typography from '../Typography/Typography';

type Props = {
  title: string;
};

const AppHeader = ({
  title,
}: Props) => {
  return (
    <View style={styles.container}>
      <Typography
        variant="headingMedium"
        style={styles.title}>
        {title}
      </Typography>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
  },
});