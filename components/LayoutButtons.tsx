import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import {list, grid} from '../static/images';
import {UIDesign} from '../ts/enums';

type Props = {
  handleLayout: (vale: string) => void;
};

const LayoutButtons: React.FC<Props> = ({handleLayout}) => {
  const [layout, setLayout] = useState(UIDesign.LIST);

  useEffect(() => {
    handleLayout(layout);
  }, [layout]);

  const handleLayoutList = () => {
    setLayout(UIDesign.LIST);
  };

  const handleLayoutGrid = () => {
    setLayout(UIDesign.GRID);
  };

  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          styles.buttonLeft,
          layout !== UIDesign.LIST ? styles.buttonNotSelected : null,
        ]}
        onPress={handleLayoutList}>
        <Image
          source={list}
          style={[
            styles.layoutIcon,
            layout !== UIDesign.LIST ? styles.iconNotSelected : null,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          styles.buttonRight,
          layout !== UIDesign.GRID ? styles.buttonNotSelected : null,
        ]}
        onPress={handleLayoutGrid}>
        <Image
          source={grid}
          style={[
            styles.layoutIcon,
            layout !== UIDesign.GRID ? styles.iconNotSelected : null,
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
