import React, {useContext, useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {HomeScreen} from '../HomeScreen';
import {HandoverScreen} from '../HandoverScreen';
import {CylinderDelivery} from '../CylinderDelivery';
import {AuthContext} from '../../contexts/AuthContext';

function CustomDrawerContent(props) {
  const {userData} = useContext(AuthContext);
  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <Text style={styles.welcomestyle}>{'Welcome'}</Text>
          <Text
            style={
              styles.customerName
            }>{`${userData?.first_name} ${userData?.last_name}`}</Text>
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
      screenOptions={{headerShown: true}}
      initialRouteName="HomeScreen"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <DrawerStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerTitle: 'Home'}}
      />
      <DrawerStack.Screen
        name="Cylinder Delivery"
        component={CylinderDelivery}
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
    backgroundColor: '#F1F1F1',
    margin: 5,
    marginTop: 0,
    marginBottom: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomestyle: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
  customerName: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
});
