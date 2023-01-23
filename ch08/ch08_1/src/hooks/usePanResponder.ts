import { useMemo } from 'react'
import {GestureResponderEvent, PanResponder, PanResponderCallbacks, PanResponderGestureState, PanResponderInstance} from 'react-native'

type Event = GestureResponderEvent
type State = PanResponderGestureState

//이 defaultCallback은 18행에서 보듯 입력 매개변수 callbacks에 같은 이름의 메서드가 있더라도 이를 재정의하도록 구현했다.
const defaultCallback = {
	onStartShouldSetPanResponder: (e: Event, s: State) => true,
	onMoveShouldSetPanResponder: (e: Event, s: State) => true
}

export const usePanResponder = (
	callbacks: PanResponderCallbacks, deps: any[]=[]
): PanResponderInstance => {
	//useMemo훅을 사용하여 컴포넌트를 처음 렌더링할 때 생성한 panResponder 객체를 캐시한다.
	const panResponder = useMemo<PanResponderInstance>(() => 
		PanResponder.create({...defaultCallback, ...callbacks}), deps)
	
	return panResponder
}