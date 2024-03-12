import { PrintMedia } from "./PrintMedia";

export class Newspaper extends PrintMedia {
    constructor(override name: string, override circulation: number, override numPages: number, override pageCost: number) {
        super();
    }

    calculateCost() {
        this.circulationCost = this.numPages * this.pageCost * this.circulation;
    }
    
}