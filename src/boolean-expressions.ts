interface User {
  name: string;
  age: number;
  active?: boolean;
}

interface Product {
  name: string;
  price: number;
  inStock: boolean;
}

export function isUserActive(user: User): boolean {
  throw new Error('Not implemented');
}

export function canUserBuyProduct(user: User, product: Product): boolean {
  throw new Error('Not implemented');
}

export function isUserNameNotEmpty(user: User): boolean {
  throw new Error('Not implemented');
}

export function isProductNameNotEmpty(product: Product): boolean {
  throw new Error('Not implemented');
}

export function isProductAvailable(product: Product): boolean {
  throw new Error('Not implemented');
}