import { AirWaybill } from "./air-waybill";

describe('AirWaybill', () => {
  let airWaybill: AirWaybill;

  beforeEach(() => {
    airWaybill = new AirWaybill('AL-3165461', new Date(), 'Cargo Shipment', 1000, 0.05, 0.02, 'AL');
  });

  it('Creating an instance of class AirWaybill', () => {
    expect(airWaybill).toBeTruthy();
  });

  it('Calculating airline commission', () => {
    const expectedCommission = 1000 * (1 + 0.05) * 0.02;
    expect(airWaybill.calculateAirlineCommission()).toBe(expectedCommission);
  });

  it('Formatting details', () => {
    const expectedDetails = 'Air Waybill AL-3165461 issued on ' + airWaybill.issueDate.toLocaleDateString() +
      ' by AL for Cargo Shipment Price: 1000 Tax: 0.05 Total: ' + airWaybill.calculateTotal().toFixed(2) +
      ' Airline Commission: ' + airWaybill.calculateAirlineCommission().toFixed(3);
    expect(airWaybill.show()).toBe(expectedDetails);
  });
});
