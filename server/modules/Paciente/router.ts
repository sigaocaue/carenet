import { Request, Response, NextFunction } from 'express'
import { Paciente } from './paciente-model'

class PacienteRoutes {
  index(req: Request, res: Response, next: NextFunction) {
    Paciente.find().then(pacientes => {
      res.json(pacientes)
      return next()
    })
  }

  create(req: Request, res: Response, next: NextFunction) {
    const paciente = new Paciente(req.body)
    paciente.save().then(paciente => {
      res.json(paciente)
      return next()
    })
  }

  findOne(req: Request, res: Response, next: NextFunction) {
    Paciente.findById(req.params.id).then(paciente => {
      if (paciente) {
        res.json(paciente)
        return next()
      }

      res.send(404)
      return next()
    })
  }

  update(req: Request, res: Response, next: NextFunction) {
    const options = { overwrite: true }
    Paciente.update({ _id: req.params.id }, req.body, options)
      .exec()
      .then((result: any) => {
        if (result.n) {
          Paciente.findById(req.params.id).then(paciente => {
            if (paciente) {
              res.json(paciente)
              return next()
            }

            res.send(404)
            return next()
          })
        } else {
          res.send(404)
        }
      })
  }

  destroy(req: Request, res: Response, next: NextFunction) {
    Paciente.remove({ _id: req.params.id })
      .exec()
      .then((cmdResult: any) => {
        if (cmdResult.n) {
          res.send(204)
        } else {
          throw new NotFoundError('Documento não encontrado.')
        }
        return next()
      })
      .catch(next)
  }
}

export default PacienteRoutes
