import fs from 'fs'
import https from 'https'
import { appConfig } from "./config";
import { app } from './initApp';

const {
  port: PORT = 3000,
  cert: CERT = '',
  key: KEY = ''
} = appConfig.server

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
