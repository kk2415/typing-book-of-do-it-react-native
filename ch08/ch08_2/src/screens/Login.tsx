import React, { useCallback, useState } from 'react';
import {StyleSheet} from 'react-native';
import { SafeAreaView, Text, TouchableView, UnderlineText, View } from '../theme/navigation';
import * as D from '../data'
import { AutoFocusProvider, useAutoFocus } from '../contexts';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import * as L from '../store/login'

const Login = () => {
  const [email, setEmail] = useState<string>(D.randomEmail())
  const [name, setName] = useState<string>(D.randomName())
  const [password, setPassword] = useState<string>(D.random(1000, 1000000).toString())

  const focus = useAutoFocus()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const goHomeNavigator = useCallback(() => {
    dispatch(L.loginAction({email, name, password}))
    navigation.navigate('TabNavigator')
  }, [])
  const goSignUp = useCallback(() => navigation.navigate('SignUp'), [])
  
  const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson())

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
