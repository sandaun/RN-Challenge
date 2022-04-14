import React, {useRef, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';

export const BottomModal = props => {
  const modalizeRef = useRef(null);

  useEffect(() => {
    props.setModal(modalizeRef.current);
  }, []);

  return (
    <>
      {/* <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity> */}

      <Modalize ref={modalizeRef} overlayStyle={{backgroundColor: 'gray', height: 100}}>
        <Text>ljkklj</Text>
      </Modalize>
    </>
  );
};

export default BottomModal;
