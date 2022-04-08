import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Car } from "../model/car.model";

@Injectable({ providedIn: 'root' })
export class BookingService{

    constructor(private httpClient: HttpClient) {}

    getAll(): Observable<Car[]> {
        const url = `${environment.apiUrl}vehicle/get-all`;
        return this.httpClient.get<Car[]>(url);
    }

    getAllSorted(type:String): Observable<Car[]> {
        const url = `${environment.apiUrl}vehicle/get-all-sorted-by/${type}`;
        return this.httpClient.get<Car[]>(url);
    }

    getAllAvilable(): Observable<Car[]> {
        const url = `${environment.apiUrl}vehicle/get-all-available`;
        return this.httpClient.get<Car[]>(url);
    }

}