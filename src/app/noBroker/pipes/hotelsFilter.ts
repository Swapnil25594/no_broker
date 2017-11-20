import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

    transform(Hotels: any, filterBy: any): any {
        // if (filterBy.length === 0) {
        //     return Hotels;
        // }
        // Hotels.forEach(hotel => {

        // });
    }

}