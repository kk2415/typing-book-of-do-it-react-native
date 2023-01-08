import React, { useCallback, useRef, useState } from 'react';
import {Keyboard, StyleSheet, Text, View} from 'react-native';

import {MD2Colors, Switch, TextInput, useTheme} from 'react-native-paper';
import { useToggleTheme } from '../contexts';
import * as D from '../data'

const Input = () => {
  const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson())
  const {dark, colors} = useTheme()
  const toggleTheme = useToggleTheme()

  const textInputRef = useRef<TextInput | null>(null)
  const setFocus = useCallback(() => textInputRef.current?.focus(), [textInputRef.current])

  return (
      <View style={[styles.view, {backgroundColor: colors.surface}]}>
        <View style={[styles.topBar, {backgroundColor: colors.primary}]}>
          <Text style={[styles.textButton]} onPress={setFocus}>focus</Text>
          <Text style={[styles.textButton]} onPress={Keyboard.dismiss}>disiss keybaord</Text>
          <View style={{flex: 1}} />
          <Switch value={dark} onValueChange={toggleTheme} />
        </View>
        <View style={[styles.textView]}>
          <Text style={[styles.text, {color: colors.onPrimary}]}>email</Text>
          <TextInput 
            style={[styles.textInput, {color: colors.onPrimary, borderColor: colors.onTertiary}]}
            value={person.email} placeholder="Enter your email"
            onChangeText={(email) => setPerson((person) => ({...person, email}))}
          />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  topBar: {flexDirection: 'row', padding: 5},
  textButton: {marginLeft: 10, fontSize: 20},
  keyboardAvoidingView: {flex: 1, padding: 10},
  textView: {padding: 5},
  text: {fontSize: 24},
  textInput: {fontSize: 24, borderWidth: 1, borderRadius: 5},
});

export default Input;
