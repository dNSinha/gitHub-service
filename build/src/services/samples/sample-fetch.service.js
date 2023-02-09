"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class SampleFetchService {
    /**
     * Demonstration of using Axios to call a GET route of another application.
     */
    pingOtherApplication() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios_1.default.get('http://interaction-history-listener-uat.cfn.travp.net/ping');
            }
            catch (err) {
                console.error(err);
                return Promise.reject(err);
            }
        });
    }
}
exports.default = SampleFetchService;
//# sourceMappingURL=sample-fetch.service.js.map