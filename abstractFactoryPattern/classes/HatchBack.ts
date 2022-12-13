import Car from "./Car";

class HatchBack extends Car {
    constructor(color: string) {
        super();
        this.color = color;
        this.noCylinders = 4;
        this.type = 'ev';
    }
}

export default HatchBack;