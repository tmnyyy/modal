import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[courseHidden]',
  exportAs: 'hiddenControl,hc,nghc',
})
export class HiddenDirective {

  constructor() {}

  @HostBinding('style.visibility')
  public visibility: 'visible' | 'hidden' = 'hidden';


  public show() {
    this.visibility = 'visible';
  }

  public hide() {
    this.visibility = 'hidden';
  }
}
