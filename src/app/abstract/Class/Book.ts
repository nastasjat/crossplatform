import { PrintMedia } from "./PrintMedia";

export class Book extends PrintMedia {
    constructor(override name: string, override circulation: number, override numPages: number, override pageCost: number) {
        super(name, circulation);
        if (numPages <= 0 || !Number.isInteger(numPages)) throw new Error('Invalid number of pages');
        if (pageCost <= 0) throw new Error('Page cost <= 0');
    }

    calculateCost() {
        this.circulationCost = this.numPages * this.pageCost * this.circulation;
    }
}
