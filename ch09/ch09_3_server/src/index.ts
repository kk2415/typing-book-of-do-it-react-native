import express from 'express'
import {address} from 'ip'
import fs from 'fs'
import path from 'path'
import {createExpressServre} from './express'
import { authRouter } from './routers'

const hostname = '172.22.128.1', port = 8080 
const publicDirPath = path.join(process.cwd(), 'public')

if (fs.existsSync(publicDirPath) == false) {
	fs.mkdirSync(publicDirPath)
} 

runServer(address())

function runServer(ip: string | undefined) {
	if (!ip) {
		console.log('error can\'t find your ip address')
		process.exit()
	}
	const app = createExpressServre()
	app
    .get('/', (req, res) => {res.json({message: 'Hello world'!})})
	.use('/auth', authRouter())
    .listen(port, () => console.log(`server started at http://${ip}:${port}`))
}