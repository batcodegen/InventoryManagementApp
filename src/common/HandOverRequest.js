import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import string from '../helpers/strings.json';
import DropDownFile from '../common/DropDown';
import {useGetApi} from '../services/useApi';

const HandOverRequest = () => {
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const addRequestToList = () => {};
  const {data, error, isLoading} = useGetApi('/customers');

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Create new request</Text>
      <View style={styles.dataContainer}>
        <View style={styles.titleContainer}>
          <Text>{string.customerName}</Text>
        </View>
        <View style={styles.valueContainer}>
          <DropDownFile
            data={data}
            labelField={'name'}
            valueField={'name'}
            onSelect={item => console.log(item)}
          />
        </View>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.titleText}>Quantity</Text>
        <TextInput
          textBreakStrategy="simple"
          style={styles.textinput}
          onChangeText={setQuantity}
          value={quantity}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={addRequestToList} style={styles.loginBtn}>
          <Text style={styles.loginText}>Create Request </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HandOverRequest;

const styles = StyleSheet.create({
  contentContainer: {flex: 1, padding: 20},
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  titleText: {flex: 0.5, color: 'black', textAlign: 'center'},
  textinput: {
    flex: 1,
    marginStart: 10,
    borderRadius: 5,
    backgroundColor: 'ghostwhite',
    color: 'black',
    padding: 0,
    paddingStart: 2,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#6495ED',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
  loginText: {
    color: 'white',
  },
  button: {flex: 1, justifyContent: 'flex-end'},
  dataContainer: {flexDirection: 'row', marginBottom: 5},
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  valueContainer: {flex: 1},
});
