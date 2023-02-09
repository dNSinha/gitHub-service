"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
// const requestLogger = require('@trv/request-logger').express;
const logger = (opts) => {
    if (process.env.NODE_ENV !== 'test') {
        return console.log(opts);
    }
    return (_req, _res, next) => {
        next();
    };
};
exports.logger = logger;
//# sourceMappingURL=index.js.map