import {ModuleWithProviders, NgModule} from '@angular/core';
import { ModalComponent } from './modal.component';
import {SharedModule} from '../shared/shared.module';
import {ModalService} from './modal.service';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    SharedModule,
  ],
  exports: [
    ModalComponent,
  ],
  providers: [
    ModalService,
  ],
})
export class ModalModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ModalModule,
      providers: [ModalService],
    };
  }
}
