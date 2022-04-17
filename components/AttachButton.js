import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';

import {document} from '../static/images';

const AttachButton = () => {
  const [layout, setLayout] = useState('list');

  const handleAttachList = () => {
    console.log('attach');
  };
  return (
    <>
      <Text style={styles.title}>File</Text>
      <TouchableOpacity
        style={styles.buttonsContainer}
        onPress={handleAttachList}>
        <Image source={document} style={styles.layoutIcon} />
        <Text style={styles.buttonText}>Choose file</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    borderRadius: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    width: '35%',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 8,
  },
  button: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  layoutIcon: {
    width: 20,
    height: 20,
    tintColor: '#5781E4',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5781E4',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default AttachButton;
