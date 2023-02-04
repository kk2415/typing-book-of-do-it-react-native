import React, { useCallback, useState } from 'react';
import {Alert, StyleSheet} from 'react-native';
import { SafeAreaView, Text, TextInput, TouchableView, UnderlineText, View } from '../theme/navigation';
import { AutoFocusProvider, useAutoFocus } from '../contexts';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import * as U from '../utils';
import * as D from '../data'
import * as L from '../store/login'
import * as A from '../store/asyncStorage'
import { getHostUrl, post } from '../server';

const SignUp = () => {
  const [email, setEmail] = useState<string>(D.randomEmail())
  const [name, setName] = useState<string>(D.randomName())
  const [password, setPassword] = useState<string>('1')
  const [confirmPassword, setConfirmPassword] = useState<string>(password)

  const focus = useAutoFocus()
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const goHomeNavigator = useCallback(() => {
    if (password === confirmPassword) {
      post(getHostUrl('/auth/signup'), {name, email, password})
        .then(res => res.json())
        .then(result => {
          console.log('hello')
          const {jwt} = result
          
          U.writeToStorage('signUpJWT', jwt)
          .then(() => {
            dispatch(A.setSignUpJWT(jwt))
            dispatch(L.loginAction({name, email, password}))
            navigation.navigate('TabNavigator')
          })
          .catch(err => {
            console.log(err)
            Alert.alert(err.message)
          })
        })
        .catch(err => {
          console.log('post 요청 실패')
          Alert.alert(err.message)
        })

      U.writeToStorage(L.loggedUserKey, JSON.stringify({name, email, password}))
      .then(() => {
        dispatch(L.loginAction({name, email, password}))
      })
      .catch((e) => {
        dispatch(L.loginAction({name, email, password}))
      })
    } else {
      Alert.alert('password is invalid')
    }
  }, [password, confirmPassword])
  
  const goLogin = useCallback(() => navigation.navigate('Login'), [])

  return (
      <SafeAreaView>
        <View style={[styles.view]}>
          <AutoFocusProvider contentContainerStyle={[styles.keyboardAwareFocus]}>
            <View style={[styles.textView]}>
              <Text style={[styles.text]}>email</Text>
              <View border style={[styles.textInputView]}>
                <TextInput onFocus={focus} style={[styles.textInput]}
                  value={email} onChangeText={setEmail}
                  placeholder="enter your email" />
              </View>
            </View>
            <View style={[styles.textView]}>
              <Text style={[styles.text]}>name</Text>
              <View border style={[styles.textInputView]}>
                <TextInput onFocus={focus} style={[styles.textInput]}
                  value={name} onChangeText={setName}
                  placeholder="enter your name" />
              </View>
            </View>
            <View style={[styles.textView]}>
              <Text style={[styles.text]}>password</Text>
              <View border style={[styles.textInputView]}>
                <TextInput onFocus={focus} style={[styles.textInput]}
                  value={password} onChangeText={setPassword}
                  placeholder="enter your password" />
              </View>
            </View>
            <View style={[styles.textView]}>
              <Text style={[styles.text]}>confirm password</Text>
              <View border style={[styles.textInputView]}>
                <TextInput onFocus={focus} style={[styles.textInput]}
                  value={confirmPassword} onChangeText={setConfirmPassword}
                  placeholder="enter your confirm password" />
              </View>
            </View>
            <TouchableView notification style={[styles.touchableView]} onPress={goHomeNavigator}>
              <Text style={[styles.text]}>SignUp</Text>
            </TouchableView>
            <UnderlineText style={[styles.text, {marginTop: 15}]} onPress={goLogin}>
              Login
            </UnderlineText>
          </AutoFocusProvider>
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, justifyContent: 'space-between', alignItems: 'center'},
  text: {fontSize: 20},
  keyboardAwareFocus: {flex: 1, padding: 5, alignItems: 'center', justifyContent: 'center'},
  textView: {width: '100%', padding: 5, marginBottom: 10},
  textInput: {fontSize: 24, padding: 10},
  textInputView: {marginTop: 5, borderRadius: 10},
  touchableView: {flexDirection: 'row', height: 50, borderRadius: 10, width: '90%', justifyContent: 'center', alignItems: 'center'},
});

export default SignUp;
