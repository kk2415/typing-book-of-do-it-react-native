import React, { useCallback } from 'react';
import {StyleSheet} from 'react-native';
import { SafeAreaView, Text, TopBar, View, MaterialCommunityIcons as Icon } from '../theme';

import type {AppState} from '../store'
import * as C from '../store/counter'
import { useDispatch, useSelector } from 'react-redux';
import { NavigationHeader } from '../theme';

const Counter = () => {
  const counter = useSelector<AppState, C.State>(state => state.counter)
  const dispatch = useDispatch()
  const increaseCount = useCallback(() => {
    dispatch(C.increaseAction())
  }, [])
  const decreaseCount = useCallback(() => {
    dispatch(C.decreaseAction())
  }, [])

  return (
      <View style={[styles.flex]}>
        <NavigationHeader title="Counter" />
        <TopBar>
          <Icon name="plus" size={30} onPress={increaseCount} />
          <Icon name="minus" size={30} onPress={decreaseCount} />
        </TopBar>
        <View style={[styles.flex, styles.textView]}>
          <Text style={[styles.text]}>counter: {counter}</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  textView: {alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 30},
});

export default Counter;
