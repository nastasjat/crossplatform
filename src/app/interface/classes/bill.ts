import { IShow } from './../interfaces/ishow';
import { Document } from './document';

export class Bill extends Document implements IShow {
    description: string;
    amount: number;
    dueDate: Date;
    
    constructor(id: string, issueDate: Date, description: string, amount: number, dueDate: Date) {
        super(id, issueDate);
        this.description = description;
        this.amount = amount;
        this.dueDate = dueDate;
    }
    
    getDocumentDetails(): string {
        return 'Bill ' + this.id + ' issued on ' + this.issueDate.toLocaleDateString() + ' for ' +
            this.description + ' due on ' + this.dueDate.toLocaleDateString();
    };
    
    show(): string {
        return this.getDocumentDetails() + ' Amount: ' + this.amount;
    }
}