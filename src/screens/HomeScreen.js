import React from 'react';
import {Text, View} from 'react-native';
import {StatusBar} from 'native-base';
import {styles} from './navigation/DrawerStack';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the HomeScreen page</Text>
      <StatusBar style="auto" />
    </View>
  );
}
