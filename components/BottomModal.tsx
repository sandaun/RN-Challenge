import React, {useRef, useEffect, useState, useContext, useMemo} from 'react';
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

import {
  ENTER_NAME,
  NAME,
  VERSION,
  SUBMIT,
  VERSION_NUMBER,
} from '../static/constants';
import { BottomModalRef } from '../ts/interfaces';

export type Props = {
  forwardedRef: React.RefObject<BottomModalRef>;
};

export const BottomModal: React.FC<Props> = ({forwardedRef}) => {
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');

  const context = useContext(ChallengeContext);

  const fileModalRef = useRef<BottomModalRef>(null);

  const onSubmitButtonPress = () => {
      context.setContextData && context.setContextData((prevContext) => {

        return {
          ...prevContext,
          Documents: [
            {
              Title: name,
              Version: version,
              Attachments: context.contextData?.Attachments,
              Contributors: context.contextData?.Contributors,
            },
            ...prevContext.Documents,
          ],
        };
      });  
    forwardedRef.current?.close();
    setName('');
    setVersion('');
  };

  const isButtonDisabled = useMemo(
    () =>
      name && version && (context.contextData && context.contextData.Attachments?.length > 0)
        ? false
        : true,
    [name, version, context.contextData && context.contextData.Attachments],
  );

  return (
    <Modalize ref={forwardedRef} overlayStyle={{opacity: 1}} modalHeight={380}>
      <View style={styles.inputsContainer}>
        <Input
          placeholder={ENTER_NAME}
          value={name}
          onChangeText={setName}
          title={NAME}
        />
        <Input
          placeholder={VERSION_NUMBER}
          value={version}
          onChangeText={setVersion}
          title={VERSION}
        />
        <AttachButton fileModalRef={fileModalRef} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={SUBMIT}
          onPress={onSubmitButtonPress}
          disabled={isButtonDisabled}
        />
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
