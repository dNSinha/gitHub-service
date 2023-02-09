"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHeader = void 0;
const errors_1 = require("../../utilities/errors");
const logger_1 = require("../../utilities/logger");
const applicationConstants_1 = require("../../components/applicationConstants");
const validate = require('uuid-validate');
const validateHeader = (req, res, next) => {
    const correlationId = req.get(applicationConstants_1.applicationConstants.CorrelationId);
    if (correlationId && validate(correlationId)) {
        req.locals = Object.assign({}, { tracking: res.locals.tracking });
        next();
    }
    else {
        logger_1.logger.error('validateHeader', { status: 403, message: 'required header not found/invalid' });
        return next(errors_1.errorHandler.forbiddenError('required header not found/invalid'));
    }
};
exports.validateHeader = validateHeader;
//# sourceMappingURL=index.js.map