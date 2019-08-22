"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paciente_model_1 = require("./paciente-model");
class PacienteRoutes {
    index(req, res, next) {
        paciente_model_1.Paciente.find().then(pacientes => {
            res.json(pacientes);
            return next();
        });
    }
    create(req, res, next) {
        const paciente = new paciente_model_1.Paciente(req.body);
        paciente.save().then(paciente => {
            res.json(paciente);
            return next();
        });
    }
    findOne(req, res, next) {
        paciente_model_1.Paciente.findById(req.params.id).then(paciente => {
            if (paciente) {
                res.json(paciente);
                return next();
            }
            res.send(404);
            return next();
        });
    }
    update(req, res, next) {
        const options = { overwrite: true };
        paciente_model_1.Paciente.update({ _id: req.params.id }, req.body, options)
            .exec()
            .then((result) => {
            if (result.n) {
                paciente_model_1.Paciente.findById(req.params.id).then(paciente => {
                    if (paciente) {
                        res.json(paciente);
                        return next();
                    }
                    res.send(404);
                    return next();
                });
            }
            else {
                res.send(404);
            }
        });
    }
    destroy(req, res, next) {
        paciente_model_1.Paciente.remove({ _id: req.params.id })
            .exec()
            .then((cmdResult) => {
            if (cmdResult.n) {
                res.send(204);
            }
            else {
                throw new NotFoundError('Documento não encontrado.');
            }
            return next();
        })
            .catch(next);
    }
}
exports.default = PacienteRoutes;
//# sourceMappingURL=router.js.map