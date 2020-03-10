import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL_TOKEN} from './config';
import {filter, map} from 'rxjs/operators';


export interface IRes {
  data: any;
}

@Injectable()
export class CustomInterceptorService implements HttpInterceptor {

  public constructor(@Inject(BASE_URL_TOKEN) private baseUrl: string) {
  }

  public intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    const headers = req.headers
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer 324324');

    const jsonReq = req.clone({
      headers,
      url: `${this.baseUrl}${req.url}`,
    });
    return next.handle(jsonReq)
      .pipe(
        filter(this.isHttpResponse),
        map((res: HttpResponse<IRes>) => {
          return res.clone({body: res.body && res.body.data});
        })
      );
  }

  private isHttpResponse<T>(event: HttpEvent<T>): event is HttpResponse<T> {
    if (event instanceof HttpResponse) {
      return true;
    }
    return false;
  }
}
