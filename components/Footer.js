import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Footer = (props) => {
  console.log(2, props.modal);
  const onPressButton = () => {
    props.modal?.open();
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onPressButton}>
      <Text style={styles.buttonText}>+ Add document</Text>
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
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Footer;
