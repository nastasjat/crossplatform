export class Product {
    name: string = "";
    unit: string = "";
    qty!: number;
    price!: number;
    manufacturers: string[] = [];
    constructor(name: string, unit: string, qty: number, price: number, manufacturers: string[]) {
        this.name = name;
        this.unit = unit;
        this.qty = qty;
        this.price = price;
        this.manufacturers = manufacturers;
    }
}