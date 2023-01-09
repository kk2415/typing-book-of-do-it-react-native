<<<<<<< HEAD
import React, {createContext, FC, useContext} from 'react'
import { ReactNode } from 'react'

export type ToggleThemeContextType = {
    toggleTheme: () => void
}
const defaultToggleThemeContext = {
    toggleTheme: () => {}
}

const ToggleThemeContext = createContext<ToggleThemeContextType>(
    defaultToggleThemeContext
)

type ToggleThemeContextProps = {
    children?: ReactNode[],
    toggleTheme: () => void
}

export const ToggleThemeProvider: FC<ToggleThemeContextProps> = ({children, toggleTheme}) => {
    const value = {toggleTheme}

    return (
        <ToggleThemeContext.Provider value={value} >
            {children}
        </ToggleThemeContext.Provider>
    )
}

export const useToggleTheme = () => {
    const value = useContext(ToggleThemeContext)
    return value
=======
import React, { createContext, FC, ReactNode, useContext } from 'react'

export type ToggleThemeContextType = {
	toggleTheme: () => void
}
const defaultToggleThemeContext = {
	toggleTheme: () => {}
}

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
	const value = useContext(ToggleThemeContext)
	return value
>>>>>>> 2a9154dad4f49ad705fa5fab7d47b6f6aa5af9b9
}