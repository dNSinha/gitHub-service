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
const MongoClient = require("mongodb").MongoClient;
const glasshouse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const client = new MongoClient(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        yield client.connect();
        const db = client.db("glasshousedb");
        const collection = db.collection("glasshouse");
        res.responseData.dataUpload = yield collection.insertOne(req.body);
        next();
    }
    catch (error) {
        return next(error);
    }
});
exports.glasshouse = glasshouse;
//# sourceMappingURL=index.js.map