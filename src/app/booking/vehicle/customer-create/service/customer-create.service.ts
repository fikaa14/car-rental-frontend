import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "src/app/booking/model/customer.model";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class CustomerService{

    constructor(
        private httpClient: HttpClient
    ) {}

    saveCustomer(customer: Customer): Observable<void> {
        const url = `${environment.apiUrl}customer/save`;
        return this.httpClient.post<void>(url, customer);
    }

}