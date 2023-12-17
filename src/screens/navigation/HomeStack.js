import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerScreenStack} from './DrawerStack';
import {StatusBar} from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from '@react-navigation/native';

function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the detail page</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();
export function HomeScreenStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="DrawerHome"
        component={DrawerScreenStack}
        options={({navigation, route}) => ({
          headerShown: false,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Ionicon name={'menu'} size={20} />
            </Pressable>
          ),
        })}
      />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
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
