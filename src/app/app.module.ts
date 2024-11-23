import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCustomersComponent } from './customers/list-customers/list-customers.component';
import { NewCustomerComponent } from './customers/new-customer/new-customer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { GetCustomerComponent } from './customers/get-customer/get-customer.component';
import { ListBillsComponent } from './bills/list-bills/list-bills.component';
import { GetBillComponent } from './bills/get-bill/get-bill.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { GetProductComponent } from './products/get-product/get-product.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { ProductItemDialogComponent } from './components/product-item-dialog/product-item-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { NewBillComponent } from './bills/new-bill/new-bill.component';
import { NewProductComponent } from './products/new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCustomersComponent,
    NewCustomerComponent,
    NavBarComponent,
    GetCustomerComponent,
    ListBillsComponent,
    GetBillComponent,
    ListProductsComponent,
    GetProductComponent,
    ProductItemDialogComponent,
    NewBillComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
