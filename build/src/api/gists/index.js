"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gistsRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router({ mergeParams: true });
router.route('/:userName').get((req, res, next) => {
    var _a;
    req.requestData = Object.assign({}, { userName: (_a = req.params) === null || _a === void 0 ? void 0 : _a.userName });
    res.responseData = Object.assign({}, {});
    next();
});
exports.gistsRouter = router;
//# sourceMappingURL=index.js.map