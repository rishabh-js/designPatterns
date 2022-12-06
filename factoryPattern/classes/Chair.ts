import IChair from './../models/Chair'; 

class Chair implements IChair {
    height: number;
    width: number;
    depth: number;

    getDimensions(): {} {
        return {height: this.height, width: this.width, depth: this.depth};
    }
};

export default Chair;