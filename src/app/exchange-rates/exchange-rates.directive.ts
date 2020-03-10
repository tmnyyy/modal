import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {IExchangeRate} from './exchange-rates.component';

@Directive({
  selector: '[courseExchangeRates]',
})
export class ExchangeRatesDirective implements OnInit {

  @Input('courseExchangeRatesFrom')
  public rates!: IExchangeRate[];

  @Input('courseExchangeRatesAutoplay')
  public set playAuto(mode: 'on' | 'off') {
    if (!mode) {
      return;
    }
    this.autoplay = mode;
  }

  @Input('courseExchangeRatesDuration')
  public ms!: number;



  public autoplay!: 'on' | 'off';

  private index: number = 0;

  private context: any;

  private intervalId!: number;

  constructor(private tpl: TemplateRef<any>,
              private vcr: ViewContainerRef) {
  }


  public ngOnInit(): void {
    this.context = {
      $implicit: this.rates[this.index],
      controller: {
        next: () => this.next(),
        prev: () => this.prev(),
      },
    };
    this.vcr.createEmbeddedView(this.tpl, this.context);
    this.resetInterval();
  }

  public next() {
    this.resetInterval();
    this.index++;
    if (this.index >= this.rates.length) {
      this.index = 0;
    }
    this.context.$implicit = this.rates[this.index];
    console.log('NEXT');
  }

  public prev() {
    this.resetInterval();
    this.index--;
    if (this.index < 0) {
      this.index = this.rates.length - 1;
    }
    this.context.$implicit = this.rates[this.index];
    console.log('PREV');
  }

  private resetInterval(): void {
    if (this.autoplay === 'on') {
      return;
    }
    this.clearInterval().initInterval();
  }

  private clearInterval(): this {
    clearInterval(this.intervalId);
    return this;
  }

  private initInterval(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, this.ms);
  }

}
