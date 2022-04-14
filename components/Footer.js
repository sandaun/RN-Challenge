import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Button from './Button';

const Footer = ({modalRef}) => {
  const onButtonPress = () => {
    modalRef.current?.open();
  };

  return (
    <Button onPress={onButtonPress} title={'+ Add document'}/>
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
