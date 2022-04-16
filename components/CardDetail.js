import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {collaborators, link} from '../static/images';

const CardDetail = ({document}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerTitle}>{document.Title}</Text>
        <Text style={styles.headerSubtitle}>Version {document.Version}</Text>
      </View>
      <View style={styles.cardContentWrapper}>
        <View style={styles.cardContentColumn}>
          <View style={styles.cardContentHeader}>
            <Image source={collaborators} style={styles.cardContentIcon} />
            <Text style={styles.cardContentText}>Contributors</Text>
          </View>
          <View style={styles.cardContentList}>
            {document.Contributors?.map(contributor => (
              <Text key={contributor?.ID} style={styles.cardList}>
                {contributor?.Name}
              </Text>
            ))}
          </View>
        </View>
        <View>
          <View style={styles.cardContentHeader}>
            <Image source={link} style={styles.cardContentIcon} />
            <Text style={styles.cardContentText}>Attachments</Text>
          </View>
          <View style={styles.cardContentList}>
            {document.Attachments?.map((attachment, index) => (
              <Text key={index} style={styles.cardList}>
                {attachment}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2.5,
    },
    shadowOpacity: 0.2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    width: '70%',
  },
  headerSubtitle: {
    fontSize: 12,
    color: 'gray',
  },
  cardContentWrapper: {
    marginTop: 16,
    flexDirection: 'row',
  },
  cardContentColumn: {
    marginRight: 48,
  },
  cardContentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardContentText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardContentIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  cardContentList: {
    flexDirection: 'column',
    marginTop: 8,
  },
  cardList: {
    fontSize: 10,
    color: 'gray',
    marginBottom: 4,
  },
});

export default CardDetail;
