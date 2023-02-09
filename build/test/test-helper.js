"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenWithoutUserAccess = exports.testUserId = exports.getValidToken = exports.authHeader = exports.setUpApiTest = exports.getTestDate = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { tokenProvider, certificates } = require('@trv/auth-local-proxy');
const localIssuer = 'LOCAL_ISS';
const localAudience = 'LOCAL_AUD';
const authHeader = 'x-trv-accessgw';
exports.authHeader = authHeader;
const testUserId = 'TEST_USER_ID';
exports.testUserId = testUserId;
const getTestDate = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
};
exports.getTestDate = getTestDate;
const setUpApiTest = () => {
    process.env.NODE_ENV = 'test';
    process.env.TRAVAUTH_ISSUER = localIssuer;
    process.env.TRAVAUTH_AUDIENCE = localAudience;
    process.env.TRAVAUTH_SECRETORKEY = certificates.publicKey;
    process.env.TRAVAUTH_ROLESJSON = JSON.stringify({
        roles: { user: { groups: ['seed_app_user'] } }
    });
};
exports.setUpApiTest = setUpApiTest;
const getValidToken = () => {
    return tokenProvider.createToken(localIssuer, localAudience, testUserId, ['SEED_APP_USER']);
};
exports.getValidToken = getValidToken;
const getTokenWithoutUserAccess = () => {
    return tokenProvider.createToken(localIssuer, localAudience, testUserId, []);
};
exports.getTokenWithoutUserAccess = getTokenWithoutUserAccess;
//# sourceMappingURL=test-helper.js.map