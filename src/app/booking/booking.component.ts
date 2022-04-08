import { Component, OnInit } from "@angular/core";
import { Car } from "./model/car.model";
import { Type } from "./model/sorting.model";
import { BookingService } from "./service/booking.service";

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

    cars: Car[] = [];
    isClicked: boolean = false;

    sortingTypes: Type[] = [
        {
            name: 'Lowest price to highest',
            path: 'price-asc'
        },
        {
            name: 'Highest price to lowest',
            path: 'price-desc'
        },
        {
            name: 'Oldest car to newest',
            path: 'production-year-asc'
        },
        {
            name: 'Newest car to oldest',
            path: 'production-year-desc'
        },
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
        private bookingService: BookingService
    ) {}

    ngOnInit(): void {
        this.setDates();
        this.getVehicles();
    }

    getCarsSorted(type: string): void{
        
        if(type === 'sort') {
            this.getVehicles();
            return;
        }
        
        let sort: string = "";
        for(let i = 0; i<this.sortingTypes.length;i++)
        {
            if(this.sortingTypes[i].name === type)
            {
                sort = this.sortingTypes[i].path;
            }
        }        

        this.bookingService.getAllSorted(sort)
            .subscribe(data => {
                this.cars = data
            });

        this.isClicked = false;
        
    }

    showAvilable() {
        for(let car of this.cars) {
            if(car.isAvaliable === false)
                this.remove(this.cars, car);
        }
        this.isClicked = true;
    }

    private remove(cars: Car[], car: Car) {
        let newCars: Car[] = [];
        for(let newCar of cars) {
            if(newCar.id != car.id)
                newCars.push(newCar);
            else{
                continue;
            }
        }
        this.cars = newCars;
    }

    private getVehicles() {
        this.bookingService.getAll()
            .subscribe(data => {
                this.cars = data;
            }, error => {
                console.error();
            });
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
