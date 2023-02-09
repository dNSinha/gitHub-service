"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../src"));
require('dotenv').config({ silent: true });
(0, src_1.default)().listen(process.env.PORT, () => {
    console.log(`express ${process.env.NODE_ENV} server is listening on port ${process.env.PORT}`);
});
//# sourceMappingURL=server.js.map