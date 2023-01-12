import {Animated} from 'react-native'

export const interpolate = (
    animeValue: Animated.Value,
    outputRange: number[] | string[],
    inputRange: number[] = [0, 1]
) => {
    return animeValue.interpolate({inputRange, outputRange})
}