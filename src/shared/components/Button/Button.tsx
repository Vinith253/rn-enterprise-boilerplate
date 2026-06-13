import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

const Button = ({
  title,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 12,
  },

  title: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});