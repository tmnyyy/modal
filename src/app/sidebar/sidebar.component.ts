import {
  AfterContentInit, AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'course-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterContentInit, AfterViewInit {

  @Output()
  public setSidenavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild('drawer', {static: true})
  public drawer!: MatDrawer;

  @ViewChild('viewContent', {read: ViewContainerRef, static: false})
  public myView!: ViewContainerRef;

  @ContentChild('sampleContent', {static: false})
  public myContent!: TemplateRef<any>;

  constructor(private elemRef: ElementRef) {
  }

  public ngOnInit(): void {
    console.log(this.drawer);
    console.log(this.elemRef);
    this.setSidenavControl.emit(this.drawer);
  }

  public ngAfterContentInit(): void {
    console.log(this.myContent);
  }

  public ngAfterViewInit(): void {

    Promise.resolve().then(() => {
      this.myView.createEmbeddedView(this.myContent, {
        $implicit: 'implicit Title',
        subTitle: 'description Title',
      });
    });
  }


}
