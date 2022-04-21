import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Car } from "../model/car.model";
import { VehicleService } from "./service/vehicle.service";

@Component({
    selector: 'app-vehicle',
    templateUrl: './vehicle.component.html'
})
export class VehicleComponent{
    params: any;
    car!: Car;
    bookingForm!: FormGroup;
    
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
        private activatedRoute: ActivatedRoute,
        private vehicleService: VehicleService
    ) {}

    ngOnInit(): void {
        const params = this.activatedRoute.snapshot.params;
        this.params = params;
        
        const data = this.activatedRoute.snapshot.data;
        this.showVehicle(this.params.id);
        
        this.initializeForm();
        this.setDates();
        
    }

    showVehicle(id:number): void{
        this.vehicleService.getVehicle(id)
            .subscribe(data => {
                this.car = data;
                console.log(this.car);
            });
    }

    changeDate(): void {
        let minDate: any = this.bookingForm.controls['pickUpDate'].value;
        console.log(minDate);
        
        document.getElementById("return-date")?.setAttribute("min", minDate);
        document.getElementById("return-date")?.setAttribute("value", minDate);
    }

    createBooking(): void{
        console.log(this.bookingForm);

    }

    private initializeForm(): void {
        this.bookingForm = new FormGroup({
            location: new FormControl(null), 
            pickUpDate: new FormControl(null),
            returnDate: new FormControl(null)
        });
    }

    private setDates(): void {
        document.getElementById("pick-up-date")?.setAttribute("min", this.date);
        document.getElementById("pick-up-date")?.setAttribute("value", this.date);
        document.getElementById("return-date")?.setAttribute("min", this.date);
        document.getElementById("return-date")?.setAttribute("value",this.date);
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