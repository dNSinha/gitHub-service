"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sensorRouter = void 0;
const express_1 = __importDefault(require("express"));
const helpers_1 = require("../../utilities/helpers");
const router = express_1.default.Router({ mergeParams: true });
// TODO: Change name of route after device
router.route('/complete').get((req, res, next) => {
    req.requestData = Object.assign({}, {});
    res.responseData = Object.assign({}, {});
    next();
});
router.route('/timed').post((req, res, next) => {
    req.requestData = Object.assign({}, { query: {}, payload: req.body });
    res.responseData = Object.assign({}, {});
    req.requestData.query = helpers_1.helpers.generateDateTimeQuery(req.requestData.payload);
    next();
});
router.route('/dated').post((req, res, next) => {
    req.requestData = Object.assign({}, { query: {}, payload: req.body });
    res.responseData = Object.assign({}, {});
    req.requestData.query = helpers_1.helpers.generateDateQuery(req.requestData.payload);
    next();
});
exports.sensorRouter = router;
//# sourceMappingURL=index.js.map