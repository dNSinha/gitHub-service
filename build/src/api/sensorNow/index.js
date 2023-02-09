"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sensorNowRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router({ mergeParams: true });
router.route('/current').get((req, res, next) => {
    req.requestData = Object.assign({}, {});
    res.responseData = Object.assign({}, {});
    next();
});
exports.sensorNowRouter = router;
//# sourceMappingURL=index.js.map