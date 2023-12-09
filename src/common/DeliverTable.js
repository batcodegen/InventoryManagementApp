import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import DropDownFile from './DropDown';
import weights from '../dummydata/containerweight.json';

const DeliverTable = ({onRemove, index, updateData, itemsLength}) => {
  const [quantity, setQuantity] = useState('1');
  const [selectedWeight, setSelectedWeight] = useState(weights[0].value);
  const [rate, setRate] = useState(100);

  const calculateRate = (weight, quantityText) => {
    const selectedObject = weights.find(item => item.value === weight);
    const rates = quantityText
      ? selectedObject.price * parseFloat(quantityText)
      : 0;
    setRate(rates);
    updateData(index, {quantity: quantityText, weight: weight, rate: rates});
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.dropContainer}>
          <DropDownFile
            data={weights}
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
        <View style={styles.rateContainer}>
          <Text ellipsizeMode="tail">{`₹${rate}`}</Text>
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

export default DeliverTable;

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
