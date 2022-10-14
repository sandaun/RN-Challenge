import React, {useState, useContext, useEffect, useMemo} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';

import {bell} from '../static/images';
import {ChallengeContext} from '../context/ChallengeProvider';

import {DOCUMENTS} from '../static/constants';

const Header: React.FC = () => {
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  const context = useContext(ChallengeContext);

  const numberOfNotifications = useMemo(
    () =>
    context.contextData?.Notifications?.length && context.contextData?.Notifications?.length > 9
        ? '9+'
        : context.contextData?.Notifications.length,
    [context.contextData?.Notifications],
  );

  useEffect(() => {
    if (numberOfNotifications && numberOfNotifications > 0) {
      setIsNotificationShown(true);
    }
  }, [numberOfNotifications]);

  const clearNotifications = () => {
    context.setContextData?.(prevContext => {
      return {
        ...prevContext,
        Notifications: [],
      };
    });
    setIsNotificationShown(false);
  };
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.title}>{DOCUMENTS}</Text>
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={clearNotifications}>
        {isNotificationShown && (
          <View style={styles.notification}>
            <Text style={styles.notificationText}>{numberOfNotifications}</Text>
          </View>
        )}
        <Image source={bell} style={styles.layoutIcon} />
      </TouchableOpacity>
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
    width: 16,
    height: 16,
    borderRadius: 8,
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
