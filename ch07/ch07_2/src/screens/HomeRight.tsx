import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import {StyleSheet} from 'react-native';
import { SafeAreaView, Text, TopBar, UnderlineText, View } from '../theme/navigation';
import * as D from '../data'

const title = 'HomeRight';
const HomeRight = () => {
  const navigation = useNavigation()
  const goBack = useCallback(() => navigation.canGoBack() && navigation.goBack(), [])
  const goLeft = useCallback(() => navigation.navigate('HomeLeft', {name: D.randomName(), age: 32}), [])

  return (
    <SafeAreaView>
    <View style={[styles.view]}>
      <TopBar>
        <UnderlineText onPress={goBack} style={[styles.text]}>
          go back
        </UnderlineText>
        <UnderlineText onPress={goLeft} style={[styles.text, {marginLeft: 10}]}>
          go left
        </UnderlineText>
      </TopBar>
      <View style={[styles.content]}>
        <Text style={[styles.text]}>{title}</Text>
      </View>
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  text: {fontSize: 20},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default HomeRight;
