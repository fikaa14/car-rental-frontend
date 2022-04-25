import { Bill } from "./bill.model";
import { Car } from "./car.model";
import { Customer } from "./customer.model";

export interface Booking {
    id?:number,
    startDate: Date,
    endDate: Date,
    isActive: Boolean,
    location?: Location,
    bill?: Bill,
    customer?: Customer,
    vehicle: Car
}