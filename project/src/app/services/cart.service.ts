// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   cartDatalist:any=[];
//   productList= new BehaviorSubject<any>([])
// constructor(private http:HttpClient){}

//  getProductData(){
//   this.productList.asObservable();
//  }

//  setProduct(product:any){
//   this.cartDatalist.push(product)
//   this.productList.next(product)
//  }
//   addToCart(product:any) {
//     this.cartDatalist.push(product)
//     this.productList.next(this.cartDatalist)
//   }
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();
  total:number=0;

  addToCart(product: any) {
    const currentCart = this.cartSubject.value;
    const existingItem = currentCart.find((item) => item.Name === product.Name);
  
  

     if (existingItem) {
       existingItem.quantity++;
     } else {
       currentCart.push({ image:product.image, Name: product.Name, price: product.price, quantity: 1 });
    }

     this.cartSubject.next([...currentCart]);

   }
  }
  //   removeFromCart(index: number) {
  //    const currentCart = this.cartSubject.value;

  //   if (index >= 0 && index < currentCart.length) {
  //      currentCart.splice(index, 1);
  //      this.cartSubject.next([...currentCart]);
  //    }
  //  }
  //    private   calculateTotal() {
  //      const currentCart = this.cartSubject.value;
  //      this.total= currentCart.reduce((total, item) => total + item.price, 0);
  //    }
  //   }







 




 