export type IJWTDecoded = {
	provider: string //이 토큰이 누구의 것인지 구분하는 용도
	name: string
	email: string
	password: string
}