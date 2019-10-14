import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = { 
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods' : '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token Content-Length, X-Requested-With',
    withcredentials:'false'
  })
};

@Injectable({
    providedIn: 'root',
})

export default class BookingService {

  constructor(private http: HttpClient) { }
  
  public getCustomrsUrl = 'http://localhost:50864/booking';
  public deleteCustomrsUrl = 'http://localhost:50864/booking/';
  
  /* Customers List */
  getCustomerList() : Observable <any> {
    return this
            .http
            .get(this.getCustomrsUrl , httpOptions);
  }

  /* Delete Customer */
  deleteCustomer(id): Observable <any>  {
    return this
            .http
            .get(`${this.deleteCustomrsUrl}${id}`);
  }
}