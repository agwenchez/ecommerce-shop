import { CartService } from "src/app/services/cart.service";
import { Component, OnInit } from "@angular/core";
import { Cart } from "./models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.cart$.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
