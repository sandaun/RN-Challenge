import React, {useRef, useEffect, useState, useContext} from 'react';
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
import FileModal from './FileModal';
import {ChallengeContext} from '../context/ChallengeProvider';

export const BottomModal = ({forwardedRef}) => {
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');

  const context = useContext(ChallengeContext);

  const fileModalRef = useRef(null);

  const onSubmitButtonPress = () => {
    context.setContextData(prevContext => {
      return {
        ...prevContext,
        documents: [
          ...prevContext.documents,
          {
            name,
            version,
            file: context.contextData.fileChosen,
          },
        ],
        fileChosen: null,
      };
    });
    forwardedRef.current?.close();
    setName('');
    setVersion('');
  };

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
        <AttachButton fileModalRef={fileModalRef} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title={'Submit'} onPress={onSubmitButtonPress} />
      </View>
      <FileModal fileModalRef={fileModalRef} />
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
