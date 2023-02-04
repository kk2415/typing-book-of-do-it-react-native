import React from 'react';
import {StyleSheet} from 'react-native';
import { SafeAreaView, Text, TopBar, View } from '../theme/navigation';
import type { AppState } from '../store';
import * as CL from '../store/clock'
import { useDispatch, useSelector } from 'react-redux';
import { useInterval } from '../hooks/useInterval';
import { NavigationHeader } from '../theme';

const Clock = () => {
  const {currentDate, currentTime} = useSelector<AppState, CL.State>(({clock}) => clock)
  const dispatch = useDispatch()
  
  useInterval(() => {
    dispatch(CL.setTimeAction(new Date))
  }, 1000)

  return (
      <View style={[styles.flex]}>
        <NavigationHeader title="Clock" />
        <TopBar />
        <View style={[styles.flex, styles.textView]}>
          <Text style={[styles.text]}>{currentDate}</Text>
          <Text style={[styles.text]}>{currentTime}</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  textView: {alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 30},
});

export default Clock;
