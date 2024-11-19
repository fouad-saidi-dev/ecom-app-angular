import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestProduct} from "../models/product.model";
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

}
