import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { ShowUserService } from "../shared/show-user.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {

    wrongCredentials: boolean = false;
    username: string = '';

    constructor( 
        private authService: AuthService,
        private router: Router,
        private showUserService: ShowUserService
        ) {}

    login(loginForm: any) {
        
        const loginData = loginForm.value;
        this.username = loginData.username;
        this.authService.login(loginData)
            .subscribe(data=> {
                this.showUserService.publish(this.username);
                this.router.navigate(['book-now']);
            }, error => {
                this.wrongCredentials = true;
            });
        
    }

}