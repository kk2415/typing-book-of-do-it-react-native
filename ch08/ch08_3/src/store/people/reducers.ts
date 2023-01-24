import * as T from './types'

const initialState: T.State = []

export const reducer = (state: T.State = initialState, action: T.Actions) => {
	switch (action.type) {
		case '@person/add':
			return [action.payload, ...state]
		case '@person/delete':
			return state.filter((person) => person.id !== action.payload.id)
		case '@person/deleteAll':
			return initialState
	}
	return state
}