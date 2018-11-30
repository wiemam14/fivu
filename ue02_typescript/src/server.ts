
// Node.js Modul
// import * as http from 'http';
import * as path from 'path';
import * as bodyParser from 'body-parser';

// externes Modul
import * as express from 'express';


export class Server {
    private _port: number;
    private _server: express.Express;

    constructor (port: number) {
        const assetsPath = path.join(__dirname, '..', 'assets');
        this._port = port;
        this._server = express();

        this._server.set('views', path.join(__dirname, 'views')); // Finden der Templates
        const engine = this._server.set('view engine', 'pug'); // merken sie uns in einer Variable
        engine.locals.pretty = true;    // es soll schön produziert werden

        this._server.use('/', express.static(assetsPath));  // Damit alle Dateien in den Assets Ordner kommen
        this._server.use(bodyParser.json()); // BodyParser erkennt dies
        this._server.use(bodyParser.urlencoded());
        this._server.post('/login.html',
            (req, res, next) => this.handlePostLogin(req, res, next));  // POST
        this._server.get('/list',
            (req, res, next) => this.handleGetListe(req, res, next));
    }

    public start () {
        this._server.listen(this._port);
        console.log('HTTP Server gestartet auf port' + this._port);
    }

    public get port () {
        return this._port;
    }



    private handlePostLogin(req: express.Request, res: express.Response, next: express.NextFunction) {

        if (req.body.email === 'test@test.at' && req.body.password === 'geheim') {
            res.render('welcome.pug', { anrede: 'Herr', name: 'Rossi'});  // Greift auf pug über render zu
        } else {
            res.status(404).send('404 NOT AUTHORIZED');
        }
    }

    private handleGetListe(req: express.Request, res: express.Response, next: express.NextFunction) {

        const filePath = path.join(__dirname, '..', 'assets', 'liste.html');
        console.log(filePath);
        res.sendFile(filePath);
    }




}
