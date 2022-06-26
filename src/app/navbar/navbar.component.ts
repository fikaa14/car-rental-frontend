import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { ShowUserService } from "../shared/show-user.service";
import { User } from "../sign-up/model/user.model";
import { UserService } from "../sign-up/service/user.service";
import { Link } from "./model/navbar.model";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent{

    isMobileViewActive: boolean = false;
    isUserAuthenticated: boolean = false;
    user?: User;
    isUserAdmin: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router,
        private showUserService: ShowUserService,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.authService.isAuthenticated.subscribe(data => {            
            this.isUserAuthenticated = data;
            if(this.isUserAuthenticated)
            {
                this.getUsername();
            }
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

    private getUsername(): void {
        this.showUserService.usernameEmitter.subscribe(
            data=> {
                this.userService.getByUsername(data)
                    .subscribe(
                        data => {
                            this.user = data;
                            for(let role of this.user.roles){
                                if(role.name === "admin")
                                {
                                    this.isUserAdmin = true;
                                }
                            }
                        }
                    )
            }
        )
    }

}