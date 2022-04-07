import { Component } from "@angular/core";
import { Router } from "@angular/router";
// import { AuthService } from "../auth/services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {

    constructor( 
        // private authService: AuthService,
        private router: Router
        ) {}

    login(loginForm: any) {
        
        const loginData = loginForm.value;
        // this.authService.authenticate(loginData)
        //     .subscribe(data=> {
        //         this.router.navigate(['playground']);
        //     }, error => {
        //         console.log("Error occured. Error data: ", error);
        //     })
        
    }

}