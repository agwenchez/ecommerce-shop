import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 cart = new BehaviorSubject<Cart>({items : []})
  constructor() { }
}
