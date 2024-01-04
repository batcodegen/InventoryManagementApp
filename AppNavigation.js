import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreenStack} from './src/screens/navigation/HomeStack';
import {AuthScreenStack} from './src/screens/navigation/AuthStack';
import {AuthContext} from './src/contexts/AuthContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AppNavigation() {
  const {userToken} = useContext(AuthContext);
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" screenOptions={{headerShown: false}}>
          {!userToken ? (
            // No token found, user isn't signed in
            <Stack.Screen name="Auth" component={AuthScreenStack} />
          ) : (
            // User is signed in
            <Stack.Screen name="Main" component={HomeScreenStack} />
          )}
        </Stack.Navigator>
        {/* <HomeScreenStack></HomeScreenStack> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
