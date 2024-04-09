import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrl: './product-manager.component.css'
})
export class ProductManagerComponent  implements OnInit{

   products:Product[]=[]; 
   
   constructor(private productService :ProductService){}
  ngOnInit(): void {
    this.productService.getproducts().subscribe(data=>{
      this.products=data;
      
    }
      )
  }
   



  onSearchTextChanged(productName:string) {
    this.productService.getproducts().subscribe({
         next:data=>
      
    {

    if(productName || productName!=='')
    {
      this.products = data.filter(products => products.Name?.includes(productName));
    }
    else
    
    this.products=data;
  }


  });
}}







