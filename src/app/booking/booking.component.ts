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
    vehicleNumber: number = 1;
    buttonNumber: number = 1;
    size: number = 6;
    page: number = 0;
    activeButton: boolean = false;
    isLast: boolean = false;
    isFirst: boolean = true;
    carsSorted: boolean = false;
    sortingType: string = '';
    categoryNames: string[] = [];
    categorySelected: string = '';
    categoryClicked: boolean = false;

    buttons: any[] = [];

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

    constructor(
        private bookingService: BookingService
    ) {}

    ngOnInit(): void {
        this.getVehicles();
        this.bookingService.getVehiclesNumber().subscribe(
            data =>{ 
                this.vehicleNumber = data;
                this.getButtonNumber(this.vehicleNumber);
            }
        )

        this.bookingService.getCategories().subscribe( data => {
            this.categoryNames = data;
        })
        
    }

    showCategory(category: string): void {
        this.categorySelected = category;
        this.categoryClicked = true;
        this.sortingTypes = [
            {
                name: 'Oldest car to newest',
                path: 'production-year-asc'
            },
            {
                name: 'Newest car to oldest',
                path: 'production-year-desc'
            }
        ]
        this.bookingService.getNumberOfVehiclesByCategory(category)
            .subscribe(
                data => {
                    this.vehicleNumber = data;
                    this.buttons = [];
                    this.getButtonNumber(this.vehicleNumber);
                }
            )


        this.bookingService.getByCategory(category, 0, 6).subscribe(
            data => {
                this.cars = data;
            }
        )
    }

    setActive(buttonNumber: number): void {
        for(let button of this.buttons) {
            button.isActive = false;
            if(button.value === buttonNumber) {
                button.isActive = true;
            }
        }
        this.page = buttonNumber;

        if(!this.carsSorted)
            this.getVehicles();
        else
            this.getCarsSorted(this.sortingType);

        if(this.page != 0)
            this.isFirst = false;
        else 
            this.isFirst = true;

        if(this.page != this.buttonNumber) 
            this.isLast = false;
        else 
            this.isLast = true;
    }

    previousPage(): void {
        this.setActive(this.page - 1);
    }

    nextPage(): void {
        this.setActive(this.page + 1);
    }

    getCarsSorted(type: string): void{

        let sort: string = "";
        for(let i = 0; i<this.sortingTypes.length;i++)
        {
            if(this.sortingTypes[i].name === type)
            {
                sort = this.sortingTypes[i].path;
            }
        }        
        console.log(sort);
        

        if(!this.categoryClicked) {
            this.bookingService.getAllSorted(sort, this.page, this.size)
            .subscribe(data => {
                this.cars = data
                console.log(this.categoryClicked);
                
            });
        }
        else {
            console.log("{ sort: " + sort + " categorySelected: " + this.categoryClicked + " }");
            
            this.bookingService.getSortedByTypeAndCategory(sort, this.categorySelected, this.page, this.size)
                .subscribe( data => {
                    this.cars = data;
                })
            console.log(this.categoryClicked);
            
        }

        this.carsSorted = true;
        this.sortingType = type;
        
    }

    refresh(): void {
        window.location.reload();
    }

    private getButtonNumber(vehicleNumber: number) {
        this.buttonNumber = Math.floor(vehicleNumber / this.size);
    
        if(vehicleNumber % this.size == 0) {
            this.buttonNumber = this.buttonNumber - 1;
        }
        
        for(let i = 0; i <= this.buttonNumber; i++) {
            this.buttons.push({
                value: i
            });
        }

        this.buttons[0].isActive = true;
        if(this.page != 0)
            this.isFirst = false;
        else 
            this.isFirst = true;

        if(this.page != this.buttonNumber) 
            this.isLast = false;
        else 
            this.isLast = true;
    }

    private getVehicles() {
        this.bookingService.getAll(this.page, this.size)
            .subscribe(data => {
                this.cars = data;
            }, error => {
                console.error(error);
            });
    }

}
