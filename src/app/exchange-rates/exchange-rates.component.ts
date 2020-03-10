import {Component, Input, OnInit} from '@angular/core';

export interface IExchangeRate {
  value: number;
  currency: string;
}

@Component({
  selector: 'course-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss'],
})
export class ExchangeRatesComponent implements OnInit {

  @Input()
  public rates: IExchangeRate[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
