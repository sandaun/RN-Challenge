import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Modalize} from 'react-native-modalize';

import fakeData from '../static/fakeData';
import {ChallengeContext} from '../context/ChallengeProvider';
import {CHOOSE_FILE, FILE_TYPE} from '../static/constants';
import { BottomModalRef, File } from '../ts/interfaces';

type Props = {
  fileModalRef: React.RefObject<BottomModalRef>;
};
export const FileModal: React.FC<Props> = ({fileModalRef}) => {
  const context = useContext(ChallengeContext);

  const onFilePress = (file: File) => {
    console.log(file)
    fileModalRef.current?.close();
    context.setContextData?.(prevContext => {
      return {
        ...prevContext,
        Attachments: file.Attachments,
        Contributors: file.Contributors,
      };
    });
  };

  return (
    <Modalize ref={fileModalRef} modalHeight={380}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{CHOOSE_FILE}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {fakeData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemContainer}
            onPress={() => onFilePress(item)}>
            <Text style={styles.itemText}>{`${FILE_TYPE} ${item.ID}`}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  scrollViewContainer: {
    marginTop: 20,
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  itemContainer: {
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 16,
    color: '#5781E4',
    marginVertical: 10,
  },
});

export default FileModal;
