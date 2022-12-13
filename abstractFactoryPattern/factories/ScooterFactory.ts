import MotorBike from "../classes/MotorBike";
import Scooter from "../classes/Scooter";
import Vespa from "../classes/Vespa";

class ScooterFactory {
    static createScooter(type: string): Scooter {
        switch(type) {
            case 'vespa': 
                return new Vespa('white'); 
            case 'motorBike':
                return new MotorBike('white');
            default: 
                throw 'Please select either vespa or motorBike scooters'
        }
    }
}

export default ScooterFactory;