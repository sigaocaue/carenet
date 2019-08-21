"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const bodyParser = __importStar(require("body-parser"));
const routes_1 = __importDefault(require("./routes/routes"));
const errorHandlerApi_1 = require("./errorHandlerApi");
class Api {
    constructor() {
        this.express = express_1.default();
        this.middleware();
    }
    middleware() {
        this.express.use(morgan_1.default('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(errorHandlerApi_1.errorHandlerApi);
        this.router(this.express);
    }
    router(app) {
        new routes_1.default(app);
    }
}
exports.default = new Api().express;
//# sourceMappingURL=api.js.map