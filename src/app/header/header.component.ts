import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {IExchangeRate} from '../exchange-rates/exchange-rates.component';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input('t')
  public set myTitle(value: string) {
    if (!value) {
      return;
    }
    this.titleContent = `<span style="color: red">${value}</span>`;
  }

  public titleContent!: string;

  @Input()
  public d!: MatDrawer;

  public rates: IExchangeRate[] = [
    {value: 24, currency: 'EUR'},
    {value: 20, currency: 'USD'},
    {value: 0.4, currency: 'RUB'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav(): void {
    this.d.toggle();
  }
}
