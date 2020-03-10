import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SharedModule} from './shared/shared.module';
import {SanitarPipe} from './sanitar.pipe';
import {ProductsFilterPipe} from './products-filter.pipe';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './exchange-rates/hidden.directive';
import {ProductService} from './product.service';
import {BASE_URL, BASE_URL_TOKEN} from './config';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CustomInterceptorService} from './custom-interceptor.service';
import { CardModalContentComponent } from './product-card/card-modal-content/card-modal-content.component';
import {ModalModule} from './modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    SidebarComponent,
    SanitarPipe,
    ProductsFilterPipe,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective,
    CardModalContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ModalModule.forRoot(),
  ],
  providers: [{
    provide: ProductService,
    useClass: ProductService,
  },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptorService,
    multi: true,
  },
    {
      provide: BASE_URL_TOKEN,
      useValue: BASE_URL,
    },
    {provide: 'baseUrl',
    useValue: 'google.com',
    multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule { }
