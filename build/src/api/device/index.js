"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router({ mergeParams: true });
// TODO: Change name of route after device
router.route('/lora').post((req, res, next) => {
    req.requestData = Object.assign({}, { payload: req.body });
    res.responseData = Object.assign({}, {});
    next();
});
exports.deviceRouter = router;
//# sourceMappingURL=index.js.map