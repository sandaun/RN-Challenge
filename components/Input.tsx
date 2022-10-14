import React, {useState} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

type Props = {
  value: string;
  onChangeText: (value: (string)) => void;
  placeholder: string;
  title: string;
};

export const Input: React.FC<Props> = ({value, onChangeText, placeholder, title}) => {

  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        onChangeText={onChangeText}
        value={value}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    borderColor: 'lightgray',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Input;
