import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DropDownFile from './DropDown';
import {useGetApi} from '../services/useApi';

const CollectTable = ({onRemove, index, updateData, itemsLength}) => {
  const {data, isLoading, error} = useGetApi('/weights');
  const [quantity, setQuantity] = useState('0');
  const [selectedWeight, setSelectedWeight] = useState('');

  useEffect(() => {
    if (data) {
      setSelectedWeight(data?.[0]?.value);
    }
  }, [data]);

  const calculateRate = (weight, quantityText) => {
    updateData(index, {quantity: quantityText, weight: weight});
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.dropContainer}>
          <DropDownFile
            data={data}
            labelField={'value'}
            valueField={'value'}
            showSearch={false}
            onSelect={item => {
              setSelectedWeight(item);
              calculateRate(item, quantity);
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={quantity}
            style={styles.input}
            maxLength={2}
            keyboardType={'numeric'}
            onChangeText={text => {
              const sanitizedText = text.replace(/[^0-9]/g, '');
              setQuantity(sanitizedText);
              calculateRate(selectedWeight, sanitizedText);
            }}
          />
        </View>
        {index > 0 ? (
          <TouchableOpacity style={{flex: 0.2}} onPress={() => onRemove(index)}>
            <Text>{'-'}</Text>
          </TouchableOpacity>
        ) : (
          <View style={{flex: itemsLength > 1 ? 0.2 : 0}} />
        )}
      </View>
    </View>
  );
};

export default CollectTable;

const styles = StyleSheet.create({
  container: {flex: 1},
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  weightContainer: {flex: 1, alignItems: 'center'},
  quantityContainer: {flex: 1, alignItems: 'center'},
  rateTextContainer: {flex: 0.8, alignItems: 'center'},
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropContainer: {flex: 1},
  inputContainer: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 5,
    borderColor: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    width: 50,
  },
  rateContainer: {flex: 0.8, alignItems: 'center'},
});
