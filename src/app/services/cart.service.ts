import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from "../models";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private _snackbar: MatSnackBar) {}

  addToCart(product: CartItem): void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === product.id);
    itemInCart ? (itemInCart.quantity += 1) : items.push(product);

    this.cart.next({ items });
    this._snackbar.open(`${product.name} added to cart`, "OK", {
      duration: 3000,
    });
  }

  clearAll(): void {
    return this.cart.next({ items: [] });
  }
  deleteByID(id: number) {
    const items = [...this.cart.value.items];
    const filteredItems = items.filter((item) => {
      item.id !== id;
    });
    this.cart.next({ items: filteredItems });
  }

  getTotal(): number {
    return this.cart.value.items
      .map((item) => item.price * item.quantity)
      .reduce((acc, curr) => acc + curr, 0);
  }

  getCartItems(): CartItem[] {
    return this.cart.value.items;
  }
}
