import {Router} from 'express'
import * as U from '../utils'
import { IJWTDecoded } from './IJwtDecoded'

export const authRouter = () => {
	const router = Router()
	return router
		.post('/signup', async (req, res) => {
			const {name, email, password} = req.body
			console.log('signup', name, email, password)
			
			const jwt = await U.jwtSign(
				{email, name, password, provider: 'local'},
				{expiresIn: '9999 years'}, // 회원가입 토큰이면 영구 유지
			)

			res.json({jwt})
		})
		.post('/login', async (req, res) => {
			console.log('로그인 요청됨')

			const {authorization} = req.headers || {}
			if (!authorization) {
				res.json({success: false, message: 'no jwt'})
				return
			}

			const {email, password} = req.body
			console.log('요쳥된 이메일: ', email)

			const jwt = authorization.split(' ')[1]
			if (!jwt || jwt.length < 0) {
				res.json({success: false, message: 'no jwt'})
				return
			}

			try {
				const decoded = await U.jwtVerify<IJWTDecoded>(jwt)
				console.log('email', email, decoded.email)
				console.log('password', password, decoded.password)

				if (email !== decoded.email) {
					res.json({
						success: false,
						message: `죄송합니다.\n누구신지 모르겠어요`
					})
				}

				if (password !== decoded.password) {
					res.json({
						success: false,
						message: `패스워드가 틀립니다.`
					})
				} else {
					res.json({
						success: true,
						provider: decoded.provider,
						name: decoded.name,
						message: `환영합니다 ${decoded.name}님.`
					})
				}
			} catch (e) {
				if (e instanceof Error)
					res.json({success: false, message: e.message})
			}
		})
}