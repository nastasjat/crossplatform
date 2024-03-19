import { Book } from './Book';

describe('Book Testing', () => {
    let book: Book;

    beforeEach(() => {
        book = new Book('Book', 500, 15, 7);
    });

    it('Creating an instance of class Book', () => {
        expect(book).toBeTruthy();
    });

    it('Creating a Book with a negative number of pages', () => {
        expect(() => new Book('Book', 200, -15, 7)).toThrow(new Error('Invalid number of pages'));
    });

    it('Creating a Book with a decimal number of pages', () => {
        expect(() => new Book('Book', 200, 15.5, 7)).toThrow(new Error('Invalid number of pages'));
    });

    it('Creating a Book with a negative page price', () => {
        expect(() => new Book('Book', 1000, 245, -10)).toThrow(new Error('Page cost <= 0'));
    });

    it('Calculating the circulation cost of books with a circulation of 500, a page number of 15, and a price of 7', () => {
        book.calculateCost();
        expect(book.circulationCost).toBe(500 * 15 * 7);
    });
});