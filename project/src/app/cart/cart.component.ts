import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart:any[]=[];
  count:number=1;
   constructor(private cartService:CartService ,private authService:AuthService,private router:Router){}

   ngOnInit(){
     this.cartService.cart$.subscribe((cart)=>{
     this.cart=cart;
     });
   }
   increaseCount(){
    this.count++;
}

 decreaseCount(){
  if(this.count>0){
  this.count--;
 }
 }

 orderNow() {
  if (this.authService.isLoggedInValue) {
    // User is logged in, proceed with the order
    alert('Order successful!');
  } else {
    // User is not logged in, navigate to the login component
    this.router.navigate(['/login']);
  }
}

 getTotalPrice():number{
  return this.cart.reduce((total,product)=>total+product.price,0)
 }
 deleteProduct(productName:string):void{
 this.cart=this.cart.filter(product=>product.Name!==productName)
 
  }
  calculateTotalPrice(product:any): number {
    // return this.cart.reduce((total, item) => total + item.price*this.count, 0);
    const total=product.price*this.count;
    return total;
  }
    
  calculateOverallPrice(): number {
    let overallPrice = 0;
  
    for (const cartItem of this.cart) {
      overallPrice += this.calculateTotalPrice(cartItem);
    }
  
    return overallPrice;
  } 
   




}  












