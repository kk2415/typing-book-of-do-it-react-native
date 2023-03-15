import bodyParser from 'body-parser'
import express from 'express'
import fs from 'fs'
import path from 'path'
import cors from 'cors'

export const createExpressServer = () => {
    const app = express()

    return app
    .use(express.static('public'))
    .use(bodyParser.json())
    .use(cors())
}