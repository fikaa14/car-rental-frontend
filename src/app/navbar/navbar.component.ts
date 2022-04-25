import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { Link } from "./model/navbar.model";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent{

    isMobileViewActive: boolean = false;
    isUserAuthenticated: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.authService.isAuthenticated.subscribe(data => {            
            this.isUserAuthenticated = data;
        });
    }

    links: Link[] = [
        {
            name: "HOME",
            path: "/home"
        },
        {
            name: "BOOK NOW",
            path: "/book-now"
        },
        {
            name: "ADDITIONAL SERVICES",
            path: "/additional-services"
        },
        {
            name: "RENTAL CONDITIONS",
            path: "/rental-conditions"
        },
        {
            name: "CUSTOMER SERVICE",
            path: "/customer-service"
        },
        {
            name: "CONTACT",
            path: "/contact"
        }
    ]

    logout(): void {
        this.authService.logout();
        this.router.navigate(["login"]);
    }


    toggleMobileView(): void{
        this.isMobileViewActive = !this.isMobileViewActive;
    }
}