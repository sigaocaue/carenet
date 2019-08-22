import { Request, Response, NextFunction } from 'express'
import { Enfermeiro } from './enfermeiro-model'

class EnfermeiroRoutes {
  index(req: Request, res: Response, next: NextFunction) {
    Enfermeiro.find().then((enfermeiros: any) => {
      res.json(enfermeiros)
      return next()
    })
  }

  create(req: Request, res: Response, next: NextFunction) {
    const enfermeiro = new Enfermeiro(req.body)
    enfermeiro.save().then((enfermeiro: any) => {
      res.json(enfermeiro)
      return next()
    })
  }

  findOne(req: Request, res: Response, next: NextFunction) {
    Enfermeiro.findById(req.params.id).then((enfermeiro: any) => {
      if (enfermeiro) {
        res.json(enfermeiro)
        return next()
      }

      res.send(404)
      return next()
    })
  }

  update(req: Request, res: Response, next: NextFunction) {
    const options = { overwrite: true }
    Enfermeiro.update({ _id: req.params.id }, req.body, options)
      .exec()
      .then((result: any) => {
        if (result.n) {
          Enfermeiro.findById(req.params.id).then((enfermeiro: any) => {
            if (enfermeiro) {
              res.json(enfermeiro)
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
    Enfermeiro.remove({ _id: req.params.id })
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

export default EnfermeiroRoutes
