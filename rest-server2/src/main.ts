
/* tslint:disable */
console.log("Hallo 1");
/* tslint:enable */

/*tslint:disable:no-trailing-whitespace */
console.log('Hallo 2');  
/*tslint:enable:no-trailing-whitespace */

import { Server } from './server';

class Main {

    public static main () {
        const server = new Server(4711);
    }
}

Main.main();








