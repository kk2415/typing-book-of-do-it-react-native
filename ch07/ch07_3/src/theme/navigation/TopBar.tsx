import { useTheme } from '@react-navigation/native';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Switch } from './Switch';
import { View, ViewProps } from './View';

export type TopBarProps = ViewProps & {
    noSwitch?: boolean
}

export const TopBar: FC<TopBarProps> = ({noSwitch, children, style, ...props}) => {
    const {dark} = useTheme()
    return (
        <View card={!dark} primary={dark} style={[styles.TopBar, style]} {...props}>
            {children}
            <View style={[styles.flex]} />
            {!noSwitch && <Switch />}
        </View>
    )
}

const styles = StyleSheet.create({
    TopBar: {flexDirection: 'row', padding: 5, alignItems: 'center'},
    flex: {flex: 1},
})