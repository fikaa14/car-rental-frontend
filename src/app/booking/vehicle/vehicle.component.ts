import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Bill } from "../model/bill.model";
import { Booking } from "../model/booking.model";
import { Car } from "../model/car.model";
import { Customer } from "../model/customer.model";
import { Location } from "../model/location.model";
import { BookingService } from "../service/booking.service";
import { LocationService } from "./service/location.service";
import { VehicleService } from "./service/vehicle.service";

@Component({
    selector: 'app-vehicle',
    templateUrl: './vehicle.component.html'
})
export class VehicleComponent{
    params: any;
    car!: Car;
    bookingForm!: FormGroup;
    bookingEndDate?: any;
    isClicked:boolean = false;
    isBillActive: boolean = false;
    customer?: Customer;
    numberOfDays: number = 0;
    pricePerDay: number = 0;
    bill?: Bill;
    startDate: Date = new Date();
    endDate: Date = new Date();

    locations: Location[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private vehicleService: VehicleService,
        private locationService: LocationService,
        private bookingService: BookingService,
        private router: Router
    ) {}

    ngOnInit(): void {
        const params = this.activatedRoute.snapshot.params;
        this.params = params;
        
        const data = this.activatedRoute.snapshot.data;
        this.showVehicle(this.params.id);
        this.setLocations();

        this.initializeForm();
        
    }

    showVehicle(id:number): void{
        this.vehicleService.getVehicle(id)
            .subscribe(data => {
                this.car = data;
                console.log(data);
                for(let booking of this.car.bookings) {
                    if(booking.isActive) {
                        this.bookingEndDate = new Date(booking.endDate);
                        this.bookingEndDate = this.bookingEndDate.toLocaleDateString();
                        
                    }
                }
            });
    }

    changeDate(): void {
        let minDate: any = this.bookingForm.controls['pickUpDate'].value;
        console.log(minDate);
        
        document.getElementById("return-date")?.setAttribute("min", minDate);
        document.getElementById("return-date")?.setAttribute("value", minDate);
    }

    createBooking(): void{
        this.getBookingDays();
        this.isClicked = true;
    }

    getCustomer(customer: Customer):void {
        this.customer = customer;
    }

    showBill(value: boolean): void {
        this.isBillActive = value;
        this.bookingForm
    }

    getBill(value: Bill): void {
        this.bill = value;

        this.saveBooking();
    }

    private saveBooking(): void{
        this.vehicleService.setVehicleUnavailable(this.car)
            .subscribe(()=>{
                this.car.isAvaliable = false;
                console.log("Setting car to unavailable...");
                
            })
        
        const booking: Booking = {
            startDate: this.startDate,
            endDate: this.endDate,
            bill: this.bill,
            customer: this.customer,
            isActive: true,
            vehicle: this.car
        }

        console.log(booking);

        this.bookingService.saveBooking(booking)
            .subscribe(()=>{
               
                this.router.navigate(['book-now']);
            })
    }

    private initializeForm(): void {
        this.bookingForm = new FormGroup({
            location: new FormControl(null, Validators.required), 
            pickUpDate: new FormControl(null, Validators.required),
            returnDate: new FormControl(null, Validators.required)
        });
    }

    private getBookingDays(): void {
        let dayOne: Date = new Date(this.bookingForm.controls["pickUpDate"].value);
        let dayTwo: Date = new Date(this.bookingForm.controls["returnDate"].value);
        this.startDate = dayOne;
        this.endDate = dayTwo;


        let numberOfDays: number = dayTwo.getTime() - dayOne.getTime();
        
        numberOfDays = numberOfDays/(1000*3600*24);
        console.log(numberOfDays);
        this.numberOfDays = numberOfDays;
        this.pricePerDay = this.car.category.pricePerDay;
    }

    private setLocations(): void {
        this.locationService.getLocations()
            .subscribe(data => {
                this.locations = data;
                console.log(data);
                
            })
    }

}