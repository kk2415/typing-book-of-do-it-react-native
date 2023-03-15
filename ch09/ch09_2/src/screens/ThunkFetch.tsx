import React, { useCallback } from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import { SafeAreaView, Text, TopBar, UnderlineText, View } from '../theme/navigation';
import type { AppState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { useInterval } from '../hooks/useInterval';
import { NavigationHeader } from '../theme';
import * as CL from '../store/clock'
import * as H from '../store/humor'
import { MD2Colors } from 'react-native-paper';

const ThunkFetch = () => {
  const {humorText, errorMessage, loading} = useSelector<AppState, H.State>(
    ({humor}) => humor
  )
  const dispatch = useDispatch()

  const getHumor = useCallback(() => {
    dispatch(H.requestHumor())
  }, [])

  return (
    <SafeAreaView>
      <TopBar>
        <UnderlineText style={[styles.text]} onPress={getHumor}>
          get humor using thunk
        </UnderlineText>
      </TopBar>
      {loading && (
        <ActivityIndicator size="large" color={MD2Colors.lightBlue500} />
      )}
      <View style={[styles.content]}> 
        <Text style={[styles.text]}>{humorText}</Text>
        {errorMessage.length > 0 && (
          <Text style={[styles.text]}>{errorMessage}</Text>
        )}
      </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 20, textAlign: 'center'},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default ThunkFetch;
