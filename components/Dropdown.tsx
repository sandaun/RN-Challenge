import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import {ChallengeContext} from '../context/ChallengeProvider';
import {
  PLACEHOLDER,
  VERSION,
  TITLE,
  VERSION_VALUE,
  TITLE_VALUE,
} from '../static/constants';

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {label: TITLE, value: TITLE_VALUE},
    {label: VERSION, value: VERSION_VALUE},
  ]);

  const context = useContext(ChallengeContext);

  useEffect(() => {
    if (value) {
      addFilterValue();
    }
  }, [value]);

  const addFilterValue = () => {
    context.setContextData?.(prevContext => {
      return {
        ...prevContext,
        filterBy: value,
      };
    });
  };

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
