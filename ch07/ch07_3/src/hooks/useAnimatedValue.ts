import { useRef } from 'react';
import { Animated } from 'react-native';

export const useAnimatedValue = (initvalue: number = 0): Animated.Value => {
    return useRef(new Animated.Value(initvalue)).current
}