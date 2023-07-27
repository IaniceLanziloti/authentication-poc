import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { config } from 'dotenv'
import { AuthenticationRouter } from './routes/index.js'
import { dbConnect } from './database.js'

config()
dbConnect()

const app = express()
const appPort = 3333

app.use(cors())
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded())

AuthenticationRouter.register(app)

app.listen(appPort, ()=> {
  console.log(`🚀 app running at ${appPort}`)
})