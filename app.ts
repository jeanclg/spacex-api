import express from 'express'
import { launchController } from './controllers/launch.controller'
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()

app.use(express.json())

app.use(cors())

app.use('/', launchController)

app.listen(Number(process.env.PORT), () => {
  console.log(`listening on PORT ${process.env.PORT}`)
})
