export type Product = {
    id: number;
    name: string;
    gender: "men" | "women" | "unisex";
    price: number;
    description: string;
    images: string[];
    material: string;
    rating: number;
    stock: number;
    sizes: string[];
}