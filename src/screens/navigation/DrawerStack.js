import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {HomeScreen} from '../HomeScreen';
import {HandoverScreen} from '../HandoverScreen';

function CustomDrawerContent(props) {
  useEffect(() => {
    console.log('inside custom drawer stack');
  });
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
  useEffect(() => {
    console.log('inside  drawer stack');
  });
  return (
    <DrawerStack.Navigator
      drawerType="front"
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <DrawerStack.Screen name="Home" component={HomeScreen} />
      <DrawerStack.Screen name="HandOver" component={HandoverScreen} />
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
