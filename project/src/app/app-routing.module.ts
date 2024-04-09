import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
 {path:'', redirectTo :'/products',pathMatch:'full'},
{
  path:'product',component:ProductcardComponent},
  { path:'products',component:ProductManagerComponent},
 { path:'cart',component:CartComponent},
  { path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

