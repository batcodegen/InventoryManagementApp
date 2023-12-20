import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGetApi} from '../services/useApi';
import Loader from '../common/Loader';

export function HomeScreen() {
  const {data, isLoading, error} = useGetApi('/overview');

  return (
    <View style={styles.container}>
      <View style={styles.card1}>
        <Text>{`Total empty cylinders : ${
          data?.emptyCylinderData?.total ?? 0
        }`}</Text>
      </View>
      <View style={styles.card2}>
        <Text>{`Total filled cylinders: ${
          data?.filledCylinderData?.total ?? 0
        }`}</Text>
        <Text>{`Total amount collected : ${
          data?.filledCylinderData?.amount ?? 0
        }`}</Text>
      </View>
      <Loader isLoading={isLoading} />
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
    backgroundColor: 'lightCyan',
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
