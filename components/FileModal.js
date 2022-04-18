import React, {useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Modalize} from 'react-native-modalize';

import Button from './Button';
import Input from './Input';
import AttachButton from './AttachButton';
import fakeData from '../static/fakeData';
import {ChallengeContext} from '../context/ChallengeProvider';

export const FileModal = ({fileModalRef}) => {
  const context = useContext(ChallengeContext);

  const onFilePress = file => {
    fileModalRef.current.close();
    context.setContextData(prevContext => {
      return {
        ...prevContext,
        fileChosen: file,
      };
    });
  };

  return (
    <Modalize ref={fileModalRef} modalHeight={380}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose file</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {fakeData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemContainer}
            onPress={() => onFilePress(item)}>
            <Text style={styles.itemText}>File type {item.id}</Text>
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
    // backgroundColor: '#F5F6F7',
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
