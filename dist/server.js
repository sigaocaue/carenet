"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const api_1 = __importDefault(require("./api/api"));
const mongoose = require('mongoose');
const config = require('./config/env/config')();
const server = http.createServer(api_1.default);
server.listen(config.serverPort);
server.on('listening', () => {
    const authData = {
        user: 'carenet',
        pass: 'carenet@mongo',
        useNewUrlParser: true,
        useCreateIndex: true,
    };
    mongoose
        .connect('mongodb://mongodb:27017/carenet', authData)
        .then(() => {
        console.log('successfully connected to the database');
    })
        .catch((err) => {
        console.log('error connecting to the database', err);
    });
    console.log(`Server is listening on ${config.serverPort}`);
});
server.on('error', (error) => {
    console.error(`Ocorreu um erro: ${error}`);
});
//# sourceMappingURL=server.js.map