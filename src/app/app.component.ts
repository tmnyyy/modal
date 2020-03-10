import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IProduct} from './mock';
import { Observable } from 'rxjs';
import {MatDrawer} from '@angular/material/sidenav';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {ProductService} from './product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  title = 'ng060320';

  public drawer!: MatDrawer;

  public products$: Observable<IProduct[]> = this.productsService.getProduct();

  public searchText: string = '';

  public onlyFavorites = false;

  public account = {
    name: 'Nikolay',
    age: 33,
  };

  public constructor(private readonly productsService: ProductService) {}

  public ngOnInit(): void {
    console.log(this.productsService);
  }

  public setSidenav(drawer: MatDrawer): void {
    // Promise.resolve().then(() => { this.drawer = drawer; });
    this.drawer = drawer;
  }

  toggleOnlyFavorites(e: MatCheckboxChange) {
    this.onlyFavorites = e.checked;
  }

}
