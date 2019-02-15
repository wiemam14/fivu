"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const database_1 = require("./database");
class Server {
    constructor(port) {
        this._server = express();
        this._server.use(bodyParser.urlencoded({ extended: false }));
        this._server.use(bodyParser.json());
        this._server.get('/student', (req, resp, next) => this.handleGetStudent(req, resp, next));
        this._server.put('/student', (req, resp, next) => this.handlePutStudent(req, resp, next));
        this._server.listen(port);
        console.log('HTTP server gestartet auf Port ' + port);
    }
    handleGetStudent(req, resp, next) {
        console.log(req.query.htlid);
        const id = req.query.htlid;
        const s = database_1.Database.getInstance().get(id);
        if (s) {
            resp.json(s);
            return;
        }
        resp.status(404);
        resp.end();
    }
    handlePutStudent(req, resp, next) {
        console.log(req.query.htlid);
        console.log(req.body);
        resp.send('TEST');
        resp.end();
    }
}
exports.Server = Server;

//# sourceMappingURL=server.js.map
