import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(public cartService:CartService) { }
 

  @Input()
 product:Product={};
 
   addToCart(product: any) {
     this.cartService.addToCart(product);
   }
 

}



