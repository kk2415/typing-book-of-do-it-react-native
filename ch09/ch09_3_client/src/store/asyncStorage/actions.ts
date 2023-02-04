import type * as T from './types'

//액션 생성기
export const setSignUpJWT = (signUpJWT: string): T.SetSignUpJWTAction => ({
	type: '@asyncStorage/signUpJWT',
	signUpJWT
})