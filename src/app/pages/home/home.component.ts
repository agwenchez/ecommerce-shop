import { Product } from './../../models/cart.model';
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
  product : Product | undefined = undefined

  constructor() {}

  ngOnInit(): void {}

  onColumsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onShowCategory(category: string): void {
    this.category = category;
  }

  onAddToCart(product: Product){
    this.product = product
    console.log("Home Product", this.product)
  }
}
