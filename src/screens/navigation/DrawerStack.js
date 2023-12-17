import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {CyclinderDeliveryScreen} from '../CyclinderDeliveryScreen';
import {HandoverScreen} from '../HandoverScreen';
import {HomeScreen} from '../HomeScreen';

function CustomDrawerContent(props) {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <Text>Welcome</Text>
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
  return (
    <DrawerStack.Navigator
      drawerType="front"
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <DrawerStack.Screen name="Home" component={HomeScreen} />
      <DrawerStack.Screen
        name="Cyclinder Delivery Screen"
        component={CyclinderDeliveryScreen}
      />
      <DrawerStack.Screen name="Handover" component={HandoverScreen} />
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
    flex: 1,
    height: 100,
    backgroundColor: '#F1F1F1',
    margin: 5,
    marginTop: 0,
    marginBottom: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
