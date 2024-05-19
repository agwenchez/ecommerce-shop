import { CartService } from "src/app/services/cart.service";
import { CartItem, IncrementOrDecrement } from "./../../models/cart.model";
import { Component, OnInit } from "@angular/core";
import { Cart } from "src/app/models";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  dataSource: CartItem[] = [];
  displayedColums: string[] = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }
  loadCartItems() {
    this.cartService.cart$.subscribe((cart) => (this.dataSource = cart.items));
  }
  getTotal(): number {
    return this.cartService.getTotal();
  }

  onClearCart() {
    this.cartService.clearAll();
  }

  onAddOrRemoveQuantity(id: number, operation: IncrementOrDecrement) {
    this.cartService.addOrRemoveQuantity(id, operation);
  }
  onRemoveFromCart(id: number) {
    this.cartService.removeFromCart(id);
  }
}
