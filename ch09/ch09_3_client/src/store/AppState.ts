import * as L from './login'
import * as A from './asyncStorage'
import * as C from './counter'
import * as CL from './clock'
import * as P from './people'
import * as H from './humor'

export type AppState = {
	login: L.State
	asyncStorage: A.State
	counter: C.State
	clock: CL.State
	people: P.State
	humor: H.State
}