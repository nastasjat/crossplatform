import { PrintMedia } from "./PrintMedia";

export class Magazine extends PrintMedia {
    constructor(override name: string, override circulation: number, override price: number) {
        super(name, circulation);
        if (price <= 0) throw new Error('Price <= 0');
    }

    calculateCost() {
        this.circulationCost = this.price * this.circulation;
    }
    
}