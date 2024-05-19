import { CartService } from "src/app/services/cart.service";
import { Product } from "./../../models/cart.model";
import { Component, OnInit } from "@angular/core";

const ROWS_HEIGHT: { [id: number]: number } = {
  1: 400,
  3: 335,
  4: 350,
};
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category = "shoes";

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onColumsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onShowCategory(category: string): void {
    this.category = category;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product : product.image,
      name : product.title,
      price : product.price,
      quantity : 1,
      id: product.id,
    })
  }
}
