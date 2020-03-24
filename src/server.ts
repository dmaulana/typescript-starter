import * as express from 'express'
import * as bodyParser from 'body-parser'

import config from './config'
import StatusRoutes from './routes/status'

const app = express()

app.use(bodyParser.json())

StatusRoutes(app)

app.listen(config.port, (err: Error) => {
    if (err) {
      throw err
    }
      console.log(`Listening on port ${config.port}`)
})
  