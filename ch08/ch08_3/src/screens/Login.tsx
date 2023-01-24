import React, { useCallback, useEffect, useState } from 'react';
import {StyleSheet} from 'react-native';
import { SafeAreaView, Text, TouchableView, UnderlineText, View } from '../theme/navigation';
import { AutoFocusProvider, useAutoFocus } from '../contexts';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import * as L from '../store/login'
import * as U from '../utils'

const Login = () => {
  const {loggedIn} = useSelector<AppState, L.State>(({login}) => login)
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const focus = useAutoFocus()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const goHomeNavigator = useCallback(() => {
    dispatch(L.loginAction({email, name, password}))
    navigation.navigate('TabNavigator')
  }, [])
  const goSignUp = useCallback(() => navigation.navigate('SignUp'), [])
  
  useEffect(() => {
    U.readFromStorage(L.loggedUserKey)
      .then((value) => {
        if (value.length > 0) {
          const savedUser = JSON.parse(value)
          setEmail(savedUser.email)
          setName(savedUser.name)
          setPassword(savedUser.password)
        }
      })
      .catch((e) => {})
  }, [loggedIn])

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
              <Text style={[styles.text]}>password</Text>
              <View border style={[styles.textInputView]}>
                <TextInput secureTextEntry onFocus={focus} style={[styles.textInput]}
                  value={password} onChangeText={setPassword}
                  placeholder="enter your password" />
              </View>
            </View>
            <TouchableView notification style={[styles.touchableView]} onPress={goHomeNavigator}>
              <Text style={[styles.text]}>Login</Text>
            </TouchableView>
            <UnderlineText style={[styles.text, {marginTop: 15}]} onPress={goSignUp}>
              SignUp
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

export default Login;
