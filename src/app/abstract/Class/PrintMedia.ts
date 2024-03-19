export abstract class PrintMedia {
    name: string = "";
    circulation!: number;
    price!: number;
    numPages!: number;
    pageCost!: number;
    circulationCost!: number;

    constructor(name: string, circulation: number) {
        if (circulation <= 0 || !Number.isInteger(circulation)) throw new Error('Invalid circulation');
        this.name = name;
        this.circulation = circulation;
      };

    abstract calculateCost(): any;
}