
import * as express from 'express';
import * as bodyParser from 'body-parser';

export class Server {

    private _server: express.Express;

    constructor (port: number) {
        this._server = express();

        // this._server.get('/student', this.handleGetStudent.bind(this));
        this._server.use(bodyParser.urlencoded({ extended: false}));
        this._server.get('/student', (req, resp, next) => this.handleGetStudent(req, resp, next)); //  Macht im Grunde das gleiche wie oben

        this._server.listen(port);
        console.log('HTTP Server gestartet auf Port' + port);
    }

    private handleGetStudent (req: express.Request, resp: express.Response, next: express.NextFunction) {// Response um die Response beeinflussen zu können
        console.log(req.body.query.htlid);
        switch (req.query.htlid) {
            case 'tutram12':
                resp.json({ surname: 'Tuttner', firstname: 'Raphael'});
                break;

            case 'zitkam13':
                resp.json({ surname: 'Zitz', firstname: 'Karl-Heinz'});
                break;

            default:
                resp.status(404);
        }
        resp.send('Antwort' + req.query.htlid);
    }

}
