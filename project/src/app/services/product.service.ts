import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private  _url:string =  "http://localhost:3000/products"
  constructor(private http :HttpClient) { }

 getproducts():Observable<Product[]>{
  return this.http.get<Product[]>(this._url)
  
 }

}
