import { isUserActive, isProductAvailable, canUserBuyProduct, isUserNameNotEmpty, isProductNameNotEmpty } from './boolean-expressions';

describe('Boolean expression refactoring', () => {
    it('isUserActive', () => {
        expect(isUserActive({ name: 'Alice', age: 20, active: true })).toBe(true);
        expect(isUserActive({ name: 'Bob', age: 30, active: false })).toBe(false);
        expect(isUserActive({ name: 'Charlie', age: 40 })).toBe(false);
    });

    it('isProductAvailable', () => {
        expect(isProductAvailable({ name: 'Product A', price: 100, inStock: true })).toBe(true);
        expect(isProductAvailable({ name: 'Product B', price: 200, inStock: false })).toBe(false);
    });

    it('canUserBuyProduct', () => {
        expect(canUserBuyProduct({ name: 'Alice', age: 20, active: true }, { name: 'Product A', price: 100, inStock: true })).toBe(true);
        expect(canUserBuyProduct({ name: 'Bob', age: 30, active: false }, { name: 'Product B', price: 200, inStock: false })).toBe(false);
        expect(canUserBuyProduct({ name: 'Charlie', age: 40 }, { name: 'Product C', price: 300, inStock: true })).toBe(false);
    });

    it('isUserNameNotEmpty', () => {
        expect(isUserNameNotEmpty({ name: 'Alice', age: 20, active: true })).toBe(true);
        expect(isUserNameNotEmpty({ name: '', age: 30, active: false })).toBe(false);
    });

    it('isProductNameNotEmpty', () => {
        expect(isProductNameNotEmpty({ name: 'Product A', price: 100, inStock: true })).toBe(true);
        expect(isProductNameNotEmpty({ name: '', price: 200, inStock: false })).toBe(false);
    });
});