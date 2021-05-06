import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsResolver implements Resolve<string> {
  constructor(private activatedRoute: ActivatedRoute) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    const firstParam: string = this.activatedRoute  .snapshot.queryParamMap.get('details');
    const details = route.queryParams['details'];
    if (details === 'true') {
      return of('Route! with data').pipe(delay(2000));
    } else {
      return of('Route! no data');
    }
  }
}
