"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("../../modules/Paciente/router"));
const router_2 = __importDefault(require("../../modules/Medico/router"));
const router_3 = __importDefault(require("../../modules/Enfermeiro/router"));
const router_4 = __importDefault(require("../../modules/Leito/router"));
class Routes {
    constructor(app) {
        this.PacienteRouter = new router_1.default();
        this.MedicoRouter = new router_2.default();
        this.EnfermeiroRouter = new router_3.default();
        this.LeitoRouter = new router_4.default();
        this.getRoutes(app);
    }
    getRoutes(app) {
        app.route('/api/pacientes').get(this.PacienteRouter.index);
        app.route('/api/pacientes').post(this.PacienteRouter.create);
        app.route('/api/pacientes/:id').get(this.PacienteRouter.findOne);
        app
            .route('/api/pacientes/:id')
            .put(this.PacienteRouter.update)
            .patch(this.PacienteRouter.update);
        app.route('/api/pacientes/:id').delete(this.MedicoRouter.destroy);
        app.route('/api/medicos').get(this.MedicoRouter.index);
        app.route('/api/medicos').post(this.MedicoRouter.create);
        app.route('/api/medicos/:id').get(this.MedicoRouter.findOne);
        app
            .route('/api/medicos/:id')
            .put(this.MedicoRouter.update)
            .patch(this.MedicoRouter.update);
        app.route('/api/medicos/:id').delete(this.MedicoRouter.destroy);
        app.route('/api/enfermeiros').get(this.EnfermeiroRouter.index);
        app.route('/api/enfermeiros').post(this.EnfermeiroRouter.create);
        app.route('/api/enfermeiros/:id').get(this.EnfermeiroRouter.findOne);
        app
            .route('/api/enfermeiros/:id')
            .put(this.EnfermeiroRouter.update)
            .patch(this.EnfermeiroRouter.update);
        app.route('/api/enfermeiros/:id').delete(this.EnfermeiroRouter.destroy);
        app.route('/api/leitos').get(this.LeitoRouter.index);
        app.route('/api/leitos').post(this.LeitoRouter.create);
        app.route('/api/leitos/:id').get(this.LeitoRouter.findOne);
        app
            .route('/api/leitos/:id')
            .put(this.LeitoRouter.update)
            .patch(this.LeitoRouter.update);
        app.route('/api/leitos/:id').delete(this.LeitoRouter.destroy);
    }
}
exports.default = Routes;
//# sourceMappingURL=routes.js.map