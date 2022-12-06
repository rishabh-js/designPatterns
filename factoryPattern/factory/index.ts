import BigChair from "../classes/BigChair";
import Chair from "../classes/Chair";
import SmallChair from "../classes/SmallChair";

class ChairFactory {
    static getChair(type: string): Chair {
        switch(type) {
            case 'bigChair': 
                return new BigChair();
            case 'smallChair': 
                return new SmallChair();
            default: 
                throw 'please select relevant chair';
        }
    }
};

export default ChairFactory;