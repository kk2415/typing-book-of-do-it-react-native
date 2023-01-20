import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntIcon from 'react-native-vector-icons/AntDesign'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react';
import {StyleSheet} from 'react-native';
import HomeNavigator from './HomeNavigator';
import Login from './Login';
import SignUp from './SignUp';
import type { RouteProp, ParamListBase } from '@react-navigation/native';

type TabBarIconProps = {focused: boolean; color: string, size: number}

const screenOptions = ({route}: {route: RouteProp<ParamListBase, string>}) => {
  return {
    headerShown: false,
    tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
      const {name} = route
      switch (name) {
        case 'Login':
            return <AntIcon name='login' size={size} color={color} />
        case 'SignUp':
          return <FontAwesomeIcon name='sign-in' size={size} color={color} />
      }
      return <Icon name="home" size={size} color={color} />
    }
  }
}

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name='Login' component={Login} />
      <Tab.Screen name='SignUp' component={SignUp} />
      <Tab.Screen name='HomeNavigator' component={HomeNavigator} options={{tabBarLabel: 'Home'}} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  text: {fontSize: 20},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default MainNavigator;