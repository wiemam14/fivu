
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Database } from './database';

export class Server {

    private _server: express.Express;

    constructor (port: number) {
        this._server = express();

        this._server.use(bodyParser.urlencoded({ extended: false }));
        this._server.use(bodyParser.json());
        this._server.get('/student', (req, resp, next) => this.handleGetStudent(req, resp, next));
        this._server.put('/student', (req, resp, next) => this.handlePutStudent(req, resp, next));

        this._server.listen(port);
        console.log('HTTP server gestartet auf Port ' + port);
    }

    private handleGetStudent (
                               req: express.Request,
                               resp: express.Response,
                               next: express.NextFunction) {
        console.log(req.query.htlid);

        const id = req.query.htlid;
        const s = Database.getInstance().get(id);
        if (s) {
            resp.json(s);
            return;
        }
        resp.status(404);
        resp.end();
    }

    private handlePutStudent (req: express.Request, resp: express.Response, next: express.NextFunction) {
        console.log(req.query.htlid);
        console.log(req.body);
        resp.send('TEST');
        resp.end();
    }
}
