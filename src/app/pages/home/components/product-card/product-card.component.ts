import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Product } from "src/app/models";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
})
export class ProductCardComponent implements OnInit {
  @Input() fullWidhtMode = false;
  @Output() addProductToCart = new EventEmitter<Product>(undefined);
  product: Product | undefined = {
    id: 1,
    title: "Sneakers",
    price: 150,
    category: "shoes",
    description: "some description goes here",
    image: "https://via.placeholder.com/150",
  };

  constructor() {}

  ngOnInit(): void {}

  handleAddToCart() {
    this.addProductToCart.emit(this.product);
  }
}
