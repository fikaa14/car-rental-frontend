import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Bill } from "../../model/bill.model";
import { Car } from "../../model/car.model";
import { BillService } from "./service/bill.service";

@Component({
    selector: 'app-bill',
    templateUrl: './bill.component.html'
})
export class BillComponent implements OnInit{

    showBill: boolean = false;
    @Input("pricePerDay") pricePerDay: number = 0;
    @Input("numberOfDays") numberOfDays: number = 0;
    todayDate: Date = new Date();
    today: string = "";
    taxes: number = 10;
    total: number = 0;
    isPaid: boolean = false;
    @Output("bill") eventEmitter = new EventEmitter<Bill>();

    constructor(
        private billService: BillService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.today = this.todayDate.toLocaleString();

        console.log(this.pricePerDay, this.numberOfDays);
        this.total = this.numberOfDays * this.pricePerDay;
        this.total = this.total + this.total*(this.taxes/100);
        
    }

    payBill(): void{
        this.isPaid = true;
        const bill: Bill = {
            date: this.todayDate,
            isPaid: this.isPaid,
            taxes: this.taxes,
            total: this.total
        }

        // this.billService.saveBill(bill)
        //     .subscribe(
        //         () => {
                    this.eventEmitter.emit(bill);
            //         this.router.navigate(['book-now']);
            //     }
            // );
    }

}