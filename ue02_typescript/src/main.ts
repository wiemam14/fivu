import { Server } from './server';



class Main {

    public static main () { // Java führt dies von selber aufgrund der Manifest-Datei aus
        const server = new Server(4711);
        server.start();
    }
}

Main.main();
