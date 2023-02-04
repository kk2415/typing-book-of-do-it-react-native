import {sign, verify} from 'jsonwebtoken'
import type { SignOptions, Secret, VerifyErrors, VerifyOptions } from 'jsonwebtoken'

const secret = 'very important secret'

export const jwtSign = (payload: string | Buffer | object, options: SignOptions) => {
	return new Promise<string>((resolve, reject) => {
		sign(payload, secret, options, (err?:any, signingKey?: Secret) => {
			if (err)
				reject(err)
			else
				resolve(signingKey as string)
		})
	})
}

export const jwtVerify = <T extends object>(token: string, options: VerifyOptions = {}) => {
	return new Promise<T>((resolve, reject) => {
		try {
			const decoded = verify(token, secret, options)
			resolve(decoded as T)
		} catch (err) {
			reject(err)
		}
	})
}