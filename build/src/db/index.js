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
exports.db = void 0;
const MongoClient = require("mongodb").MongoClient;
const applicationConstants_1 = require("../components/applicationConstants");
// export const glasshouse = async (req, res, next) => {
//     const client = new MongoClient(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
//     try {
//         await client.connect();
//         const db = client.db("glasshousedb");
//         const collection = db.collection("glasshouse");
//         res.responseData.dataUpload = await collection.insertOne(req.body);
//         next();
//     } catch (error) {
//         return next(error);
//     }
// };
let dbo;
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        MongoClient.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
            if (err) {
                throw err;
            }
            else {
                console.log('Mongo db connected');
                dbo = db.db(applicationConstants_1.applicationConstants.database);
            }
        });
    }
    catch (err) {
        console.log('Error while initializing mongodb');
    }
});
const getSensorValues = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield dbo.collection(applicationConstants_1.applicationConstants.collection).find(query).toArray();
        return result;
    }
    catch (err) {
        throw err;
    }
});
const getDate = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield dbo.collection(applicationConstants_1.applicationConstants.dateCollection).find(query).toArray();
        return result;
    }
    catch (err) {
        throw err;
    }
});
const getLastSensorValues = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield dbo.collection(applicationConstants_1.applicationConstants.collection).find().sort({ _id: -1 }).limit(1).toArray();
        return result;
    }
    catch (err) {
        throw err;
    }
});
const uploadSensorValues = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sensorUpload = yield dbo.collection(applicationConstants_1.applicationConstants.collection).insertOne(data);
        return sensorUpload;
    }
    catch (err) {
        throw err;
    }
});
exports.db = { init, getSensorValues, getDate, getLastSensorValues, uploadSensorValues };
//# sourceMappingURL=index.js.map