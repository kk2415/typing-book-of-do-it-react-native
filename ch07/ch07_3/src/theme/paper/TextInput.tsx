import React, { ComponentProps, FC, forwardRef, ForwardRefRenderFunction, useMemo } from 'react'
import {TextInput as RNTextInput} from 'react-native'
import type {StyleProp, TextStyle} from 'react-native'
import { useTheme } from 'react-native-paper'

export type TextInputProps = ComponentProps<typeof RNTextInput> & {
    /*style 속성 또한 FC타입이 제공하는 속성이므르 이 속성은 빼도 된다.*/
    // style?: StyleProp<TextStyle>
}
const _TextInput: ForwardRefRenderFunction<RNTextInput, TextInputProps> = ({style, ...props}, ref) => {
    const {colors} = useTheme()
 
    return (
        <RNTextInput 
            ref={ref}
            style={[{color: colors.onPrimary, borderColor: colors.tertiary}, style]}
            {...props} />
    )
}

export const TextInput = forwardRef(_TextInput)