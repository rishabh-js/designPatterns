import Scooter from "./Scooter";

class Vespa extends Scooter {
    constructor(color: string) {
        super();
        this.color = color;
        this.stroke = '2';
        this.noCylinders = 1;
    }
}

export default Vespa