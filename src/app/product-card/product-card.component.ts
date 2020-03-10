import {Component, Input } from '@angular/core';
import {IProduct} from '../mock';
import {ModalService} from '../modal/modal.service';
import {CardModalContentComponent} from './card-modal-content/card-modal-content.component';

@Component({
  selector: 'course-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent  {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  public constructor(private readonly modalService: ModalService) { }


  toggleFavorite() {
    this.product.isFavorite = !this.product.isFavorite;
  }

  public addToCart() {
    this.modalService.open({component: CardModalContentComponent,
    context: {
      product: this.product,
      save: () => { console.log('SAVE'); this.modalService.close(); },
      close: () => { console.log('CLOSE'); this.modalService.close(); },
    }});
  }

}
