import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import {document} from '../static/images';

import {CHOOSE_FILE, FILE} from '../static/constants';
import { BottomModalRef } from '../ts/interfaces';

export type Props = {
  fileModalRef: React.RefObject<BottomModalRef>;
};

const AttachButton: React.FC<Props> = ({fileModalRef}) => {
  const handleAttachList = () => {
    fileModalRef.current?.open();
  };

  return (
    <>
      <Text style={styles.title}>{FILE}</Text>
      <TouchableOpacity
        style={styles.buttonsContainer}
        onPress={handleAttachList}>
        <Image source={document} style={styles.layoutIcon} />
        <Text style={styles.buttonText}>{CHOOSE_FILE}</Text>
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
