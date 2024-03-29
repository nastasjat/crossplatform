import { Bill } from './bill';

describe('Bill', () => {
  let bill: Bill;

  beforeEach(() => {
    bill = new Bill('654646', new Date(), 'Electricity', 200, new Date(2023, 4, 1));
  });

  it('Creating an instance of class Bill', () => {
    expect(bill).toBeTruthy();
  });

  it('Formatting details', () => {
    const expectedDetails = 'Bill 654646 issued on ' + bill.issueDate.toLocaleDateString() +
      ' for Electricity due on ' + bill.dueDate.toLocaleDateString() + ' Amount: 200';
    expect(bill.show()).toBe(expectedDetails);
  });
});
