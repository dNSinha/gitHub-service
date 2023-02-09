"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const formattedResponse_1 = require("../middleware/formattedResponse");
const ping_1 = require("./ping");
const user_1 = require("./user");
const repos_1 = require("./repos");
const gists_1 = require("./gists");
const orgs_1 = require("./orgs");
const gitHub_1 = require("../middleware/gitHub");
const router = express_1.default.Router({ mergeParams: true });
router.use('/ping', ping_1.pingRoutes, formattedResponse_1.formattedResponse);
router.use('/users', user_1.userRouter, gitHub_1.gitHub.userDetails, formattedResponse_1.formattedResponse);
router.use('/repos', repos_1.reposRouter, gitHub_1.gitHub.userRepos, formattedResponse_1.formattedResponse);
router.use('/gists', gists_1.gistsRouter, gitHub_1.gitHub.userGists, formattedResponse_1.formattedResponse);
router.use('/orgs', orgs_1.orgsRouter, gitHub_1.gitHub.userOrgs, formattedResponse_1.formattedResponse);
exports.routes = router;
//# sourceMappingURL=index.js.map