import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const iconSize = 30, iconColor = 'white'
const icons = ['home', 'table-search', 'face-profile-woman', 'account-settings']
const title = 'BottomBar';
const BottomBar = () => {
  const children = icons.map((name) => (
    <Icon key={name} name={name} size={iconSize} color={iconColor} />
  ))

  return <View style={[styles.view]}>{children}</View>
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: MD2Colors.blue500,
  },
  text: {fontSize: 20, color: 'white'},
});

export default BottomBar;
