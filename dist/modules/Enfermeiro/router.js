"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enfermeiro_model_1 = require("./enfermeiro-model");
class EnfermeiroRoutes {
    index(req, res, next) {
        enfermeiro_model_1.Enfermeiro.find().then((enfermeiros) => {
            res.json(enfermeiros);
            return next();
        });
    }
    create(req, res, next) {
        const enfermeiro = new enfermeiro_model_1.Enfermeiro(req.body);
        enfermeiro.save().then((enfermeiro) => {
            res.json(enfermeiro);
            return next();
        });
    }
    findOne(req, res, next) {
        enfermeiro_model_1.Enfermeiro.findById(req.params.id).then((enfermeiro) => {
            if (enfermeiro) {
                res.json(enfermeiro);
                return next();
            }
            res.send(404);
            return next();
        });
    }
    update(req, res, next) {
        const options = { overwrite: true };
        enfermeiro_model_1.Enfermeiro.update({ _id: req.params.id }, req.body, options)
            .exec()
            .then((result) => {
            if (result.n) {
                enfermeiro_model_1.Enfermeiro.findById(req.params.id).then((enfermeiro) => {
                    if (enfermeiro) {
                        res.json(enfermeiro);
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
        enfermeiro_model_1.Enfermeiro.remove({ _id: req.params.id })
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
exports.default = EnfermeiroRoutes;
//# sourceMappingURL=router.js.map