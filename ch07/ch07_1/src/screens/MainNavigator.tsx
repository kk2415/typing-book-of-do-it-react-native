import { DarkTheme, DefaultTheme, useTheme } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView, StyleSheet, View, Switch, useColorScheme } from 'react-native'
import { useToggleTheme } from '../contexts'
import { Text } from '../theme/paper/Text'

export default function MainNavigator() {
    const theme = useTheme()
    const toggleTheme = useToggleTheme()

    return (
        <SafeAreaView style={[styles.flex]}>
            <View style={[styles.view, {backgroundColor: theme.colors.background}]}>
                <View style={[styles.topBar, {backgroundColor: theme.colors.primary}]}>
                    <Switch value={theme.dark} onValueChange={toggleTheme} />
                </View>
                <View style={[styles.view]}>
                    <Text style={[styles.text, {color: theme.colors.text}]}>
                        This is top text.
                    </Text>
                    <Text style={[styles.view, {color: theme.colors.text}]}>
                        This is bottom text.
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flex: {flex: 1},
    view: {flex: 1, alignItems: 'center', justifyContent: 'space-between'},
    topBar: {width: '100%', flexDirection: 'row', padding: 5, justifyContent: 'flex-end'},
    text: {fontSize: 20}
})