import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react';
import HomeNavigator from './HomeNavigator';
import type { RouteProp, ParamListBase } from '@react-navigation/native';
import { MD2Colors } from 'react-native-paper';
import Clock from './Clock';
import Counter from './Counter';

type TabBarIconProps = {focused: boolean; color: string, size: number}

const icons: Record<string, string[]> = {
  HomeNavigator: ['home-circle', 'home-circle-outline'],
  Counter: ['eye-plus', 'eye-plus-outline'],
  Clock: ['clock-alert', 'clock-alert-outline'],
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
      <Tab.Screen name='Counter' component={Counter} />
      <Tab.Screen name='Clock' component={Clock} />
    </Tab.Navigator>
  );
};

export default TabNavigator;