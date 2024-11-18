import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Customer, RestCustomer} from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  urlService = '/customer-service/api/customers';
  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<RestCustomer> {
    return this.http.get<RestCustomer>( `${environment.baseUrl}${this.urlService}` );
  }
}
