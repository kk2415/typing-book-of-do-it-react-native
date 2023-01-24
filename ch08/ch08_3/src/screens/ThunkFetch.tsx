import React from 'react';
import {StyleSheet} from 'react-native';
import { SafeAreaView, Text, TopBar, UnderlineText, View } from '../theme/navigation';
import type { AppState } from '../store';
import * as CL from '../store/clock'
import { useDispatch, useSelector } from 'react-redux';
import { useInterval } from '../hooks/useInterval';
import { NavigationHeader } from '../theme';

const Clock = () => {
  const {humorText, errorMessage, loading} = useSelector<AppState, H.State>(
    ({humor}) => humor
  )

  return (
      <SafeAreaView>
        <TopBar>
          <UnderlineText>

          </UnderlineText>
        </TopBar>
        <View>
          <Text></Text>
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 20, textAlign: 'center'},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default Clock;
