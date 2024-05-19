import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  dataSource: CartItem[] = [];
  constructor(private cartService: CartService) {}

  
  ngOnInit(): void {
    console.log("Datasource", this.dataSource)
    this.dataSource = this.cartService.getCartItems();
  }

  getTotal(): number {
    return this.cartService.getTotal()
  }

  clearAll(){
    this.cartService.clearAll()
  }

}
