import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private httpClient: HttpClient) { }

    existsByUsername(username: string): Observable<{status: boolean}> {
        const url = `${environment.apiUrl}user/exists/by-username/${username}`;
        return this.httpClient.get<{status: boolean}>(url);
    }
}