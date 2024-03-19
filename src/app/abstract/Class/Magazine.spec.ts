import { Magazine } from './Magazine';

describe('Magazine Testing', () => {
    let magazine: Magazine;

    beforeEach(() => {
        magazine = new Magazine('Magazine', 1000, 245);
    });

    it('Creating an instance of class Magazine', () => {
        expect(magazine).toBeTruthy();
    });

    it('Creating a Magazine with a negative circulation', () => {
        expect(() => new Magazine('Magazine', -1000, 245)).toThrow(new Error('Invalid circulation'));
    });

    it('Creating a Magazine with a decimal circulation', () => {
        expect(() => new Magazine('Magazine', 847.3, 245)).toThrow(new Error('Invalid circulation'));
    });

    it('Creating a Magazine with a negative price', () => {
        expect(() => new Magazine('Magazine', 1000, -245)).toThrow(new Error('Price <= 0'));
    });

    it('Calculating the circulation cost of magazines with a circulation of 1000 and a price of 245', () => {
        magazine.calculateCost();
        expect(magazine.circulationCost).toBe(1000 * 245);
    });
});