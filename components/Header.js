import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';

import {bell} from '../static/images';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.title}>Documents</Text>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>1</Text>
        </View>
        <Image source={bell} style={styles.layoutIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 8,
  },
  layoutIcon: {
    width: 16,
    height: 16,
    tintColor: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  notification: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#5781E4',
    zIndex: 1,
    top: 4,
    right: 4,
  },
  notificationText: {
    color: 'white',
    fontSize: 10,
  },
});

export default Header;
