export abstract class PrintMedia {
    name: string = "";
    circulation!: number;
    price!: number;
    numPages!: number;
    pageCost!: number;
    circulationCost!: number;

    constructor() { };

    abstract calculateCost(): any;
}