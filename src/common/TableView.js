import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TableView = ({title, value}) => {
  return (
    <View style={styles.dataContainer}>
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text>{value}</Text>
      </View>
    </View>
  );
};

export default TableView;

const styles = StyleSheet.create({
  dataContainer: {flexDirection: 'row', marginVertical: 5},
  titleContainer: {flex: 1, justifyContent: 'center'},
  valueContainer: {flex: 1, alignItems: 'flex-end', marginEnd: 5},
});
