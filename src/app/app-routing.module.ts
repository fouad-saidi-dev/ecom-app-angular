import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {ListCustomersComponent} from "./customers/list-customers/list-customers.component";
import {NewCustomerComponent} from "./customers/new-customer/new-customer.component";
import {ListProductsComponent} from "./products/list-products/list-products.component";
import {ListBillsComponent} from "./bills/list-bills/list-bills.component";
import {NewBillComponent} from "./bills/new-bill/new-bill.component";
import {NewProductComponent} from "./products/new-product/new-product.component";
import {EditCustomerComponent} from "./customers/edit-customer/edit-customer.component";
import {EditProductComponent} from "./products/edit-product/edit-product.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: "admin", component: NavBarComponent,
    children: [
      {path:'customers',component:ListCustomersComponent},
      {path:'new-customer',component:NewCustomerComponent},
      {path:'edit-customer/:id',component:EditCustomerComponent},
      {path:'products',component:ListProductsComponent},
      {path:'new-product',component:NewProductComponent},
      {path:'edit-product/:id',component:EditProductComponent},
      {path:'bills',component:ListBillsComponent},
      {path:'new-bill',component:NewBillComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
