import { Application, Request, Response } from 'express'
import PacienteRoutes from '../../modules/Paciente/router'
import MedicoRoutes from '../../modules/Medico/router'
import EnfermeiroRoutes from '../../modules/Enfermeiro/router'
import LeitoRoutes from '../../modules/Leito/router'

class Routes {
  private PacienteRouter: PacienteRoutes
  private MedicoRouter: MedicoRoutes
  private EnfermeiroRouter: EnfermeiroRoutes
  private LeitoRouter: LeitoRoutes
  constructor(app: Application) {
    this.PacienteRouter = new PacienteRoutes()
    this.MedicoRouter = new MedicoRoutes()
    this.EnfermeiroRouter = new EnfermeiroRoutes()
    this.LeitoRouter = new LeitoRoutes()
    this.getRoutes(app)
  }
  getRoutes(app: Application): void {
    app.route('/api/pacientes').get(this.PacienteRouter.index)
    app.route('/api/pacientes').post(this.PacienteRouter.create)
    app.route('/api/pacientes/:id').get(this.PacienteRouter.findOne)
    app
      .route('/api/pacientes/:id')
      .put(this.PacienteRouter.update)
      .patch(this.PacienteRouter.update)
    app.route('/api/pacientes/:id').delete(this.MedicoRouter.destroy)

    app.route('/api/medicos').get(this.MedicoRouter.index)
    app.route('/api/medicos').post(this.MedicoRouter.create)
    app.route('/api/medicos/:id').get(this.MedicoRouter.findOne)
    app
      .route('/api/medicos/:id')
      .put(this.MedicoRouter.update)
      .patch(this.MedicoRouter.update)
    app.route('/api/medicos/:id').delete(this.MedicoRouter.destroy)

    app.route('/api/enfermeiros').get(this.EnfermeiroRouter.index)
    app.route('/api/enfermeiros').post(this.EnfermeiroRouter.create)
    app.route('/api/enfermeiros/:id').get(this.EnfermeiroRouter.findOne)
    app
      .route('/api/enfermeiros/:id')
      .put(this.EnfermeiroRouter.update)
      .patch(this.EnfermeiroRouter.update)
    app.route('/api/enfermeiros/:id').delete(this.EnfermeiroRouter.destroy)

    app.route('/api/leitos').get(this.LeitoRouter.index)
    app.route('/api/leitos').post(this.LeitoRouter.create)
    app.route('/api/leitos/:id').get(this.LeitoRouter.findOne)
    app
      .route('/api/leitos/:id')
      .put(this.LeitoRouter.update)
      .patch(this.LeitoRouter.update)
    app.route('/api/leitos/:id').delete(this.LeitoRouter.destroy)
  }
}

export default Routes
