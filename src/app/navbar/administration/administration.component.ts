import { Component, OnInit } from "@angular/core";
import { Car } from "src/app/booking/model/car.model";
import { BookingService } from "src/app/booking/service/booking.service";
import { VehicleService } from "src/app/booking/vehicle/service/vehicle.service";

@Component({
    selector: 'app-administration',
    templateUrl: './administration.component.html'
})
export class AdministrationComponent implements OnInit{

    vehicles?: Car[];

    constructor(
        private bookingService: BookingService,
        private vehicleService: VehicleService
    ) {}

    ngOnInit(): void {
        this.getAll();
    }

    delete(vehicle: Car): void {
        this.vehicleService.deleteVehicle(vehicle.id)
            .subscribe(data=>
                {
                    this.getAll();
                });
    }

    private getAll() {
        this.bookingService.getAll(0, 100)
            .subscribe(
                data=>{ this.vehicles = data; } 
            );
    }
}  