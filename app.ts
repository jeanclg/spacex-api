import express from 'express'
import { launchRoutes } from './routes/launch.routes'

const app = express()

app.use(express.json())

app.use('/', launchRoutes)

app.listen(4000, () => {
  console.log('listening on 4000')
})
