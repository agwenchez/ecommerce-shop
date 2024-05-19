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
      {
        id: 2,
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

  constructor() {}
  
  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }
  getTotal(items: CartItem[]): number {
    return items.map((item) => item.price * item.quantity)
    .reduce((acc, curr) => acc + curr, 0)
  }

  clearAll(){
    return this.cart.items = []
  }

  deleteByID(id:number){
    console.log('ID', id)
    this.cart.items= this.cart.items.filter((item)=> item.id !== id)
    // this.cart.items = filtered
    console.log("Filtered", this.cart.items)
  }
}
