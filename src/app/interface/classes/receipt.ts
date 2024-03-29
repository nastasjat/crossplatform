import { IShow } from '../interfaces/ishow';
import { Document } from './document';

export class Receipt extends Document implements IShow {
    description: string;
    amount: number;
    paymentMethod: string;
    
    constructor(id: string, issueDate: Date, description: string, amount: number, paymentMethod: string) {
        super(id, issueDate);
        this.description = description;
        this.amount = amount;
        this.paymentMethod = paymentMethod;
    }

    getDocumentDetails(): string {
        return 'Receipt ' + this.id + ' issued on ' + this.issueDate.toLocaleDateString() + ' for ' + this.description;
    }
    
    show(): string {
        return this.getDocumentDetails() + ' Amount: ' + this.amount + ' Payment Method: ' + this.paymentMethod;
  }
}