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
    console.log("Cart Items", this.cart.value.items);
  }

  clearAll(): void {
    return this.cart.next({ items: [] });
  }
  deleteByID(id: number) {
    console.log("ID", id)
    const items = [...this.cart.value.items];
    console.log("Items", items)
    const filteredItems = items.filter((item) => {
      item.id !== id;
    });
    console.log("Filtered", filteredItems)
    this.cart.next({ items: filteredItems });
  }
}
