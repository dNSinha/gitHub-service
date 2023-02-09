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
Object.defineProperty(exports, "__esModule", { value: true });
exports.glasshouse = void 0;
const db_1 = require("../../db");
const helpers_1 = require("../../utilities/helpers");
const getDevicePayload = (data) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    const payload = {
        avg_soil_moisture: (_b = (_a = data === null || data === void 0 ? void 0 : data.uplink_message) === null || _a === void 0 ? void 0 : _a.decoded_payload) === null || _b === void 0 ? void 0 : _b.avg_soil_moisture,
        soil_moisture1: (_d = (_c = data === null || data === void 0 ? void 0 : data.uplink_message) === null || _c === void 0 ? void 0 : _c.decoded_payload) === null || _d === void 0 ? void 0 : _d.soil_moisture1,
        soil_moisture2: (_f = (_e = data === null || data === void 0 ? void 0 : data.uplink_message) === null || _e === void 0 ? void 0 : _e.decoded_payload) === null || _f === void 0 ? void 0 : _f.soil_moisture2,
        soil_moisture3: (_h = (_g = data === null || data === void 0 ? void 0 : data.uplink_message) === null || _g === void 0 ? void 0 : _g.decoded_payload) === null || _h === void 0 ? void 0 : _h.soil_moisture3,
        humidity: (_k = (_j = data === null || data === void 0 ? void 0 : data.uplink_message) === null || _j === void 0 ? void 0 : _j.decoded_payload) === null || _k === void 0 ? void 0 : _k.humidity,
        temperature: (_m = (_l = data === null || data === void 0 ? void 0 : data.uplink_message) === null || _l === void 0 ? void 0 : _l.decoded_payload) === null || _m === void 0 ? void 0 : _m.temperature,
        water_tank: (_p = (_o = data === null || data === void 0 ? void 0 : data.uplink_message) === null || _o === void 0 ? void 0 : _o.decoded_payload) === null || _p === void 0 ? void 0 : _p.water_tank,
        light: (_r = (_q = data === null || data === void 0 ? void 0 : data.uplink_message) === null || _q === void 0 ? void 0 : _q.decoded_payload) === null || _r === void 0 ? void 0 : _r.light,
        date: helpers_1.helpers.getDate(data === null || data === void 0 ? void 0 : data.received_at),
        time: helpers_1.helpers.getTime(data === null || data === void 0 ? void 0 : data.received_at)
    };
    return payload;
};
const uploadSensor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = getDevicePayload(req.requestData.payload);
        res.responseData.sensorUpload = yield db_1.db.uploadSensorValues(payload);
        return next();
    }
    catch (error) {
        return next(error);
    }
});
const getTimedSensor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.requestData.query ? req.requestData.query : {};
        res.responseData.sensorValues = yield db_1.db.getSensorValues(query);
        return next();
    }
    catch (error) {
        return next(error);
    }
});
const getLastSensor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.responseData.sensorValues = yield db_1.db.getLastSensorValues();
        return next();
    }
    catch (error) {
        return next(error);
    }
});
exports.glasshouse = {
    uploadSensor,
    getTimedSensor,
    getLastSensor
};
//# sourceMappingURL=index.js.map