"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const src_1 = __importDefault(require("../../../../src"));
const request = () => (0, supertest_1.default)((0, src_1.default)());
const test_helper_1 = require("../../../test-helper");
(0, test_helper_1.setUpApiTest)();
const token = (0, test_helper_1.getValidToken)();
const path = '/api/ping';
const method = 'GET';
describe(`${method} ${path}`, () => {
    test('returns a 200', done => {
        request()
            .get(path)
            .set(test_helper_1.authHeader, token)
            .expect(200, done);
    });
    test('returns a pong message', done => {
        request()
            .get('/api/ping')
            .set(test_helper_1.authHeader, token)
            .expect(200)
            .then(response => {
            expect(response.body).toEqual({ message: 'pong' });
            done();
        });
    });
});
//# sourceMappingURL=ping.get.spec.js.map