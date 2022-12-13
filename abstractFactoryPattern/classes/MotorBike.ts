import Scooter from "./Scooter";

class MotorBike extends Scooter {
    constructor(color: string) {
        super();
        this.color = color;
        this.stroke = '4';
        this.noCylinders = 2;
    }
}

export default MotorBike;