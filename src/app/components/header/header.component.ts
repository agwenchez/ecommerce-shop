import { Component, Input, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  constructor(private cartService: CartService) {}

  getTotal(): number {
    return this.cartService.getTotal();
  }

  @Input()
  get cart(): Cart {
    return this._cart;
  }
  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((acc, curr) => acc + curr, 0);
  }
  clearAll() {
    this.cartService.clearAll();
  }
}
