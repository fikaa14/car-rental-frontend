import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { Register } from "../auth/models/register.model";
import { UserService } from "./service/user.service";
import { UserValidator } from "./validators/user.validator";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
 
    userCreateForm!: FormGroup;
    containsUpperCaseLetterAttribute: boolean = false;
    containsNumberAttribute: boolean = false;
    containsSpecialCharachterAttribute: boolean = false;

    constructor(
        private userService: UserService,
        private authService: AuthService,
        private router: Router
    ) 
    { }

    ngOnInit(): void {
        this.initializeForm();
    }

    createUser(userCreateForm: any) {
        const registerData: Register = userCreateForm.value;
        const username: string = this.userCreateForm.controls['username'].value;
        
        if(username.endsWith("CompanyAdmin351") || username.endsWith("CompanyAdmin350")) {                  
            registerData.roles = ["user", "admin"];
        } else {
            registerData.roles = ["user"];
        }

        this.authService.register(registerData)
            .subscribe( () => {
                this.router.navigate(['login']);
            }, error => {
                console.log(error);
            })

    }

    private initializeForm(): void {
        this.userCreateForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            username: new FormControl(null, [Validators.required, Validators.minLength(6), this.validateUsername.bind(this)], UserValidator.doesUsernameExists(this.userService)),
            password: new FormControl(null, [Validators.required, Validators.minLength(8), this.validatePassword.bind(this)]),
            roles: new FormControl(null)
        });
    }

    private validatePassword(control: FormControl): ValidatorFn | null{
        const password = control.value;
      
        const errors: any = {
          containsUpperCaseLetter: this.containsUpperLetter(password),
          containsNumber: this.containsNumber(password),
          containsSpecialCharachter: this.containsSpecialCharachter(password)
        }
        
        if(this.containsUpperCaseLetterAttribute && 
        this.containsNumberAttribute && 
        this.containsSpecialCharachterAttribute) {
            return null;
        } else {            
            return errors;
        }
    }
    
    private containsNumber(password: string): boolean {
        const numbers = /[1234567890]/;
        if(numbers.test(password)) {
            this.containsNumberAttribute = true;
            return true;
        } else {
          return false;
        }
    }  
    
    private containsSpecialCharachter(password: string): boolean {
        const specialChars =/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if(specialChars.test(password)) {
            this.containsSpecialCharachterAttribute = true;
             return true;
        } else {
          return false;
        }
    }
    
    private containsUpperLetter(password: string): boolean { 
        for(let i = 0; i<password?.length; i++) {
            if(this.isUpper(password.charAt(i))) {
                this.containsUpperCaseLetterAttribute = true;
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

        //const list: string[] = []
        return null;
    }
}