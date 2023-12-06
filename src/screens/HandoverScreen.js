import React from 'react';
import {Text, View} from 'react-native';
import {StatusBar} from 'native-base';
import {styles} from './navigation/DrawerStack';

export function HandoverScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the HandoverScreen page</Text>
      <StatusBar style="auto" />
    </View>
  );
}
