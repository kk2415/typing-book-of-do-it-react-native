import React, { ComponentProps, FC } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from '@react-navigation/native'

export type IconProps = ComponentProps<typeof Icon>

export const MaterialCommunityIcons: FC<IconProps> = ({...props}) => {
    const {colors} = useTheme()
    return <Icon color={colors.text} {...props} />
}