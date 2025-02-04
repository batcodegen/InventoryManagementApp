import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useGetApi} from '../../services/useApi';
import Loader from '../../common/Loader';
import {formatToLocalRupee} from '../../helpers/utils';

const FinanceReport = () => {
  const {data, isLoading, error} = useGetApi('/financereport');
  return (
    <View style={styles.topcontainer}>
      <View style={styles.container}>
        <View style={styles.revenueContainer}>
          <Text style={styles.title}>{'Total Revenue'}</Text>
          <Text style={styles.number}>{`${formatToLocalRupee(
            data?.totalrevenue,
          )}`}</Text>
        </View>
        <View style={styles.revenueContainer}>
          <Text style={styles.title}>{'Total Purchase'}</Text>
          <Text style={styles.number}>{`${formatToLocalRupee(
            data?.totalpurchase,
          )}`}</Text>
        </View>
        <View style={styles.revenueContainer}>
          <Text style={styles.title}>{'Total Salary'}</Text>
          <Text style={styles.number}>{`${formatToLocalRupee(
            data?.totalsalary,
          )}`}</Text>
        </View>
        <View style={styles.revenueContainer}>
          <Text style={styles.title}>{'Total Expenses'}</Text>
          <Text style={styles.number}>{`${formatToLocalRupee(
            data?.totalexpenses,
          )}`}</Text>
        </View>
        <View style={styles.revenueContainer}>
          <Text style={styles.title}>{'Total Profit'}</Text>
          <Text style={styles.number}>{`${formatToLocalRupee(
            data?.profit,
          )}`}</Text>
        </View>
      </View>
      <Loader isLoading={isLoading} />
    </View>
  );
};

export default FinanceReport;

const styles = StyleSheet.create({
  topcontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  revenueContainer: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginBottom: 20,
    padding: 20,
    alignItems: 'center',
    width: '48%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {fontSize: 18, textAlign: 'center'},
  number: {fontSize: 16, marginTop: 10, fontWeight: 'bold'},
});
