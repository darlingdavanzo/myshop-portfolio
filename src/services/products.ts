// src/services/products.ts
import type { Product } from '../types';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Vintage Camera',
    price: 149.99,
    imageUrl: 'https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg'
  },
  {
    id: '2',
    name: 'Leather Backpack',
    price: 89.50,
    imageUrl: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg'
  },
  {
    id: '3',
    name: 'Wireless Headphones',
    price: 199.99,
    imageUrl: 'https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg'
  },
];

export function fetchAllProducts(): Promise<Product[]> {
  return new Promise(resolve => setTimeout(() => resolve(mockProducts), 500));
}

export function fetchProductById(id: string): Promise<Product | undefined> {
  return new Promise(resolve =>
    setTimeout(() => resolve(mockProducts.find(p => p.id === id)), 500)
  );
}
