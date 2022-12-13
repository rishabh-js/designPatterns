import ICar from "../interfaces/ICar";
import IScooter from "../interfaces/IScooter";
import CarFactory from "./CarFactory";
import ScooterFactory from "./ScooterFactory";

type convience =  ICar | IScooter;

type convienceOptions = 'hatchBack'|'suvCar'|'vespa'|'motorBike';

class Convience {
    static getConvience(type: convienceOptions): convience {
        switch(type) {
            case 'hatchBack':
            case 'suvCar':
                return CarFactory.createCar(type);
            case 'vespa':
            case 'motorBike':
                return ScooterFactory.createScooter(type);
            default: 
                throw 'Please select either car or scooter';
        }
    }
}

export default Convience;