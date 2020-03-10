import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from './mock';

@Pipe({
  name: 'productsFilter',
  pure: false,
})
export class ProductsFilterPipe implements PipeTransform {

  transform(products: IProduct[], searchText: string, onlyFavorites: boolean ): IProduct[] {

    let result: IProduct[] = products;

    if (onlyFavorites) {
      result = products.filter((product) => product.isFavorite);
    }

    if (!searchText) {
      return result;
    }
    return result.filter((product) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(searchText);
    });
  }

}
