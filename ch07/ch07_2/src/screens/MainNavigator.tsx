import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

const Stack = createStackNavigator()

export default function MainNavigator() {
    return (        
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="HomeLeft" component={HomeLeft} />
            <Stack.Screen name="HomeRight" component={HomeRight} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    view: {flex: 1, justifyContent: 'space-between'},
    text: {fontSize: 20},
    keyboardAwareFocus: {flex: 1, padding: 5, alignItems: 'center', justifyContent: 'center'},
    textView: {width: '100%', padding: 5, marginBottom: 10},
    textInput: {fontSize: 24, padding: 10},
    textInputView: {marginTop: 5, borderRadius: 10},
    touchableView: {flexDirection: 'row', height: 50, borderRadius: 10, width: '90%', justifyContent: 'center', alignItems: 'center'},
})