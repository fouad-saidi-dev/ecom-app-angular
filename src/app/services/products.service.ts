import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product, RestProduct} from "../models/product.model";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlService = '/inventory-service/api/products';
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<RestProduct> {
    return this.http.get<RestProduct>( `${environment.baseUrl}${this.urlService}` );
  }

  createProduct(product: Product) {
    return this.http.post<Product>(`${environment.baseUrl}${this.urlService}`, product);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`${environment.baseUrl}${this.urlService}/${product.id}`, product);
  }

  getProduct(customerId: number) {
    return this.http.get<Product>(`${environment.baseUrl}${this.urlService}/${customerId}`);
  }

  deleteProduct(id: number) {

  }
}
