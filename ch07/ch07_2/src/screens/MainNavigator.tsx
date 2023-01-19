import React, { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import Home from './Home'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'
import { useNavigationHorizontalInterpolator } from '../hooks'

const Stack = createStackNavigator()

export default function MainNavigator() {
    const interpolator = useNavigationHorizontalInterpolator()
    const leftOptions = useMemo<StackNavigationOptions>(() => ({
        gestureDirection: 'horizontal-inverted',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }), [])
    const rightOptions = useMemo<StackNavigationOptions>(() => ({
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }), [])

    return (        
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="HomeLeft" component={HomeLeft} options={leftOptions} />
            <Stack.Screen name="HomeRight" component={HomeRight} options={rightOptions} />
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