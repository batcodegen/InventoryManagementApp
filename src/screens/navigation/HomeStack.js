import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerScreenStack} from './DrawerStack';
import {StatusBar} from 'native-base';
import {HandoverScreen} from '../HandoverScreen';

const HomeStack = createNativeStackNavigator();
export function HomeScreenStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={DrawerScreenStack} />
      <HomeStack.Screen name="HandOver" component={HandoverScreen} />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  'modal-container': {
    flex: 1,
    alignItems: 'center',
    borderRadius: 18,
  },
});
