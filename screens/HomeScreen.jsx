import React from 'react';
import {Button, Text, View} from 'react-native';
import {StatusBar} from 'native-base';
import {styles} from './DrawerStack';

export function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      {/* PAGE CONTENT */}
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="next page" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
}
