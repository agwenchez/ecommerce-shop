import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem, IncrementOrDecrement } from "../models";
import { MatSnackBar } from "@angular/material/snack-bar";
@Injectable({
  providedIn: "root",
})
export class CartService {
  private cartSubject = new BehaviorSubject<Cart>({ items: [] });
  cart$ = this.cartSubject.asObservable();

  constructor(private _snackbar: MatSnackBar) {}

  addToCart(product: CartItem): void {
    const currentCart = this.cartSubject.value;
    const items = currentCart.items.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    if (currentCart.items.some((item) => item.id === product.id)) {
      items.push({ ...product, quantity: 1 });
    }

    this.cartSubject.next({ items });
    this._snackbar.open(`${product.name} added to cart`, "OK", {
      duration: 3000,
    });
  }

  addOrRemoveQuantity(id: number, operation: IncrementOrDecrement) {
    const itemInCart = this.cartSubject.value.items.find(
      (item) => item.id === id
    );
    if (itemInCart) {
      switch (operation) {
        case "increment":
          itemInCart.quantity++;
          break;
        case "decrement":
          itemInCart.quantity--;
          if (itemInCart.quantity === 0) {
            this.removeFromCart(id);
          }
          break;
        default:
          break; // No action needed for other cases
      }
    }
  }

  clearAll(): void {
    this.cartSubject.next({ items: [] });
    this._snackbar.open(`Cart cleared successfully`, "OK", {
      duration: 3000,
    });
  }
  removeFromCart(id: number) {
    this.cartSubject.value.items.filter((item) => {
      item.id !== id;
    });
  }

  getTotal(): number {
    return this.cartSubject.value.items
      .map((item) => item.price * item.quantity)
      .reduce((acc, curr) => acc + curr, 0);
  }
}
