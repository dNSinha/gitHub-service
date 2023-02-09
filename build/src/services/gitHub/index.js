"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const URI = "https://api.github.com/users/";
class GitHubService {
    static getUserDetails(userName) {
        return new Promise((resolve, reject) => {
            const url = URI + userName;
            axios_1.default.get(url).then(response => {
                resolve(response && response.data);
            }).catch(err => {
                reject(err);
            });
        });
    }
    static getUserRepos(userName) {
        return new Promise((resolve, reject) => {
            const url = URI + userName + '/repos';
            axios_1.default.get(url).then(response => {
                resolve(response && response.data);
            }).catch(err => {
                reject(err);
            });
        });
    }
    static getGists(userName) {
        return new Promise((resolve, reject) => {
            const url = URI + userName + "/gists";
            axios_1.default.get(url).then(response => {
                resolve(response && response.data);
            }).catch(err => {
                reject(err);
            });
        });
    }
    static getOrganisation(userName) {
        return new Promise((resolve, reject) => {
            const url = URI + userName + "/orgs";
            axios_1.default.get(url).then(response => {
                resolve(response && response.data);
            }).catch(err => {
                reject(err);
            });
        });
    }
}
exports.default = GitHubService;
;
//# sourceMappingURL=index.js.map