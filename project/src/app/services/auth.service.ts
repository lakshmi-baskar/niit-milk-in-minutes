import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
   isLoggedInValue: boolean = false;

   isLoggedIn(): boolean {
    return this.isLoggedInValue;
  }

  login() {
    // Implement your login logic here
    // For simplicity, just set isLoggedIn to true
    this.isLoggedInValue = true;
  }

  logout() {
    // Implement your logout logic here
    // For simplicity, just set isLoggedIn to false
    this.isLoggedInValue = false;
  }
}

 
  



  

