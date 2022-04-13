import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import {list, grid} from '../static/images';

const LayoutButtons = () => {
  const [layout, setLayout] = useState('list');

  const GRID = 'grid';
  const LIST = 'list';

  const handleLayoutList = () => {
    setLayout(LIST);
  };

  const handleLayoutGrid = () => {
    setLayout(GRID);
  };

  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          styles.buttonLeft,
          layout !== LIST ? styles.buttonNotSelected : null,
        ]}
        onPress={handleLayoutList}>
        <Image
          source={list}
          style={[
            styles.layoutIcon,
            layout !== LIST ? styles.iconNotSelected : null,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          styles.buttonRight,
          layout !== GRID ? styles.buttonNotSelected : null,
        ]}
        onPress={handleLayoutGrid}>
        <Image
          source={grid}
          style={[
            styles.layoutIcon,
            layout !== GRID ? styles.iconNotSelected : null,
          ]}
        />
      </TouchableOpacity>
    </View>
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
  },
  button: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  buttonRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  buttonNotSelected: {
    backgroundColor: '#F5F6F7',
    tintColor: 'gray',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  layoutIcon: {
    width: 20,
    height: 20,
    tintColor: '#5781E4',
  },
  iconNotSelected: {
    tintColor: 'gray',
  },
});

export default LayoutButtons;
