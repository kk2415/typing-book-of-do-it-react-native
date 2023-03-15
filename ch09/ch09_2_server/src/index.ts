import express from 'express'
import fs from 'fs'
import path from 'path'

const hostname = 'localhost', port = 4000
const app = express()

const publicDirPath = path.join(process.cwd(), 'public')
if (fs.existsSync(publicDirPath) == false)
    fs.mkdirSync(publicDirPath)

app
    .use(express.static('public'))
    .get('/', (req, res) => {
        res.json({message: 'Hello world'!})
    })
    .listen(port, () => console.log('server started at http://${hostname}:${port}'))