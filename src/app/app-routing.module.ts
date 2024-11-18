import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {ListCustomersComponent} from "./customers/list-customers/list-customers.component";
import {NewCustomerComponent} from "./customers/new-customer/new-customer.component";
import {ListProductsComponent} from "./products/list-products/list-products.component";
import {GetCustomerComponent} from "./customers/get-customer/get-customer.component";
import {GetProductComponent} from "./products/get-product/get-product.component";
import {ListBillsComponent} from "./bills/list-bills/list-bills.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: "admin", component: NavBarComponent,
    children: [
      {path:'customers',component:ListCustomersComponent},
      {path:'new-customer',component:NewCustomerComponent},
      {path:'customers/:id',component:GetCustomerComponent},
      {path:'products',component:ListProductsComponent},
      {path:'products/:id',component:GetProductComponent},
      {path:'bills',component:ListBillsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
