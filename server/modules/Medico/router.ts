import { Request, Response, NextFunction } from 'express'
import { Medico } from './medico-model'

class MedicoRoutes {
  index(req: Request, res: Response, next: NextFunction) {
    Medico.find().then((medicos: any) => {
      res.json(medicos)
      return next()
    })
  }

  create(req: Request, res: Response, next: NextFunction) {
    const medico = new Medico(req.body)
    medico.save().then((medico: any) => {
      res.json(medico)
      return next()
    })
  }

  findOne(req: Request, res: Response, next: NextFunction) {
    Medico.findById(req.params.id).then((medico: any) => {
      if (medico) {
        res.json(medico)
        return next()
      }

      res.send(404)
      return next()
    })
  }

  update(req: Request, res: Response, next: NextFunction) {
    const options = { overwrite: true }
    Medico.update({ _id: req.params.id }, req.body, options)
      .exec()
      .then((result: any) => {
        if (result.n) {
          Medico.findById(req.params.id).then((medico: any) => {
            if (medico) {
              res.json(medico)
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
    Medico.remove({ _id: req.params.id })
      .exec()
      .then((cmdResult: any) => {
        if (cmdResult.n) {
          res.send(204)
        } else {
          res.send(404)
        }
        return next()
      })
      .catch(next)
  }
}

export default MedicoRoutes
