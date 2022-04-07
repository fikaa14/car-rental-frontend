import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
 
    userCreateForm!: FormGroup;

    constructor() {
    }

    ngOnInit(): void {
        this.initializeForm();
    }

    createUser() {
        console.log(this.userCreateForm);
        console.log(this.findInvalidControls());
        
    }

    public findInvalidControls() {
        const invalid = [];
        const controls = this.userCreateForm.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                invalid.push(name);
            }
        }
        return invalid;
    }

    private initializeForm(): void {
        this.userCreateForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            username: new FormControl(null, [Validators.required, Validators.minLength(6), this.validateUsername.bind(this)]),
            password: new FormControl(null, [Validators.required, Validators.minLength(8), this.validatePassword.bind(this)]),
          });

    }

    private validatePassword(control: FormControl): ValidatorFn | null{
        const password = control.value;
      
        const errors: any = {
          containsUpperLetter: this.containsUpperLetter(password),
          containsNumber: this.containsNumber(password),
          containsSpecialCharachter: this.containsSpecialCharachter(password)
        }
    
        return errors;
    }
    
    private containsNumber(password: string): boolean {
        const numbers = /[1234567890]/;
        if(numbers.test(password)) {
          return true;
        } else {
          return false;
        }
    }  
    
    private containsSpecialCharachter(password: string): boolean {
        const specialChars =/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if(specialChars.test(password)) {
          return true;
        } else {
          return false;
        }
    }
    
    private containsUpperLetter(password: string): boolean { 
        for(let i = 0; i<password?.length; i++) {
            if(this.isUpper(password.charAt(i))) {
                return true;
            }
        }
        return false;
    }
    
    private isUpper(letter: string): boolean {
        return !/[a-z]/.test(letter) && /[A-Z]/.test(letter);
    }
    
    private validateUsername(control: FormControl) {
        const username = control.value;
        return null;
    }
}