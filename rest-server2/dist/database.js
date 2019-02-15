"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
class Database {
    constructor() {
        this.students = {};
        this.add(new student_1.Student('tutram12', 'Tuttner', 'Raphael'));
        this.add(new student_1.Student('zitkam13', 'Zitz', 'Karlheinz'));
    }
    static getInstance() {
        if (Database.instance == null) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    add(s) {
        if (this.students[s.getHtlid()]) {
            throw new Error('student already existing');
        }
        this.students[s.getHtlid()] = s;
    }
    get(htlid) {
        return this.students[htlid];
    }
}
exports.Database = Database;

//# sourceMappingURL=database.js.map
