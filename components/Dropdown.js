import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    ,
  ]);

  const PLACEHOLDER = 'Sort by';

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerStyle={styles.container}
      style={styles.main}
      maxHeight={80}
      placeholder={PLACEHOLDER}
      placeholderStyle={styles.placeHolder}
      dropDownContainerStyle={styles.dropDown}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    width: '35%',
    height: 48,
    flexDirection: 'row',
    // marginHorizontal: 10,
  },
  main: {
    borderRadius: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  dropDown: {
    borderRadius: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  placeHolder: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default DropDown;
