"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpers = void 0;
const helpers = {
    isEmpty: (value) => {
        return value === undefined || value === null || value === '' || value === 'unknown';
    },
    isMissing: (value) => {
        return value === undefined || value === null || Object.keys(value).length === 0;
    },
    getDate: (data) => {
        return data && data.split("T") && data.split("T")[0];
    },
    getTime: (data) => {
        const time = data && data.split("T") && data.split("T")[1];
        return time && time.slice(0, -11);
    },
    generateDateTimeQuery: (data) => {
        const query = {
            date: data.date,
            time: data.time
        };
        return query;
    },
    generateDateQuery: (data) => {
        const query = {
            date: data.date
        };
        return query;
    },
    arrayContainsArray: (superset, subset) => {
        try {
            if (subset.length < 1) {
                return false;
            }
            return subset.every(function (value) {
                return superset.indexOf(value) >= 0;
            });
        }
        catch (e) {
            return false;
        }
    },
    removeWhitespaces: (s) => {
        const str = s.replace(/-/g, '');
        return str.replace(/\s/g, '');
    },
    parseJson: (text) => {
        try {
            return JSON.parse(text);
        }
        catch (error) {
            return null;
        }
    },
    tryParseJSON: (str) => {
        try {
            if (str && typeof str === 'object') {
                return str;
            }
            else {
                const o = JSON.parse(str);
                //return helpers.tryParseJSON(o)
                return o;
            }
        }
        catch (e) { }
        return false;
    },
    keyValueExists: (obj, key, value) => {
        if (!obj)
            return false;
        if (obj.hasOwnProperty(key)) {
            const objValue = typeof obj[key] === 'string' ? obj[key].toLowerCase() : obj[key];
            return objValue === value;
        }
        return false;
    },
    getParamCaseInsensitive: ({ object = {}, key }) => {
        if (typeof object !== 'object') {
            throw new Error(`'object' must be an object but was type ${typeof object}`);
        }
        if (object === null) {
            throw new Error(`'object' must be an object but was null`);
        }
        if (typeof key !== 'string') {
            throw new Error(`'key' must be a string but was type ${typeof key}`);
        }
        const keyIndex = Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());
        return object[keyIndex == null ? 0 : keyIndex];
    },
    formatErrors: (errors) => {
        const formatted = { invalidParams: [] };
        errors.forEach((error) => {
            formatted.invalidParams.push({
                name: error.context.key,
                reason: error.message,
                detail: error.context
            });
        });
        return formatted;
    }
};
exports.helpers = helpers;
//# sourceMappingURL=index.js.map