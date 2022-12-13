import ICar from "../interfaces/ICar";

class Car implements ICar{
    color: string;
    noCylinders: number;
    type: 'petrol' | 'diesel' | 'cng' | 'ev';

    getModel(): {} {
        return {
            color: this.color,
            noCylinders: this.noCylinders,
            type: this.type
        }
    }
}

export default Car;