import React, { useCallback, useMemo, useRef, useState } from 'react';
import {findNodeHandle, Keyboard, KeyboardAvoidingView, NativeSyntheticEvent, Platform, StyleSheet, Text, TextInputFocusEventData, View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {MD2Colors, Switch, TextInput, useTheme} from 'react-native-paper';
import { useAutoFocus, useToggleTheme } from '../contexts';
import * as D from '../data'

const AutoFocus = () => {
  const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson())
  const {dark, colors} = useTheme()
  const toggleTheme = useToggleTheme()

  const textInputRef = useRef<TextInput | null>(null)
  const setFocus = useCallback(() => textInputRef.current?.focus(), [textInputRef.current])

  const textInputStyle = useMemo(() => [
    styles.textInput,
    {color: colors.onPrimary, borderColor: colors.tertiary}
  ], [colors.onPrimary, colors.tertiary])

  const autoFocus = useAutoFocus()

  const scrollViewRef = useRef<KeyboardAwareScrollView | null>(null)
  const scrollToInput = (reactNode: any) => {
    scrollViewRef.current?.scrollToFocusedInput(reactNode)
  }
  
  return (
      <View style={[styles.view, {backgroundColor: colors.surface}]}>
        <View style={[styles.topBar, {backgroundColor: colors.primary}]}>
          <Text style={[styles.textButton]} onPress={setFocus}>focus</Text>
          <Text style={[styles.textButton]} onPress={Keyboard.dismiss}>
            disiss keybaord
          </Text>
          <View style={{flex: 1}} />
          <Switch value={dark} onValueChange={toggleTheme} />
        </View>
        <KeyboardAwareScrollView contentContainerStyle={[styles.flex]}>
          <View style={[styles.flex]} />
          <View style={[styles.textView]}>
            <Text style={[styles.text, {color: colors.onPrimary}]}>email</Text>
            <TextInput onFocus={autoFocus}
              style={[styles.textInput, {color: colors.onPrimary, borderColor: colors.onTertiary}]}
              value={person.email} placeholder="Enter your email"
              onChangeText={(email) => setPerson((person) => ({...person, email}))}
            />
          </View>
          <View style={[styles.textView]}>
            <Text style={[styles.text, {color: colors.onPrimary}]}>name</Text>
            <TextInput ref={textInputRef} 
              style={[styles.textInput, {color: colors.onPrimary, borderColor: colors.onTertiary}]}
              value={person.name} placeholder="Enter your name"
              onChangeText={(name) => setPerson((person) => ({...person, name}))}
            />
          </View>
        </KeyboardAwareScrollView>
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
  flex: {flex: 1},
});

export default AutoFocus;
