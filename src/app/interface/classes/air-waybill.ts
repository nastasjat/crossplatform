import { IShow } from '../interfaces/ishow';
import { Invoice } from './invoice';

export class AirWaybill extends Invoice implements IShow {
    airlineCode: string;
    commissionRate: number;

    constructor(
        id: string,
        issueDate: Date,
        description: string,
        price: number,
        taxRate: number,
        commisiionRate: number,
        airlineCode: string) {
        
        super(id, issueDate, description, price, taxRate);
        this.airlineCode = airlineCode;
        this.commissionRate = commisiionRate;
    }

    override getDocumentDetails(): string {
        return 'Air Waybill ' + this.id + ' issued on ' +
            this.issueDate.toLocaleDateString() + ' by ' + this.airlineCode + ' for ' + this.description;
    }

    calculateAirlineCommission(): number {
        return this.calculateTotal() * this.commissionRate;
    }

    override show(): string {
        return this.getDocumentDetails() + ' Price: ' + this.price + ' Tax: ' +
            this.taxRate + ' Total: ' + this.calculateTotal().toFixed(2) +
            ' Airline Commission: ' + this.calculateAirlineCommission().toFixed(3);
    }
}

