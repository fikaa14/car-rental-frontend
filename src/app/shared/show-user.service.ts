import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../sign-up/model/user.model";


@Injectable({providedIn: 'root'})
export class ShowUserService {

    usernameEmitter = new EventEmitter<string>();

    publish(username: string): void{
        this.usernameEmitter.emit(username);
    } 

}