"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const sample_fetch_service_1 = __importDefault(require("../../services/samples/sample-fetch.service"));
const Joi = require('joi');
const sampleFetchService = new sample_fetch_service_1.default();
const router = express_1.default.Router();
router.get('/user', (req, res) => {
    const user = res && res.locals && res.locals.user;
    const response = {
        userName: user.userName,
        userGroups: user.groups,
        userRoles: user.roles
    };
    res.send(response);
});
router.get('/fetch', (req, res, next) => {
    const schema = Joi.object()
        .keys({
        test: Joi.string().required()
    })
        .error(() => 'test cannot be empty; e.g., /api/samples/fetch?test=1 will work whereas /api/samples/fetch will returns error message');
    const validationResult = Joi.validate(req.query, schema, {});
    if (validationResult.error) {
        const err = validationResult.error;
        console.error(err);
        next(err);
    }
    sampleFetchService
        .pingOtherApplication()
        .then(resp => {
        res.send(resp && resp.data);
    })
        .catch(err => {
        console.error(err);
        next(err);
    });
});
exports.sampleRoutes = router;
//# sourceMappingURL=routes.js.map