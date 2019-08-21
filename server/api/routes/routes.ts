import { Application, Request, Response } from 'express'
import PacienteRoutes from '../../modules/Paciente/router'

class Routes {
  private router: PacienteRoutes
  constructor(app: Application) {
    this.router = new PacienteRoutes()
    this.getRoutes(app)
  }
  getRoutes(app: Application): void {
    app.route('/api/pacientes').get(this.router.index)
    app.route('/api/pacientes').post(this.router.create)
    app.route('/api/pacientes/:id').get(this.router.findOne)
    app
      .route('/api/pacientes/:id')
      .put(this.router.update)
      .patch(this.router.update)

    app.route('/api/pacientes/:id').delete(this.router.destroy)
  }
}

export default Routes
