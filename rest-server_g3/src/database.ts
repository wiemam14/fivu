import { Student } from './student';

export class Database {

    public static getInstance (): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    private static instance: Database;

    // ********************************************

    private students: { [htlid: string]: Student } = {};

    private constructor () {
        this.add(new Student('samdam14', 'Sammer', 'Daniel'));
    }

    public add (s: Student) {
        this.students[s.getHtlid()] = s;
        // this.students.suspam14 = s;
    }

    public get (htlid: string): Student {
        return this.students[htlid];
    }

    public remove (htlid: string) {
        delete this.students[htlid];
    }



}
