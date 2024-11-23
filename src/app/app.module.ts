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
import { ListBillsComponent } from './bills/list-bills/list-bills.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
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
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { EditBillComponent } from './bills/edit-bill/edit-bill.component';
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    ListCustomersComponent,
    NewCustomerComponent,
    NavBarComponent,
    ListBillsComponent,
    ListProductsComponent,
    ProductItemDialogComponent,
    NewBillComponent,
    NewProductComponent,
    EditCustomerComponent,
    EditProductComponent,
    EditBillComponent
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
    MatDialogModule,
    MatProgressSpinner
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
