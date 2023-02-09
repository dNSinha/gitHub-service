"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const trvLogger = require('@trv/logger')();
const logInfo = {};
const loggerSelection = {
    debug: (event, message) => {
        if (process.env.VERBOSE_LOGGING !== 'true') {
            return null;
        }
        console.log(`${event} - debug:`, message);
    },
    info: (event, details, meta) => {
        if (process.env.VERBOSE_LOGGING !== 'true') {
            return null;
        }
        trvLogger.info(`${event} - info:` + details && details.message, Object.assign(logInfo, {
            statusCode: details && details.status,
            meta: meta && JSON.stringify(meta)
        }));
    },
    error: (event, details, meta) => {
        trvLogger.error(`${event} - failure:`, Object.assign(logInfo, {
            error: details && details.message,
            statusCode: details && details.status,
            meta: meta && JSON.stringify(meta)
        }));
    }
};
exports.logger = loggerSelection;
//# sourceMappingURL=index.js.map