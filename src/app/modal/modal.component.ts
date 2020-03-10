import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ModalService} from './modal.service';

@Component({
  selector: 'course-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @ViewChild('modalContent', {read: ViewContainerRef})
  public modal!: ViewContainerRef;

  public isOpen = false;
  public componentFactory!: ComponentFactory<any>;
  public modalContext!: ComponentRef<any>;

  constructor(private readonly modalService: ModalService,
              private readonly cfr: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.modalService.modalSequence$.subscribe((modalData) => {
      if (!modalData) {
        this.close();
        return;
      }

      this.isOpen = true;
      this.componentFactory = this.cfr.resolveComponentFactory(modalData.component);
      this.modalContext = this.modal.createComponent(this.componentFactory, 0);
      Object.keys(modalData.context)
        .forEach((key) => {
          this.modalContext.instance[key] = modalData.context[key];
        });
    });
  }

  @HostListener('window:keyup', ['$event.keyCode'])
  public close(code: number = 27) {
    if (code !== 27) {
      return;
    }
    this.modalContext?.destroy();
    this.isOpen = false;
  }

}
