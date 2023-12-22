import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';
import {LoginScreen} from '../LoginScreen';

const AuthStack = createNativeStackNavigator();
export function AuthScreenStack() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name="Login"
        style={styles.title}
        component={LoginScreen}
      />
    </AuthStack.Navigator>
  );
}

export const styles = StyleSheet.create({
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
  error: {
    color: 'red',
    fontSize: 20,
    marginBottom: 12,
  },
});
