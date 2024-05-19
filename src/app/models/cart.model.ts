export interface CartItem {
  id: number;
  product: string;
  name: string;
  price: number;
  quantity: number;
}


export interface BaseProduct extends Pick<CartItem, 'id' | 'price'>{

}
export interface Product extends BaseProduct {
    title: string;
    category: string;
    description: string;
    image: string;
}

export interface Cart {
  items: CartItem[];
}

export type IncrementOrDecrement = "increment" | "decrement";