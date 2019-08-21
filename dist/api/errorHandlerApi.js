"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandlerApi(error, request, response, next) {
    console.error(`API error handler was executed: ${error}`);
    response.status(500).json({
        errCode: 'ERROR-001',
        message: 'Erro Interno do servidor',
    });
}
exports.errorHandlerApi = errorHandlerApi;
//# sourceMappingURL=errorHandlerApi.js.map