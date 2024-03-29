import { Invoice } from "./invoice";

describe('Invoice Testing', () => {
    let invoice: Invoice;

    beforeEach(() => {
        invoice = new Invoice('125454', new Date(), 'Laptop', 5000, 0.07);
    });

    it("Creating an instance of class Invoice", () => {
        expect(invoice).toBeTruthy();
    });

    it('Calculate total correctly', () => {
    const expectedTotal = 5000 * (1 + 0.07); 
    expect(invoice.calculateTotal()).toBe(expectedTotal);
    });
    
    it('Format details correctly', () => {
    const expectedDetails = 'Invoice 125454 issued on ' + invoice.issueDate.toLocaleDateString() +
      ' Price: 5000 Tax: 0.07 Total: ' + invoice.calculateTotal().toFixed(2);
    expect(invoice.show()).toBe(expectedDetails);
  });
});