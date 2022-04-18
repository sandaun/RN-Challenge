import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {VERSION} from '../static/constants';

const CardSmall = ({document}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.headerTitle}>{document.Title}</Text>
      <Text
        style={styles.headerSubtitle}>{`${VERSION} ${document.Version}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '42%',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    marginLeft: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2.5,
    },
    shadowOpacity: 0.2,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 12,
    color: 'gray',
  },
});

export default CardSmall;
