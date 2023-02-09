"use strict";
// import express from 'express';
// const MongoClient = require("mongodb").MongoClient;
// const app = express();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const connectDB = async () => {
//     const client = new MongoClient(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
//     try {
//         await client.connect();
//         const db = client.db("glasshousedb");
//         app.locals.db = db;
//         console.log(`MongoDB Connected: ${client?.connection?.host}`)
//     } catch (err) {
//         console.error(err)
//         process.exit(1)
//     }
// }
// export { connectDB };
const MongoClient = require('mongodb').MongoClient;
class Connection {
    static open() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.db)
                return this.db;
            this.db = yield MongoClient.connect(this.url, this.options);
            return this.db;
        });
    }
}
Connection.db = null;
Connection.url = process.env.MONGODB_URL;
Connection.options = {
    bufferMaxEntries: 0,
    reconnectTries: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
module.exports = { Connection };
//# sourceMappingURL=index.js.map