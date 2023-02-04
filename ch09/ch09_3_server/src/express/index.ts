import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

export const createExpressServre = () => {
	const app = express()
	return app
			.use(express.static('public'))
			.use(cors())
			.use(bodyParser.json())
}