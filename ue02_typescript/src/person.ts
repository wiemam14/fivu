
export class Person {

    private _vorname: string;
    private _nachname: string;
    private _birthYear: number;

    // tslint:disable:whitespace
    public constructor (vorname: string,nachname: string, birthYear: number) {

        this._vorname   = vorname  ;
        this._nachname  = nachname ;
        this._birthYear = birthYear;
     }

     // tslint:disable:one-line

     public get vorname   (): string {  //  erscheint nicht als Methode sondern als Attribut
         return this.vorname ;
     }

     public get nachname  (): string {
         return this.nachname ;
    }

     public get birthYear (): number {
         return this.birthYear;
     }

     public set vorname (v: string) {
         if(v === undefined || v === null || v === '') {
            throw Error('invalid value');
        }
        this._vorname = v;
    }

    public toString (): string {
        return this._nachname + ' ' +this._vorname;
    }
}
