import {Observable} from 'rxjs';
import {IProduct, products$} from './mock';
import { Injectable} from '@angular/core';

@Injectable()
export class ProductService {

  public constructor() {}



  public getProduct(): Observable<IProduct[]> {
    return products$;
  }
}
