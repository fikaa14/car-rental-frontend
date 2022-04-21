import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'format' })
export class FormatPipe implements PipeTransform{
    
    transform(value: string, ...args: any[]) {
        return value.slice(0,2).concat("-").concat(value.slice(2));
    }

}