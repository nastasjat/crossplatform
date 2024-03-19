import { Newspaper } from './Newspaper';

describe('Newspaper Testing', () => {
    let newspaper: Newspaper;

    beforeEach(() => {
        newspaper = new Newspaper('Newspaper', 500, 15, 7);
    });

    it('Creating an instance of class Newspaper', () => {
        expect(newspaper).toBeTruthy();
    });

    it('Creating a Newspaper with a negative number of pages', () => {
        expect(() => new Newspaper('Newspaper', 200, -15, 7)).toThrow(new Error('Invalid number of pages'));
    });

    it('Creating a Newspaper with a decimal number of pages', () => {
        expect(() => new Newspaper('Newspaper', 200, 15.5, 7)).toThrow(new Error('Invalid number of pages'));
    });

    it('Creating a Newspaper with a negative page price', () => {
        expect(() => new Newspaper('Newspaper', 1000, 245, -10)).toThrow(new Error('Page cost <= 0'));
    });

    it('Calculating the circulation cost of newspapers with a circulation of 500, a page number of 15, and a price of 7', () => {
        newspaper.calculateCost();
        expect(newspaper.circulationCost).toBe(500 * 15 * 7);
    });
});