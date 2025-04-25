// src/types/index.ts
export interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
}

export interface Tile {
    id: string;
    title: string;
    image: string;
    link: string;
    className: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}
