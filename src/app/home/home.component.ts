import { Component } from "@angular/core";
import { Link } from "./model/home.model";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent{

    constructor() {}

    links: Link[] = [
        {   
            page: 'FACEBOOK',
            icon: 'fa-facebook-square',
            path: 'https://www.facebook.com'
        },
        {   
            page: 'TWITTER',
            icon: 'fa-twitter-square',
            path: 'https://www.twitter.com'
        },
        {   
            page: 'INSTAGRAM',
            icon: 'fa-instagram',
            path: 'https://www.instagram.com'
        }
    ]

}