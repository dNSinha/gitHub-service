"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router({ mergeParams: true });
// TODO: Change name of route after device
router.route('/').get((req, res, next) => {
    req.requestData = Object.assign({}, {});
    res.responseData = Object.assign({}, {});
    next();
});
exports.dateRouter = router;
//# sourceMappingURL=index.js.map