import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card1}>
        <Text>Total empty cylinders : 20</Text>
      </View>
      <View style={styles.card2}>
        <Text>Total filled cylinders: 100</Text>
        <Text>Total amount collected : 2200</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
