import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { JwtToken } from "./models/jwt.model";
import { Login } from "./models/login.model";
import { Register } from "./models/register.model";

@Injectable({providedIn: 'root'})
export class AuthService {

    isAuthenticated = new BehaviorSubject<boolean>(false);

    constructor(
        private httpClient: HttpClient
    ) {}

    register(registerData: Register): Observable<any> {
        const url = `${environment.apiUrl}authenticate/register`;
        return this.httpClient.post<any>(url, registerData);
    }

    login(loginData: Login): Observable<any> {
        const url = `${environment.apiUrl}authenticate/login`;
        return this.httpClient.post<JwtToken>(url, loginData)
            .pipe(tap(responseData => {
                const token = responseData.token;
                localStorage.setItem('token', token);
                this.isAuthenticated.next(true);
            }));
    }

    logout(): void { 
        localStorage.removeItem('token');
        this.isAuthenticated.next(false);
    }

}