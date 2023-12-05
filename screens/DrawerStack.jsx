import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {HomeScreen} from './HomeScreen';
import {ProfileScreen} from './ProfileScreen';
import {useAuthDispatch} from '../contexts/AuthContext';

function CustomDrawerContent(props) {
  const dispatch = useAuthDispatch();

  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <Text>HEADER</Text>
        </View>
        <View style={{flex: 1}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <Button
          title="LOGOUT"
          onPress={async () => {
            props.navigation.closeDrawer();
            try {
              //Logout logic
              dispatch({type: 'SIGN_OUT'});
            } catch (e) {
              console.log(e);
            }
          }}
        />
      </View>
    </>
  );
}

const DrawerStack = createDrawerNavigator();
export function DrawerScreenStack() {
  return (
    <DrawerStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <DrawerStack.Screen name="Home" component={HomeScreen} />
      <DrawerStack.Screen name="Profile" component={ProfileScreen} />
    </DrawerStack.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerHeader: {
    height: 100,
    backgroundColor: '#F1F1F1',
    margin: 10,
    marginTop: 0,
    marginBottom: 8,
    borderRadius: 8,
  },
});
