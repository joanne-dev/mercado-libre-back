export type Author = {
    name: string;
    lastName: string;
}

export type Price = {
    currency: string;
    amount: number;
    decimals: number;
}

export type Item = {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition:string;
    free_shipping: boolean;
    city_name?: string;
    sold_quantity?: number,
    description?: string
}

export type Results = {
    author: Author;
    categories: string[];
    items: Item[];
}

export type Details = {
    sold_quantity: number;
    description: string;
}

export type Response = {
    status: number;
    data: any;
}

export type Product = {
    author: Author;
    item: Item;
}
