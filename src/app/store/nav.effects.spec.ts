import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NavEffects } from './nav.effects';
import { AppService } from '../app.service';

fdescribe('NavEffects', () => {
  let actions$: Observable<any>;
  let effects: NavEffects;
  let httpMock: HttpTestingController;
  let appService: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        NavEffects,
        provideMockActions(() => actions$),
        { provide: AppService, useValue: { getBooks: () => of(['1', '2']) } }
      ]
    });

    effects = TestBed.inject(NavEffects);
    httpMock = TestBed.inject(HttpTestingController);
    appService = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should call app service', (done) => {
    // mock the service to prevent an HTTP request
    const spy = spyOn(appService, 'getBooks').and.callThrough();

    // create an actions stream and immediately dispatch a GET action
    actions$ = of({ type: '[Book Exists Guard] Load Book' });

    // subscribe to the Effect stream and verify it dispatches a SUCCESS action
    effects.loadBooks$.subscribe(action => {
      expect(action).toEqual({
        type: '[Book Exists Guard] Load Book success',
        books: ['1', '2']
      });
      done();
    });
  })
});
