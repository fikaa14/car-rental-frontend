import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Car } from "../model/car.model";
import { Category } from "../model/category.model";

@Injectable({ providedIn: 'root' })
export class BookingService{
   
    constructor(private httpClient: HttpClient) {}

    getAll(page: number, size: number): Observable<Car[]> {
        const url = `${environment.apiUrl}vehicle/get-all?page=${page}&size=${size}`;
        return this.httpClient.get<Car[]>(url);
    }

    getAllSorted(type:String, page: number, size: number): Observable<Car[]> {
        const url = `${environment.apiUrl}vehicle/get-all-sorted-by/${type}?page=${page}&size=${size}`;
        return this.httpClient.get<Car[]>(url);
    }

    getAllAvilable(page: number, size: number): Observable<Car[]> {
        const url = `${environment.apiUrl}vehicle/get-all-available?page=${page}&size=${size}`;
        return this.httpClient.get<Car[]>(url);
    }

    getVehiclesNumber(): Observable<number> {
        const url = `${environment.apiUrl}vehicle/get-number`;
        return this.httpClient.get<number>(url);
    }

    getCategories(): Observable<string[]> {
        const url = `${environment.apiUrl}vehicle/get-category-names`;
        return this.httpClient.get<string[]>(url);
    }

    getByCategory(category: string, page: number, size: number): Observable<Car[]> {
        const url = `${environment.apiUrl}vehicle/get-by-category/${category}?page=${page}&size=${size}`;
        return this.httpClient.get<Car[]>(url);
    }

    getNumberOfVehiclesByCategory(category: string): Observable<number> {
        const url = `${environment.apiUrl}vehicle/get-vehicles-number-by-category/${category}`;
        return this.httpClient.get<number>(url);
    }

    getSortedByTypeAndCategory(sort: string, category: string, page: number, size: number): Observable<Car[]> {
        const url = `${environment.apiUrl}vehicle/get-sorted-by-type-and-category/${sort}&${category}?page=${page}&size=${size}`;
        return this.httpClient.get<Car[]>(url);
    }

}