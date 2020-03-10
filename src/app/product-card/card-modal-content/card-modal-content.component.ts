import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../mock';

@Component({
  selector: 'course-card-modal-content',
  templateUrl: './card-modal-content.component.html',
  styleUrls: ['./card-modal-content.component.scss'],
})
export class CardModalContentComponent implements OnInit {

  public product!: IProduct;
  public save!: () => void;
  public close!: () => void;

  constructor() { }

  ngOnInit(): void {
  }



}
