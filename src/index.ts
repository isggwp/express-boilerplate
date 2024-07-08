import express, { type Application, type Response } from 'express'
import 'dotenv/config'
import appMiddleware from './middleware'

const app: Application = express()
const port: number = Number(process.env.PORT) || 4000

app.get('/', (res: Response) => {
  res.send('Hello World!')
})
app.use(appMiddleware)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
