"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formattedResponse = void 0;
const standardResponse_1 = require("../../../src/utilities/standardResponse");
const formattedResponse = (_req, res) => {
    if (res.responseData && res.responseData.operationStatus) {
        res.send(res.responseData);
    }
    else {
        res.send((0, standardResponse_1.standardResponse)(null, res.responseData));
    }
};
exports.formattedResponse = formattedResponse;
//# sourceMappingURL=index.js.map