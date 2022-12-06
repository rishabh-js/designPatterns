import Chair from "./Chair";

class SmallChair extends Chair{
    constructor() {
        super();
        this.height = 10;
        this.width = 10;
        this.depth = 10;
    }
}

export default SmallChair;