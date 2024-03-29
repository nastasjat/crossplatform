import { Document } from './document';
import { IShow } from '../interfaces/ishow';
import { ICalculatable } from '../interfaces/icalculatable';

export class Invoice extends Document implements IShow, ICalculatable {
    description: string;
    price: number;
    taxRate: number;

    constructor(
    id: string,
    issueDate: Date,
    description: string,
    price: number,
    taxRate: number) {
        super(id, issueDate);
        this.description = description;
        this.price = price;
        this.taxRate = taxRate;
    }

    getDocumentDetails(): string {
        return 'Invoice ' + this.id + ' issued on ' + this.issueDate.toLocaleDateString();
    }

    calculateTotal(): number {
        const subtotal = this.price;
        const tax = subtotal * this.taxRate;
        const total = subtotal + tax;
        return total
    }

    show(): string {
        return this.getDocumentDetails() + ' Price: ' + this.price + ' Tax: ' + this.taxRate +
            ' Total: ' + this.calculateTotal().toFixed(2);
    }
}