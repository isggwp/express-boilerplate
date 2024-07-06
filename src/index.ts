import express, { Application, Request, Response } from 'express'
import 'dotenv/config'

const app: Application = express()
const port: number = Number(process.env.PORT) || 4000

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
