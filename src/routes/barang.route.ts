import { Router, type Response, type Request } from 'express'
import { validateBarang } from '../validation/barang.validation'

const barangRouter = Router()

barangRouter.get('/barang', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World!' })
})

barangRouter.post('/barang', validateBarang, (req: Request, res: Response) => {
  const barang = req.body
  res.status(200).json({ message: 'Barang valid', barang })
})

export default barangRouter
