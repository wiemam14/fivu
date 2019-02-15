import { Student } from './student';

export class Database {

    private static instance: Database;

    public static getInstance (): Database {
        if (Database.instance == null) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    private students: { [ id: string ]: Student } = {};

    private constructor () {

         this.add(new Student('tutram12', 'Tuttner', 'Raphael' ));
         this.add(new Student('zitkam13', 'Zitz', 'Karlheinz' ));
    }

    public add (s: Student) {
        if (this.students[s.getHtlid()]) {
            throw new Error('student already existing');
        }
        this.students[s.getHtlid()] = s;
    }

    public get (htlid: string): Student {
        return this.students[htlid];
    }

}
