import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login';
import SignUp from './SignUp';
import DrawerContent from './DrawerContent';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator()
const MainNavigator = () => {
  return (
      <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="SignUp" component={SignUp} />
        <Drawer.Screen name="TabNavigator" component={TabNavigator} options={{title: 'Home'}} />
      </Drawer.Navigator>
  );
};

export default MainNavigator;
