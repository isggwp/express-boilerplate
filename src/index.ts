import express, { Application, Response, Request, NextFunction } from 'express'
import 'dotenv/config'

const app: Application = express()
const port: number = Number(process.env.PORT) || 4000

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
