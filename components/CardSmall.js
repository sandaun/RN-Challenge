import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardSmall = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.headerTitle}>Hop Rod Rye</Text>
      <Text style={styles.headerSubtitle}>Version 2.6.16</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '50%',
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2.5,
    },
    shadowOpacity: 0.2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
});

export default CardSmall;
