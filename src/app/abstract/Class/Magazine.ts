import { PrintMedia } from "./PrintMedia";

export class Magazine extends PrintMedia {
    constructor(override name: string, override circulation: number, override price: number) {
        super();
    }

    calculateCost() {
        this.circulationCost = this.price * this.circulation;
    }
    
}