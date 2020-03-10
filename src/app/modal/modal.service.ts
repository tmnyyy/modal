import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

export interface IModalData {
  component: any;
  context: any;
}


@Injectable()
export class ModalService {

  private _modalSequence: Subject<IModalData | null> = new Subject();

  public constructor() { }

  public open(modalData: IModalData) {
    this._modalSequence.next(modalData);
  }

  public close() {
    this._modalSequence.next(null);
  }

  public get modalSequence$(): Observable<IModalData | null> {
    return this._modalSequence.asObservable();
  }
}
