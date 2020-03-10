import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'sanitar',
})
export class SanitarPipe implements PipeTransform {

  public constructor(private readonly domSanitizer: DomSanitizer) {}

  transform(htmlStr: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(htmlStr);
  }

}
