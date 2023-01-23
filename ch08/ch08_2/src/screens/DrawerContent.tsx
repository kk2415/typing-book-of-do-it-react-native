import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import React, { FC, useCallback } from 'react';
import {StyleSheet} from 'react-native';
import { Text, TopBar, View, MaterialCommunityIcons as Icon, UnderlineText, Switch } from '../theme';
import * as D from '../data'
import { DrawerActions } from '@react-navigation/native';
import { NavigationHeader } from '../theme';
import { Avatar } from '../component';
import type { AppState } from '../store';
import * as L from '../store/login'
import { useSelector } from 'react-redux';
/**
 * <Drawer.Navigator drawerContent={DrawerContent}> 이런식으로 drawerContent를 지정하면 
 * DrawerContent 컴포넌트에서 useState, useCallback과 같은 리액트 훅을 사용하지 못한다.
 * DrawerContent 컴포넌트에서 훅 함수를 호출할 수 있게 해주는 게 DrawerContentComponentProps이다.
 * 
 * <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
 * drawerContent 속성은 위와 같은 코드 형태로 구현해야 한다.
 * 
*/
const loginUser = D.createRandomPerson()
const DrawerContent: FC<DrawerContentComponentProps> = (props) => {
  const login = useSelector<AppState, L.State>((state) => state.login)
  const {loggedIn, loggedUser} = login

  //DrawerContent에서 useNavigation훅을 사용하면 오류가 발생한다. 따라서 다음과 같은 형태로 navigation 객체를 얻어야 한다.
  const {navigation} = props
  const close = useCallback(() => navigation.dispatch(DrawerActions.closeDrawer()), [])
  
  if (!loggedIn) {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
        <NavigationHeader Right={() => <Icon name="close" size={24} onPress={close} />} />
        <View style={[styles.content]}>
          <View style={[styles.content]}>
            <Text style={[styles.text]}>Please login or signup</Text> 
            <View style={[styles.row, {marginTop: 20}]}>
              <Switch />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
    )
  }

  return (
    //SafeAreaView 대신에 DrawerContentScrollView 사용함, flex 스타일 속성 1로 무조건 해줘야됨
    <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
        <NavigationHeader Right={() => <Icon name="close" size={24} onPress={close} />} />
        <View style={[styles.content]}>
          <View style={[styles.row]}>
            <Avatar uri={loginUser.avatar} size={40} />
            <Text style={[styles.text, styles.m]}>{loginUser.name}</Text>
          </View>
          <View style={[styles.row]}>
            <UnderlineText numberOfLines={1} ellipsizeMode="tail" style={[styles.text, styles.m]}>{loginUser.email}</UnderlineText>
          </View>
          <View style={[styles.row, {marginTop: 20}]}>
            <Switch />
          </View>
        </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  row: {flexDirection: 'row', padding: 5, alignItems: 'center'},
  m: {marginLeft: 5},
  text: {fontSize: 20},
  content: {flex: 1, padding: 5},
});
