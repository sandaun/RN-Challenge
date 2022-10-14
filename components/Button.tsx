import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export type Props = {
  onPress: () => void;
  title: string;
  disabled: boolean;
};

const Button: React.FC<Props> = ({onPress, title, disabled}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5781E4',
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: '#C4C4C4',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Button;
