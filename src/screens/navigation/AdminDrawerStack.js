import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AdminHome from '../admin/AdminHome';
import StockReport from '../admin/StockReport';
import FinanceReport from '../admin/FinanceReport';

function CustomDrawerContent(props) {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <Text style={styles.customerName}>Welcome admin</Text>
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
export function AdminDrawerScreenStack() {
  return (
    <DrawerStack.Navigator
      drawerType="front"
      screenOptions={{headerShown: true}}
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <DrawerStack.Screen name="Home" component={AdminHome} />
      <DrawerStack.Screen name="Stock Report" component={StockReport} />
      <DrawerStack.Screen name="Finance Report" component={FinanceReport} />
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
  customerName: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
});
