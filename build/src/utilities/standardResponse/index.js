"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.standardResponse = void 0;
const standardResponse = (err, data) => {
    const response = {
        operationStatus: {
            statusCode: err ? err.statusCode || '700' : '0',
            statusMessage: err ? err.name : 'Success'
        }
    };
    if (data) {
        response.data = data;
    }
    if (err) {
        if (err.code) {
            response.errors = [];
            response.errors.push({
                code: err.code,
                value: err.message
            });
        }
    }
    return response;
};
exports.standardResponse = standardResponse;
//# sourceMappingURL=index.js.map