import { applyMiddleware } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { logger } from './logger'
import { rootReducer } from './rootReducer'

export const makeStore = () => {
	//middlewares 배열에 thunk를 삽입
	let middlewares: any[] = [thunk]
	if (__DEV__) {
		middlewares.push(logger)
	}
	return createStore(rootReducer, applyMiddleware(...middlewares))
}