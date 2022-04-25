import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bill } from "src/app/booking/model/bill.model";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class BillService{

    constructor(
        private httpClient: HttpClient
    ) {}

    saveBill(bill:Bill): Observable<void> {
        const url = `${environment.apiUrl}bill/save-bill`;
        return this.httpClient.post<void>(url, bill);
    }
    
}