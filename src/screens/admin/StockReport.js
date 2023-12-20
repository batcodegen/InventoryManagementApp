import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useGetApi} from '../../services/useApi';
import Loader from '../../common/Loader';
import DropDownFile from '../../common/DropDown';

const StockReport = () => {
  const {data, isLoading, error} = useGetApi('/stockreport');
  const [selectedItem, setSelectedItem] = useState({});
  useEffect(() => {
    if (data) {
      setSelectedItem(data?.locationreport[0]);
    }
  }, [data]);

  const renderItem = ({item, index}) => (
    <View style={[styles.card, styles.shadow]} key={index}>
      <Text style={styles.filledText}>{item.weight}</Text>
      <Text style={styles.filledValue}>{item.quantity}</Text>
    </View>
  );

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.totalsummary}>Total summary</Text>
        {data?.summaryreport?.map(item => (
          <View key={item.id}>
            <Text style={styles.weightText}>{item.weight}</Text>
            <View style={styles.subcontainer}>
              <View style={[styles.cardfilled, styles.shadow]}>
                <Text style={styles.filledText}>{'Filled'}</Text>
                <Text style={styles.filledValue}>{item.filled}</Text>
              </View>
              <View style={[styles.cardempty, styles.shadow]}>
                <Text style={styles.filledText}>{'Empty'}</Text>
                <Text style={styles.filledValue}>{item.empty}</Text>
              </View>
            </View>
          </View>
        ))}
        <Text style={styles.locationsummary}>Location summary</Text>
        <View style={styles.dataContainer}>
          <View style={styles.titleContainer}>
            <Text style={{fontSize: 16}}>{'Location: '}</Text>
          </View>
          <View style={styles.valueContainer}>
            <DropDownFile
              data={data?.locationreport}
              labelField={'location'}
              valueField={'location'}
              showSearch={false}
              onSelect={item => {
                const selectedOptn = data?.locationreport?.filter(
                  i => item === i.location,
                );
                setSelectedItem(selectedOptn[0]);
              }}
            />
          </View>
        </View>
        <Text style={styles.tableTitle}>{'Active Stock (Empty)'}</Text>
        <FlatList
          data={selectedItem?.empty ?? []}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
        />
        <Text style={styles.tableTitle}>{'Active Stock (Filled)'}</Text>
        <FlatList
          data={selectedItem?.filled ?? []}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
        />
      </ScrollView>
      <Loader isLoading={isLoading} />
    </>
  );
};

export default StockReport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  contentContainer: {paddingBottom: 50},
  totalsummary: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shadow: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardfilled: {
    paddingVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 50,
    backgroundColor: 'lightblue',
    marginStart: 20,
  },
  cardempty: {
    paddingVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 50,
    backgroundColor: 'lightcyan',
    marginEnd: 20,
  },
  weightText: {marginVertical: 10, fontWeight: '600'},
  filledText: {
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  filledValue: {textAlign: 'center', color: 'black', fontSize: 24},
  locationsummary: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  dataContainer: {flexDirection: 'row', marginBottom: 5},
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  valueContainer: {flex: 1, borderWidth: 1, borderRadius: 5},
  tableTitle: {fontWeight: 'bold', fontSize: 14, marginVertical: 20},
  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
});
