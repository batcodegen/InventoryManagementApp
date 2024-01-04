import React, {useState, useEffect, useContext} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './navigation/AuthStack';
import {AuthContext} from '../contexts/AuthContext';

export const LoginScreen = ({navigation}) => {
  const [touchstatus, setTouchStatus] = useState({
    touchedEmail: false,
    touchedPassword: false,
  });
  const [state, setState] = useState({
    emailId: '',
    password: '',
    userData: {fname: '', lastName: ''},
  });
  const [errors, setErrors] = useState({});
  const {isLoading, login} = useContext(AuthContext);

  useEffect(() => {
    const errorObj = {};
    // Validate email if touched
    if (touchstatus.touchedEmail) {
      if (state.emailId.trim() === '') {
        errorObj.email = 'Email is required';
      } else if (!isValidEmail(state.emailId)) {
        errorObj.email = 'Invalid email';
      } else {
        errorObj.email = '';
      }
    }

    // Validate password if touched
    if (touchstatus.touchedPassword) {
      if (state.password.trim() === '') {
        errorObj.password = 'Password is required';
      } else if (state.password.length < 6) {
        errorObj.password = 'Password must be at least 6 characters';
      } else {
        errorObj.password = '';
      }
    }
    setErrors(errorObj);
  }, [
    state.emailId,
    state.password,
    touchstatus.touchedEmail,
    touchstatus.touchedPassword,
  ]);

  const isValidEmail = value => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const isSubmitDisabled = () => {
    return (
      state.emailId.trim() === '' ||
      state.password.trim() === '' ||
      errors.email !== '' ||
      errors.password !== '' ||
      isLoading
    );
  };

  const onPressLogin = async (email, password) => {
    login({email, password});
  };

  const handleOnChange = (text, input) => {
    setState(prevState => ({...prevState, [input]: text}));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login</Text>
      <Text style={styles.subTitle}> Welcome!</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          value={state.emailId}
          placeholderTextColor="#A9A9A9"
          onChangeText={text => {
            handleOnChange(text, 'emailId');
          }}
          onBlur={() =>
            setTouchStatus(prevState => ({...prevState, touchedEmail: true}))
          }
        />
      </View>
      {touchstatus.touchedEmail && errors.email !== '' && (
        <Text style={styles.error}>{errors.email}</Text>
      )}

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          value={state.password}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          onChangeText={text => {
            handleOnChange(text, 'password');
          }}
          onFocus={() =>
            setTouchStatus(prevState => ({...prevState, touchedPassword: true}))
          }
        />
      </View>
      {touchstatus.touchedPassword && errors.password !== '' && (
        <Text style={styles.error}>{errors.password}</Text>
      )}
      <TouchableOpacity
        onPress={() => onPressLogin(state.emailId, state.password)}
        disabled={isSubmitDisabled()}
        style={
          isSubmitDisabled()
            ? [styles.loginBtn, {backgroundColor: 'lightgray'}]
            : styles.loginBtn
        }>
        <Text style={styles.loginText}>LOGIN </Text>
      </TouchableOpacity>
      {/* Display error messages */}
    </View>
  );
};
