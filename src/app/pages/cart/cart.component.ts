import { CartItem } from "./../../models/cart.model";
import { Component, OnInit } from "@angular/core";
import { Cart } from "src/app/models";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        id: 1,
        product: "https://via.placeholder.com/150",
        name: "Sneakers",
        price: 150,
        quantity: 1,
      },
    ],
  };
  dataSource: CartItem[] = [];
  displayedColums: string[] = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  getTotal(items: CartItem[]): number {
    const total = items.map((item) => item.price * item.quantity)
    .reduce((acc, curr) => acc + curr, 0)
    console.log('Total price', total)
    return total
  }
  constructor() {}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }
}
