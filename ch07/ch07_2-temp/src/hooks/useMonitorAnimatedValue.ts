import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

export const useMonitorAnimatedValue = (animeValue: Animated.Value) => {
    const [realAnimeValue, setRealAnimeValue] = useState<number>(0)
  
    useEffect(() => {
      const id = animeValue.addListener((state: {value: number}) => {
        setRealAnimeValue(state.value)
      })
      return () => animeValue.removeListener(id)
    }, [])

    return realAnimeValue
}