"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hallo 1");
console.log('Hallo 2');
const server_1 = require("./server");
class Main {
    static main() {
        const server = new server_1.Server(4711);
    }
}
Main.main();

//# sourceMappingURL=main.js.map
