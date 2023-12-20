import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const CollectUserDetail = ({
  setValue,
  fieldValue,
  title,
  multiline = false,
}) => (
  <View style={styles.subcontainer}>
    <Text style={styles.titleText}>{title}</Text>
    <TextInput
      textBreakStrategy="simple"
      style={[styles.textinput, {height: multiline ? 40 : 30}]}
      onChangeText={setValue}
      value={fieldValue}
      multiline={multiline}
    />
  </View>
);

const NewUser = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const addUserToList = () => {};

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Add new user</Text>
      <CollectUserDetail setValue={setName} fieldValue={name} title={'Name'} />
      <CollectUserDetail
        setValue={setAddress}
        fieldValue={address}
        title={'Address'}
        multiline={true}
      />
      <CollectUserDetail
        setValue={setEmail}
        fieldValue={email}
        title={'Email'}
      />
      <View style={styles.button}>
        <TouchableOpacity onPress={addUserToList} style={styles.loginBtn}>
          <Text style={styles.loginText}>Create User </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewUser;

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
  titleText: {flex: 0.5, color: 'black'},
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
});
