import { ComponentProps, createContext, FC, useCallback, useContext, useRef } from 'react'
import { findNodeHandle, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export type FocusEvent = NativeSyntheticEvent<TextInputFocusEventData>

export type FocusContextType = {
	autoFocus: (event: FocusEvent) => void
}
const defaultFocusContext = {
	autoFocus: (event: FocusEvent) => {}
}
const AutoFocusContext = createContext<FocusContextType>(defaultFocusContext)

export type AutoFocusProviderProps = ComponentProps<typeof KeyboardAwareScrollView>
export const AutoFocusProvider: FC<AutoFocusProviderProps> = ({children, ...props}) => {
	const scrollRef = useRef<KeyboardAwareScrollView | null>(null)

	const scrollToInput = useCallback((reactNode: any) => {
		scrollRef.current?.scrollToFocusedInput(reactNode)
	}, [])

	const autoFocus = useCallback((event: FocusEvent) => {
		scrollToInput(findNodeHandle(event.target))
	}, [])

	const value = {
		autoFocus
	}

	return (
		<AutoFocusContext.Provider value={value}>
			<KeyboardAwareScrollView {...props} style={{flex: 1, width: '100%'}} ref={scrollRef}>
				{children}
			</KeyboardAwareScrollView>
		</AutoFocusContext.Provider>
	)
}

export const useAutoFocus = () => {
	const autoFocus = useContext(AutoFocusContext)
	return autoFocus
}