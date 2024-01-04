import React from 'react';
import {AuthProvider} from './src/contexts/AuthContext';
import AppNavigation from './AppNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.main}>
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  main: {flex: 1},
});
