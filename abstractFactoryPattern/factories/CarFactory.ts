import Car from "../classes/Car";
import HatchBack from "../classes/hatchBack";
import SuvCar from "../classes/SuvCar";

class CarFactory {
    static createCar(type: string): Car {
        switch(type) {
            case 'hatchBack': 
                return new HatchBack('white'); 
            case 'suvCar':
                return new SuvCar('white');
            default: 
                throw 'Please select either hatchBack or suvCar cars'
        }
    }
}

export default CarFactory;