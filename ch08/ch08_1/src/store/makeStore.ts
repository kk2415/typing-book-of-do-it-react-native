import { configureStore, createStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

export const makeStore = () => {
	// const store = configureStore({
	// 	reducer: rootReducer,
	// })
	const store = createStore(rootReducer)

	return store
}