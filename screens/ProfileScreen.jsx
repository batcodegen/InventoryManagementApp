import React from 'react';
import {Text, View} from 'react-native';
import {StatusBar} from 'native-base';
import {styles} from './DrawerStack';

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the ProfileScreen page</Text>
      <StatusBar style="auto" />
    </View>
  );
}
