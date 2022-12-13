import IScooter from "../interfaces/IScooter";

class Scooter implements IScooter{
    color: string;
    noCylinders: number;
    stroke: '4' | '2';

    getType(){
        return {
            color: this.color,
            noCylinders: this.noCylinders,
            stroke: this.stroke
        }
    }
}

export default Scooter;