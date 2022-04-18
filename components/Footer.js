import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Button from './Button';

import {ADD_DOCUMENT} from '../static/constants';
import {ChallengeContext} from '../context/ChallengeProvider';

const Footer = ({modalRef}) => {
  const context = useContext(ChallengeContext);

  const onButtonPress = () => {
    modalRef.current?.open();
    context.setContextData(prevContext => {
      return {
        ...prevContext,
        Attachments: [],
        Contributors: [],
      };
    });
  };

  return <Button onPress={onButtonPress} title={ADD_DOCUMENT} />;
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
