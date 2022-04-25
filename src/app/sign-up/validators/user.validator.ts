import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { UserService } from "../service/user.service";

export class UserValidator {

    static doesUsernameExists(userService: UserService): AsyncValidatorFn {
        return (control: AbstractControl) => {
            return userService.existsByUsername(control.value)
                .pipe(
                    map(responseData => {
                        if(responseData.status) {
                            return {
                                usernameAlreadyExists: control.value
                            };
                        }
                        return null;
                    })
                )
        };
    }

}