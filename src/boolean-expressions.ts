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
  return user?.active ?? false;
}

export function canUserBuyProduct(user: User, product: Product): boolean {
  return (user?.active && product?.inStock) ?? false;
}

export function isUserNameNotEmpty(user: User): boolean {
  return user?.name?.trim() !== "";
}

export function isProductNameNotEmpty(product: Product): boolean {
  return product?.name?.trim() !== "";
}

export function isProductAvailable(product: Product): boolean {
  return product?.inStock ?? false;
}
