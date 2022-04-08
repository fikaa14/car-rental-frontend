import { Category } from "./category.model";
import { Location } from "./location.model";

export interface Car {
    id: number,
    productionYear: number,
    model: string,
    mileage: number,
    plateNumber: string,
    isAvaliable: boolean,
    transmission: boolean
    imgPath: string,
    category: Category,
    location: Location
}