import React, {useContext, View} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreenStack} from './src/screens/navigation/HomeStack';
import {AuthScreenStack} from './src/screens/navigation/AuthStack';
import {AuthContext} from './src/contexts/AuthContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ActivityIndicator} from 'react-native';

export default function AppNavigation() {
  const {isLoading, userToken} = useContext(AuthContext);
  const Stack = createNativeStackNavigator();

  //checking the user authentication
  // React.useEffect(() => {
  //   const bootstrapAsync = async () => {
  //     let token = null;
  //     try {
  //       const user = await checkAuth();
  //       const {jwtToken} = user;
  //       token = jwtToken;
  //     } catch (e) {
  //       console.log('error', e);
  //     }
  //     dispatch({type: 'RESTORE_TOKEN', token});
  //   };
  //   bootstrapAsync();
  // }, [dispatch]);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" screenOptions={{headerShown: false}}>
          {!isLoading && userToken == null ? (
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
