import React, { useCallback, useState } from 'react';
import {Alert, StyleSheet} from 'react-native';
import { SafeAreaView, Text, TextInput, TopBar, TouchableView, UnderlineText, View } from '../theme/navigation';
import * as D from '../data'
import { AutoFocusProvider, useAutoFocus } from '../contexts';
import { useNavigation } from '@react-navigation/native';

const title = 'SignUp';
const SignUp = () => {
  const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson())
  const [password, setPassword] = useState<string>(D.random(1000, 1000000).toString())
  const [confirmPassword, setConfirmPassword] = useState<string>(password)

  const focus = useAutoFocus()
  const navigation = useNavigation()
  const goHomeNavigator = useCallback(() => {
    if (password === confirmPassword) {
      navigation.navigate('HomeLeft')
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
                  value={person.email} onChangeText={(email) => setPerson(() =>
                    ({...person, email}))}
                  placeholder="enter your email" />
              </View>
            </View>
            <View style={[styles.textView]}>
              <Text style={[styles.text]}>name</Text>
              <View border style={[styles.textInputView]}>
                <TextInput onFocus={focus} style={[styles.textInput]}
                  value={person.name} onChangeText={(name) => setPerson(() =>({...person, name}))}
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
