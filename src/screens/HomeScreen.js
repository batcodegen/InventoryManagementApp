import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGetApi} from '../services/useApi';
import Loader from '../common/Loader';

export function HomeScreen() {
  const {data, isLoading, error} = useGetApi('/overview');
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.card1}>
        <Text style={styles.title}>{'Total empty cylinders'}</Text>
        <Text style={styles.valueText}>
          {data?.emptyCylinderData?.total ?? 0}
        </Text>
      </View>
      <View style={styles.card1}>
        <Text style={styles.title}>{'Total filled cylinders'}</Text>
        <Text style={styles.valueText}>
          {data?.filledCylinderData?.total ?? 0}
        </Text>
      </View>
      <View style={styles.card1}>
        <Text style={styles.title}>{'Total amount collected'}</Text>
        <Text style={styles.valueText}>
          {data?.filledCylinderData?.amount ?? 0}
        </Text>
      </View>
      <Loader isLoading={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'space-between',
  },
  valueText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  title: {textAlign: 'center'},
  card1: {
    width: '45%',
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
    paddingHorizontal: 10,
    marginBottom: 20,
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
