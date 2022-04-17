import React, {useState, useRef, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import CardDetail from '../components/CardDetail';
import CardSmall from '../components/CardSmall';
import LayoutButtons from '../components/LayoutButtons';
import DropDown from '../components/Dropdown';
import Header from '../components/Header';
import BottomModal from '../components/BottomModal';
import Footer from '../components/Footer';
import documentsApi from '../services/documentsApi';
import {getSocket} from '../websocket/websocket';
import ChallengeProvider from '../context/ChallengeProvider';
import {ChallengeContext} from '../context/ChallengeProvider';

const Main = () => {
  const modalRef = useRef(null);
  const [documents, setDocuments] = useState([]);
  const [activeLayout, setActiveLayout] = useState('list');

  const context = useContext(ChallengeContext);

  useEffect(() => {
    handleApiData();
  }, []);

  useEffect(() => {
    handleSocket();
  }, []);

  const handleSocket = () => {
    const socket = getSocket();
    socket.onmessage = ({data}) => {
      addNotification(data.toString());
    };
  };

  const addNotification = notification => {
    context.setContextData(prevContext => {
      return {
        notifications: [...prevContext?.notifications, notification],
      };
    });
  };

  const handleApiData = async () => {
    const api = documentsApi();

    try {
      const data = await api.getInfo();

      setDocuments(data);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle={'dark-content'} />
      <Header />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.controlsContainer}>
          <DropDown />
          <LayoutButtons handleLayout={setActiveLayout} />
        </View>
        <View style={styles.scrollFooterWrapper}>
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={activeLayout === 'grid' ? styles.columns : null}>
              {documents.map((document, index) =>
                activeLayout === 'list' ? (
                  <CardDetail document={document} key={document?.ID} />
                ) : (
                  <CardSmall document={document} key={document?.ID} />
                ),
              )}
            </View>
          </ScrollView>
          <View style={styles.controlsContainer}>
            <Footer modalRef={modalRef} />
          </View>
        </View>
        <BottomModal forwardedRef={modalRef} />
      </SafeAreaView>
    </>
  );
};;;;;;;;;;;;;;;;;;;;;

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    backgroundColor: 'white',
  },
  columns: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  scrollFooterWrapper: {
    flex: 1,
  },
});

export default Main;
