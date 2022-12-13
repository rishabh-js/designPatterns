import Car from "./Car";

class SuvCar extends Car {
    constructor(color: string) {
        super();
        this.color = color;
        this.noCylinders = 8;
        this.type = 'diesel';
    }
}

export default SuvCar;