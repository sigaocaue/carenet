import { Request, Response, ErrorRequestHandler, NextFunction } from 'express'

export function errorHandlerApi(
  error: ErrorRequestHandler,
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.error(`API error handler was executed: ${error}`)
  response.status(500).json({
    errCode: 'ERROR-001',
    message: 'Erro Interno do servidor',
  })
}
