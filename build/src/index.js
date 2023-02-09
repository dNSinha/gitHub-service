"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_1 = require("./api");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cors_1 = __importDefault(require("cors"));
const yaml = require('yamljs');
const swaggerDocument = yaml.load('./swagger.yaml');
const app = () => {
    const app = (0, express_1.default)();
    app.use(body_parser_1.default.json());
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use((0, cors_1.default)());
    app.use('/api', api_1.routes);
    if (process.env.ENABLE_SWAGGER === 'true')
        app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument, { explorer: true }));
    return app;
};
exports.default = app;
//# sourceMappingURL=index.js.map