import { Component, OnInit } from "@angular/core";
import { Car } from "./model/car.model";

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html'
})
export class BookingComponent implements OnInit {

    cars: Car[] = [
        {   productionYear: 2010,
            model: "Toyota",
            mileage: "200000",
            plateNumber: "PGTC909",
            isAvaliable: true,
            imgPath: "../../assets/car1.jpg",
            isAutomaticTransmission: true,
            pricePerDay: 20.00,
            category: "SUV",
            maxPeople: 7,
            maxBaggage: 5,
            location: "Podgorica"
        },
        {   productionYear: 2012,
            model: "Honda",
            mileage: "100000",
            plateNumber: "PGJD412",
            isAvaliable: false,
            imgPath: "../../assets/car2.jpg",
            isAutomaticTransmission: false,
            pricePerDay: 25.00,
            maxPeople: 5,
            maxBaggage: 3,
            category: "Small car",
            location: "Tivat"
        }
    ];

    locations: any[] = [
        {
            name: "Podgorica Airoport"
        },
        {
            name: "Tivat Airoport"
        },
        {
            name: "Tirana Airoport"
        },
        {
            name: "Budva"
        },
        {
            name: "Kotor"
        }
    ];

    today: Date = new Date;
    dd: string = this.getDay();
    mm: string = this.getMonth();
    yy: string = this.getYear();

    date: string = this.yy + '-' + this.mm + '-' + this.dd;

    constructor(
    ) {}

    ngOnInit(): void {
        this.setDates();
    }

    private setDates(): void {
        document.getElementById("pick-up-date")?.setAttribute("min", this.date);
        document.getElementById("pick-up-date")?.setAttribute("value", this.date);
        document.getElementById("return-date")?.setAttribute("min", this.date);
        document.getElementById("return-date")?.setAttribute("value", this.date);
    }

    private getDay(): string {
        if(this.today.getDate()>=10)
            return this.today.getDate().toString();
        else 
            return '0' + this.today.getDate().toString();
    }

    private getMonth(): string {
        const month = (this.today.getMonth() + 1);
        if(month>=10)
            return month.toString();
        else 
            return '0' + month.toString();
    }

    private getYear(): string {
        return this.today.getFullYear().toString();
    }


}
