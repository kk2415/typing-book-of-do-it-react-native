import type { StackCardInterpolationProps, StackCardInterpolatedStyle } from '@react-navigation/stack';
import { useCallback } from 'react';
import { Animated } from 'react-native';

export const useNavigationHorizontalInterpolator = () => {
	const interpolator = useCallback((props: StackCardInterpolationProps) => {
			const {current, inverted, layouts} = props
			return {
				cardStyle: {
					transform: [
						{
							translateX: Animated.multiply(
								current.progress.interpolator({
									inputRange: [0, 1],
									outputRange: [layouts.screen.width, 0]
								}),
								inverted
							)
						}
					]
				}
			}
	}, [])

	return interpolator
}