import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react';
import {StyleSheet} from 'react-native';
import HomeNavigator from './HomeNavigator';
import Login from './Login';
import SignUp from './SignUp';
import type { RouteProp, ParamListBase } from '@react-navigation/native';
import { MD2Colors } from 'react-native-paper';

type TabBarIconProps = {focused: boolean; color: string, size: number}

const icons: Record<string, string[]> = {
  HomeNavigator: ['home-circle', 'home-circle-outline'],
  Login: ['account-search', 'account-search-outline'],
  SignUp: ['account-clock', 'account-clock-outline']
}

const screenOptions = ({route}: {route: RouteProp<ParamListBase, string>}) => {
  return {
    headerShown: false,
    tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
      const {name} = route
      const focusedSize = focused ? size + 6 : size
      const focusedColor = focused ? MD2Colors.lightBlue500 : color
      const [icon, iconOutline] = icons[name]
      const iconName = focused ? icon : iconOutline
      return <Icon name={iconName} size={focusedSize} color={focusedColor} />
    }
  }
}

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name='HomeNavigator' component={HomeNavigator} 
        options={{tabBarLabel: 'Home', tabBarBadge: 3}} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  text: {fontSize: 20},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default TabNavigator;