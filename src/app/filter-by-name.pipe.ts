import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: any[], searchTerm: string): any[] {
    if (!searchTerm) {
    return products;
    }
    searchTerm = searchTerm.toLowerCase();
    return products.filter(products => products.name.toLowerCase().includes(searchTerm));
  }

}
