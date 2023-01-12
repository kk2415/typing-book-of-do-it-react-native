import React, { createContext, FC, ReactNode, useContext } from 'react'

export type ToggleThemeContextType = {
	toggleTheme: () => void //공유하려는 데이터 속성
}
const defaultToggleThemeContext = {
	toggleTheme: () => {}
}

//컨텍스트 객체 생성
//createContext() 메서드 파라미터에 공유할 value값의 초깃값을 넣어준다.
const ToggleThemeContext = createContext<ToggleThemeContextType>(defaultToggleThemeContext)

type ToggleThemeContextProps = {
	toggleTheme: () => void,
	children?: ReactNode,
}
export const ToggleThemeProvider: FC<ToggleThemeContextProps> = ({children, toggleTheme}) => {
	const value = {toggleTheme}

	return (
		<ToggleThemeContext.Provider value={value}>
			{children}
		</ToggleThemeContext.Provider>
	)
}

export const useToggleTheme = () => {
	const {toggleTheme} = useContext(ToggleThemeContext)
	return toggleTheme
}