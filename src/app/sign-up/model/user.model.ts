import { Role } from "src/app/booking/model/role.model";

export interface User{
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    isActive: boolean,
    roles: Role[];
}