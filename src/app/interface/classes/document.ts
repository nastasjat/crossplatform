import { IDocumentDetails } from './../interfaces/i-document-details';

export abstract class Document implements IDocumentDetails{
    id: string;
    issueDate: Date;

    constructor(id: string, issueDate: Date) {
        this.id = id;
        this.issueDate = issueDate;
    }

    abstract getDocumentDetails(): string;
}