import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Modalize} from 'react-native-modalize';

import Button from './Button';
import Input from './Input';
import AttachButton from './AttachButton';

export const BottomModal = ({forwardedRef}) => {
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');

  return (
    <Modalize ref={forwardedRef} overlayStyle={{opacity: 1}} modalHeight={380}>
      <View style={styles.inputsContainer}>
        <Input
          placeholder={'Enter name'}
          value={name}
          onChangeText={setName}
          title={'Name'}
        />
        <Input
          placeholder={'Version'}
          value={version}
          onChangeText={setVersion}
          title={'Version'}
        />
        <AttachButton />
      </View>

      <View style={styles.buttonContainer}>
        <Button title={'Close'} onPress={() => forwardedRef.current?.close()} />
      </View>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  inputsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

export default BottomModal;
