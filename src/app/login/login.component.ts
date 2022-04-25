import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
// import { AuthService } from "../auth/services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {

    wrongCredentials: boolean = false;

    constructor( 
        private authService: AuthService,
        private router: Router
        ) {}

    login(loginForm: any) {
        
        const loginData = loginForm.value;
        this.authService.login(loginData)
            .subscribe(data=> {
                this.router.navigate(['book-now']);
            }, error => {
                this.wrongCredentials = true;
            });
        
    }

}