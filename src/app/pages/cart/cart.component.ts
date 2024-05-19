import { CartService } from 'src/app/services/cart.service';
import { CartItem } from "./../../models/cart.model";
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
    this.dataSource = this.cartService.cart.value.items;
  }
  getTotal(): number {
    return this.cartService.getTotal()
  }

  clearAll(){
    this.cartService.clearAll()
  }

  deleteByID(id:number){
    this.cartService.deleteByID(id)
    this.dataSource = this.cartService.cart.value.items;
  }
}
