import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import {Alert, StyleSheet} from 'react-native';
import { SafeAreaView, Text, View, MaterialCommunityIcons as Icon } from '../theme/navigation';
import * as A from '../store/asyncStorage'
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { NavigationHeader } from '../theme';
import { LeftRightNavigation } from '../component';

const title = 'HomeRight';
const HomeRight = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const goBack = useCallback(() => navigation.canGoBack() && navigation.goBack(), [])
  const goHome = useCallback(() => navigation.navigate('Home'), [])

  const {signUpJWT} = useSelector<AppState, A.State>(({asyncStorage}) => asyncStorage)

  return (
    <SafeAreaView>
    <View style={[styles.view]}>
      <NavigationHeader title={title}
        Left={() => <Icon name='arrow-left-bold' size={50} onPress={goBack} />}
        Right={() => <Icon name='shield-airplane' size={30} onPress={() => Alert.alert('menu pressed')} />} />
      <LeftRightNavigation distance={40} onLeftToRight={goHome}>
        <Text style={[styles.text]}>signUpJWT: {signUpJWT}</Text>
      </LeftRightNavigation>
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
