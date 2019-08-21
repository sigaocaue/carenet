"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("../../modules/Paciente/router"));
class Routes {
    constructor(app) {
        this.router = new router_1.default();
        this.getRoutes(app);
    }
    getRoutes(app) {
        app.route('/api/pacientes').get(this.router.index);
        app.route('/api/pacientes').post(this.router.create);
        app.route('/api/pacientes/:id').get(this.router.findOne);
        app
            .route('/api/pacientes/:id')
            .put(this.router.update)
            .patch(this.router.update);
        app.route('/api/pacientes/:id').delete(this.router.destroy);
    }
}
exports.default = Routes;
//# sourceMappingURL=routes.js.map