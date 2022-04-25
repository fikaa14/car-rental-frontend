import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Location } from "../../model/location.model";

@Injectable({providedIn: 'root'})
export class LocationService{

    constructor(
        private httpClient: HttpClient
    ) {}

    getLocations(): Observable<Location[]> {
        const url = `${environment.apiUrl}location/get-all`;
        return this.httpClient.get<Location[]>(url);
    }

}