import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {DrawerScreenStack} from './DrawerStack';
import {AdminDrawerScreenStack} from './AdminDrawerStack';
import {AuthContext} from '../../contexts/AuthContext';

const HomeStack = createNativeStackNavigator();
export function HomeScreenStack() {
  const {userData} = useContext(AuthContext);
  console.log('--ser--', userData);
  return (
    <HomeStack.Navigator>
      {userData?.role !== 'admin' ? (
        <HomeStack.Screen
          name="AdminDrawerHome"
          component={AdminDrawerScreenStack}
          options={{headerShown: false}}
        />
      ) : (
        <HomeStack.Screen
          name="DrawerHome"
          component={DrawerScreenStack}
          options={{headerShown: false}}
        />
      )}
    </HomeStack.Navigator>
  );
}
