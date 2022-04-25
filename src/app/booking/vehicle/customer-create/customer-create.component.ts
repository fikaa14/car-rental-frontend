import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Customer } from "../../model/customer.model";
import { CustomerService } from "./service/customer-create.service";

@Component({
    selector: 'app-customer-create',
    templateUrl: './customer-create.component.html'
})
export class CustomerCreateComponent implements OnInit{

    @Output("showBill") showBill = new EventEmitter<boolean>();
    @Output("customer") customer = new EventEmitter<Customer>();

    customerCreateForm!: FormGroup;

    constructor(
        private customerService: CustomerService
    ) {}

    ngOnInit(): void {
        this.initializeForm();
    }

    createCustomer(): void {
        const customerCreate: Customer = this.customerCreateForm.value;
        console.log(customerCreate);
        
        // this.customerService.saveCustomer(customerCreate)
        //     .subscribe(() =>{
                this.showBill.emit(true);
                this.customer.emit(customerCreate);
            // })
    }

    private initializeForm(){
        this.customerCreateForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            address: new FormControl(null), 
            vehiclePermitNumber: new FormControl(null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
            phoneNumber: new FormControl(null, Validators.required)
        });
    }
    
}