"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medico_model_1 = require("./medico-model");
class MedicoRoutes {
    index(req, res, next) {
        medico_model_1.Medico.find().then((medicos) => {
            res.json(medicos);
            return next();
        });
    }
    create(req, res, next) {
        const medico = new medico_model_1.Medico(req.body);
        medico.save().then((medico) => {
            res.json(medico);
            return next();
        });
    }
    findOne(req, res, next) {
        medico_model_1.Medico.findById(req.params.id).then((medico) => {
            if (medico) {
                res.json(medico);
                return next();
            }
            res.send(404);
            return next();
        });
    }
    update(req, res, next) {
        const options = { overwrite: true };
        medico_model_1.Medico.update({ _id: req.params.id }, req.body, options)
            .exec()
            .then((result) => {
            if (result.n) {
                medico_model_1.Medico.findById(req.params.id).then((medico) => {
                    if (medico) {
                        res.json(medico);
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
        medico_model_1.Medico.remove({ _id: req.params.id })
            .exec()
            .then((cmdResult) => {
            if (cmdResult.n) {
                res.send(204);
            }
            else {
                res.send(404);
            }
            return next();
        })
            .catch(next);
    }
}
exports.default = MedicoRoutes;
//# sourceMappingURL=router.js.map