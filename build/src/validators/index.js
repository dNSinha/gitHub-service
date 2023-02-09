"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateApiRequest = void 0;
const helpers_1 = require("../utilities/helpers");
const validateApiRequest = (apiReqPayload, schema) => {
    const { error } = schema.validate(apiReqPayload);
    const isValid = error == null;
    let formattedErrors = null;
    if (!isValid) {
        formattedErrors = helpers_1.helpers.formatErrors(error.details);
    }
    return { isValidSchema: isValid, invalidParams: formattedErrors };
};
exports.validateApiRequest = validateApiRequest;
//# sourceMappingURL=index.js.map