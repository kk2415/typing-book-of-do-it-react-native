import { useTheme } from '@react-navigation/native'
import React, { ComponentProps, FC } from 'react'
import {StyleSheet, Text as RNText} from 'react-native'

export type TextProps = ComponentProps<typeof RNText>

export const Text: FC<TextProps> = ({style, ...props}) => {
    const {colors} = useTheme()
    return <RNText style={[{color: colors.text}, style]} />
}

export const UnderlineText: FC<TextProps> = ({style, ...props}) => {
    const {colors} = useTheme()
    return (
        <RNText style={[styles.underline, {color: colors.text, textDecorationColor: colors.text}, style]} {...props} />
    )
}

const styles = StyleSheet.create({
    underline: {textDecorationLine: 'underline'}  
})