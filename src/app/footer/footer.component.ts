import { Component } from "@angular/core";
import { Number } from "./model/footer.model";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent{

    constructor() {}

    importantNumbers: Number[] = [
        {
            institution: 'General info',
            number: "1181"
        },
        {
            institution: 'Emergency',
            number: "124"
        },
        {
            institution: 'Police',
            number: "122"
        },
        {
            institution: 'Exact time',
            number: "125"
        },
        {
            institution: 'Weather forecast',
            number: "044 800 200"
        },
        {
            institution: 'Road assistance',
            number: "19807"
        },
        {
            institution: 'Airport Podgorica',
            number: "+38232670960"
        },
        {
            institution: 'Airport Tivat',
            number: "+38232670960"
        },
        {
            institution: 'Airport Dubrovnik',
            number: "+38520773100"
        },
        {
            institution: 'Airport Tirana',
            number: "+35542381800"
        },
    ]

}