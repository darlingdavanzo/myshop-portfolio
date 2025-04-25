// src/services/products.ts
import type { Tile } from '../types';
import shirt from '../assets/images/shirt.jpg'
import shoes from '../assets/images/shoes.jpg'
import springCollection from '../assets/images/spring_collection.jpg'
import accessories from '../assets/images/accessories.jpg'

const mockTiles: Tile[] = [
    {
        id: '1',
        title: "Accessories",
        image: accessories,
        link: "/shop",
        className: "col-span-1 row-span-1",
    },
    {
        id: '2',
        title: "Spring Collection",
        image: springCollection,
        link: "/shop",
        className: "col-span-1 row-span-1",
    },
    {
        id: '3',
        title: "Cotton T-Shirts",
        image: shirt,
        link: "/shop",
        className: "col-span-1 row-span-2",
    },
    {
        id: '4',
        title: "Shoe Collection",
        image: shoes,
        link: "/shop",
        className: "col-span-2 row-span-1",
    },
];

export function fetchAllTiles(): Promise<Tile[]> {
    return new Promise(resolve => setTimeout(() => resolve(mockTiles), 500));
}

export function fetchTileById(id: string): Promise<Tile | undefined> {
    return new Promise(resolve =>
        setTimeout(() => resolve(mockTiles.find(p => p.id === id)), 500)
    );
}
