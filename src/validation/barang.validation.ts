import { z } from 'zod'
import { Request, Response, NextFunction } from 'express'

const Barang = z.object({
  id: z.string({
    required_error: 'id is required',
    invalid_type_error: 'id must be a string'
  }),
  name: z
    .string({
      required_error: 'name is required',
      invalid_type_error: 'name must be a string'
    })
    .min(3),
  quantity: z
    .number({
      required_error: 'quantity is required',
      invalid_type_error: 'quantity must be a number'
    })
    .min(1),
  price: z
    .number({
      required_error: 'price is required',
      invalid_type_error: 'price must be a number'
    })
    .min(0)
})

// Middleware untuk validasi menggunakan Zod
export const validateBarang = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    // Validasi req.body menggunakan skema Barang
    req.body = Barang.parse(req.body)
    next()
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.format() })
    } else {
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
