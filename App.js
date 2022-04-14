import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import CardDetail from './components/CardDetail';
import CardSmall from './components/CardSmall';
import LayoutButtons from './components/LayoutButtons';
import DropDown from './components/Dropdown';
import Header from './components/Header';
import BottomModal from './components/BottomModal';
import Footer from './components/Footer';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(111, modalVisible);
  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle={'dark-content'} />
      <Header />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.controlsContainer}>
          <DropDown />
          <LayoutButtons />
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <CardDetail />
          <CardSmall />
        </ScrollView>
        <BottomModal setModal={setModalVisible} />
        <View style={styles.controlsContainer}>
          <Footer modal={modalVisible} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    backgroundColor: 'white',
  },
  safeArea: {
    backgroundColor: '#F5F6F7',
    flexGrow: 1,
    marginTop: 10,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F5F6F7',
    zIndex: 1,
  },
  scrollViewContainer: {
    paddingTop: 30,
    backgroundColor: '#F5F6F7',
    flexGrow: 1,
  },
});

export default App;
