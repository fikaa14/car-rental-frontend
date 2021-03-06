import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Car } from "../../model/car.model";

@Injectable({providedIn: 'root'})
export class VehicleService {

    constructor(
        private httpClient: HttpClient
    ) {}

    getVehicle(id: number): Observable<Car> {
        const url = `${environment.apiUrl}vehicle/get-by-id/${id}`;
        return this.httpClient.get<Car>(url);
    }

    setVehicleUnavailable(car: Car): Observable<void> {
        const url = `${environment.apiUrl}vehicle/save-unavailable`;
        return this.httpClient.put<void>(url, car);
    }

    deleteVehicle(carID: number): Observable<void> {
        const url = `${environment.apiUrl}vehicle/delete/${carID}`;
        return this.httpClient.delete<void>(url);
    }

}