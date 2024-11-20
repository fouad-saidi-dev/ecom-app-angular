import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Bill} from "../models/bill.model";

@Injectable({
  providedIn: 'root'
})
export class BillsService {
  urlService = '/billing-service/bills';

  constructor(private http:HttpClient) { }

  public getBills(): Observable<Array<Bill>> {
    return this.http.get<Array<Bill>>( `${environment.baseUrl}${this.urlService}` );
  }
}
