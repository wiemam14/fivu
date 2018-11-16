
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Database } from './database';

export class Server {

    private _server: express.Express;

    constructor (port: number) {
        this._server = express(); // erzeugen

        // this._server.get('/student', this.handleGetStudent.bind(this));
        this._server.use(bodyParser.urlencoded({ extended: false}));    // use um ganzes Modul einzubauen
        this._server.use(bodyParser.json());
        this._server.get('/student', (req, resp, next) => this.handleGetStudent(req, resp, next));  // Konfiguration, baut Sprung ein
        this._server.put('/student', (req, resp, next) => this.handlePutStudent(req, resp, next));

        this._server.listen(port);  // server wird gestartet
        console.log('HTTP Server gestartet auf Port' + port);
    }

    private handleGetStudent (
                                req: express.Request,
                                resp: express.Response,
                                next: express.NextFunction) {
        console.log(req.body.query.htlid); // legt Body-Parser an

        const id = req.query.htlid;
        const s = Database.getInstance().get(id);
        if (s) {
            resp.json(s);
            return;
        }
        resp.status(404);
        resp.end();
    }

    private handlePutStudent  (req: express.Request, resp: express.Response, next: express.NextFunction) {
        console.log(req.query.htlid);
        console.log(req.body);
        resp.send('TEST');
        resp.end();

    }
}
