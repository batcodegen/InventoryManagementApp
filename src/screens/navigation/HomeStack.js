import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DrawerScreenStack} from './DrawerStack';
import {AdminDrawerScreenStack} from './AdminDrawerStack';

const HomeStack = createNativeStackNavigator();
export function HomeScreenStack() {
  return (
    <HomeStack.Navigator>
      {false ? (
        <HomeStack.Screen
          name="DrawerHome"
          component={DrawerScreenStack}
          options={{headerShown: false}}
        />
      ) : (
        <HomeStack.Screen
          name="AdminDrawerHome"
          component={AdminDrawerScreenStack}
          options={{headerShown: false}}
        />
      )}
    </HomeStack.Navigator>
  );
}
