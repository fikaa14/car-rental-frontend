import { Component } from "@angular/core";
import { Link } from "./model/navbar.model";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent{

    isMobileViewActive: boolean = false;
    isUserAuthenticated: boolean = false;

    constructor() {}

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

    toggleMobileView(): void{
        this.isMobileViewActive = !this.isMobileViewActive;
    }
}