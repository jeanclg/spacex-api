import express from 'express'
import { launchController } from './controllers/launch.controller'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(express.json())

app.use('/', launchController)

app.listen(Number(process.env.PORT), () => {
  console.log(`listening on PORT ${Number(process.env.PORT) || 4000}`)
})
