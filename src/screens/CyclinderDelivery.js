import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const CyclinderDelivery = () => {
  const [state, setState] = useState({
    emailId: '',
    password: '',
    userData: {fname: '', lastName: ''},
  });

  const handleOnChange = (text, input) => {
    setState(prevState => ({...prevState, [input]: text}));
  };

  const onPressSubmit = async () => {
    // handle submit logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login</Text>
      <Text style={styles.subTitle}> Welcome Back!</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          onChangeText={text => {
            handleOnChange(text, 'emailId');
          }}>
          Customer Name
        </TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          onChangeText={text => {
            handleOnChange(text, 'password');
          }}
        />
      </View>
      <TouchableOpacity onPress={() => onPressSubmit()} style={styles.loginBtn}>
        <Text style={styles.loginText}>Submit </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitle: {
    fontSize: 15,
    color: '#6495ED',
    marginBottom: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#6495ED',
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgotAndSignUpText: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#6495ED',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

export default CyclinderDelivery;
