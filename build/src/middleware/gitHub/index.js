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
exports.gitHub = void 0;
const gitHub_1 = __importDefault(require("../../services/gitHub"));
const userDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userName = req.requestData.userName;
        res.responseData.userDetails = yield gitHub_1.default.getUserDetails(userName);
        return next();
    }
    catch (error) {
        return next(error);
    }
});
const userRepos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userName = req.requestData.userName;
        res.responseData.userRepos = yield gitHub_1.default.getUserRepos(userName);
        return next();
    }
    catch (error) {
        return next(error);
    }
});
const userGists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userName = req.requestData.userName;
        res.responseData.userGists = yield gitHub_1.default.getGists(userName);
        return next();
    }
    catch (error) {
        return next(error);
    }
});
const userOrgs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userName = req.requestData.userName;
        res.responseData.userOrgs = yield gitHub_1.default.getOrganisation(userName);
        return next();
    }
    catch (error) {
        return next(error);
    }
});
exports.gitHub = {
    userDetails,
    userRepos,
    userGists,
    userOrgs
};
//# sourceMappingURL=index.js.map