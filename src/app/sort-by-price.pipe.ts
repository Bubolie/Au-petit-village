import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(product: any[], sortOrder: 'croissant' | 'decroissant'): any[] {
    return product.sort((a:any, b:any) => {
      if (sortOrder === 'croissant') {
    return a.price - b.price;
      } else {
        return b.price - a.price;
  }
});
  }
}
