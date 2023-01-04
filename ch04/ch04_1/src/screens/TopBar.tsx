import React, { Dispatch, FC, SetStateAction, useCallback } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {MD2Colors} from 'react-native-paper';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as D from '../data'

export type TopBarProps = {
  setPeople: Dispatch<SetStateAction<D.IPerson[]>>
}

const TopBar: FC<TopBarProps> = ({setPeople}) => {
  const add = useCallback(() => {
    setPeople(prevPeople => [D.createRandomPerson(), ...prevPeople])
  }, [])

  const deleteAll = useCallback(() => {
    setPeople(notUsed => [])
  }, [])

  return (
      <View style={[styles.topBar]}>
        <Text style={[styles.textButton]} onPress={add}>add</Text>
        <Text style={[styles.textButton]} onPress={deleteAll}>delete all</Text>
      </View>
  );
};
export default TopBar;

const styles = StyleSheet.create({
  topBar: {flexDirection: 'row', padding: 5, justifyContent: 'space-between', backgroundColor: MD2Colors.lightBlue700},
  textButton: {color: 'white', fontSize: 20},
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
