import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AdminHome = ({navigation}) => {
  const navigateTo = screenName => {
    navigation.navigate(screenName);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card1}
        activeOpacity={0.6}
        onPress={() => navigateTo('Stock Report')}>
        <Text style={styles.text}>{'Stock Report'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card2}
        activeOpacity={0.6}
        onPress={() => navigateTo('Finance Report')}>
        <Text style={styles.text}>{'Finance Report'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdminHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontWeight: 'bold', fontSize: 20},
  card1: {
    width: '80%',
    height: 100,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  card2: {
    marginTop: 20,
    width: '80%',
    height: 100,
    backgroundColor: 'lightcyan',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
