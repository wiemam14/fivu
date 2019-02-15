import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Database } from './database';

export class Server {

    private server: express.Express;

    public constructor () {
        this.server = express();
        this.server.use(bodyParser.urlencoded({ extended: false }));
        this.server.get('/status', (req, resp, next) => this.handleGetStatus(req, resp, next));
        this.server.get('/student', (req, resp) => this.handleGetStudent(req, resp));
        this.server.get('*', (req, resp) => this.handleGet(req, resp));
    }

    public start (port: number) {
        this.server.listen(port);
        console.log('Server auf Port ' + port + ' gestartet');
    }

    private handleGet (req: express.Request, resp: express.Response) {
        resp.status(400);
        resp.send('ERROR');
        // resp.send('Hallo');
        resp.end();
    }

    private handleGetStatus (req: express.Request, resp: express.Response, next: express.NextFunction) {
        resp.send('Server is running');
        resp.end();
    }

    private handleGetStudent (req: express.Request, resp: express.Response) {
        const s = Database.getInstance().get(req.query.htlid);
        if (s) {
            resp.json(s);
        } else {
            resp.status(404);
            resp.send('NOT FOUND');
        }
        resp.end();
    }
}

export class ServerError extends Error {
    constructor (msg: string, public cause: Error) {
        super(msg);
    }
}
