import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import routes from './routes'
import AppError from './errors/AppError'

import './database'

const app = express()

app.use(express.json())
app.use(routes)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  console.error(err)

  return res.status(500).json({
    status: 'error',
    message: 'erro interno do servidor'
  })
})

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333')
})
