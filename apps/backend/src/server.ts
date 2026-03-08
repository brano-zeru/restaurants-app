import fs from 'fs'
import https from 'https'
import express from 'express'
import { appConfig } from "./config";
import { initApp } from './initApp';
import { routes } from './routes';
import { middlewares } from './middlewares';

const {
  port: PORT = 3000,
  cert: CERT = '',
  key: KEY = ''
} = appConfig.server

const app = express()
initApp(app, routes, middlewares)

if (KEY && CERT) {
  const options = {
    key: fs.readFileSync(KEY),
    cert: fs.readFileSync(CERT)
  }

  https.createServer(options, app).listen(PORT, () => {
    console.log('started server on port ' + PORT)
  })

} else {
  app.listen(PORT, () => {
    console.log('started server on port ' + PORT)
  })
}
