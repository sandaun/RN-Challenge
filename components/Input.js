import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Modalize} from 'react-native-modalize';

import Button from './Button';

export const Input = ({value, onChangeText, placeholder, title}) => {
  const [text, setText] = useState('');

  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        autoCapitalize="none"
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
