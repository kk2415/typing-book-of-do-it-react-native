import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import {MD2Colors} from 'react-native-paper';
import * as D from '../data/faker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const name = D.randomName();
const avatarUrl = D.randomAvatarUrl(name);
const title = 'TopBar';

const TopBar = () => {
  return (
      <View style={[styles.view]}>
        <Image style={styles.avatar} source={{uri: avatarUrl}}></Image>
        <View style={styles.centerView}>
          <Text style={[styles.text]}>{name}</Text>
        </View>
        <Icon name="menu" size={24} color="white"></Icon>
      </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 5,
    backgroundColor: MD2Colors.amber500,
  },
  text: {fontSize: 20, textAlign: 'center'},
  avatar: {width: 40, height: 40, borderRadius: 20},
  centerView: {flex: 1},
});

export default TopBar;
