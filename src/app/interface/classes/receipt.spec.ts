import { Receipt } from './receipt';

describe('Receipt', () => {
  let receipt: Receipt;

  beforeEach(() => {
    receipt = new Receipt('6546746', new Date(), 'Silpo', 75.5, 'Cash');
  });

  it('Creating an instance of class Receipt', () => {
    expect(receipt).toBeTruthy();
  });

  it('Formatting details', () => {
    const expectedDetails = 'Receipt 6546746 issued on ' + receipt.issueDate.toLocaleDateString() +
      ' for Silpo Amount: 75.5 Payment Method: Cash';
    expect(receipt.show()).toBe(expectedDetails);
  });
});
