import { Race } from "./race";

export class Data{

    public _id : string;
    public picture : string;
    public age : number;
    public name : string;
    public team : string;
    public races : Race[];


    constructor(_id , picture, age, name, team, races){
        this._id = _id;
        this.picture = picture;
        this.age=age;
        this.name=name;
        this.team=team;
        this.races=races;
    };

}