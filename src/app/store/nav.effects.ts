import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { asyncScheduler, of } from 'rxjs';
import { debounceTime, switchMap, map, catchError } from 'rxjs/operators';
import { AppService } from '../app.service';
import { loadBook, loadBooksFailure, loadBooksSuccess } from './book.action';



@Injectable()
export class NavEffects {

  constructor(private actions$: Actions, private appService: AppService) { }

  search$ = createEffect(() => ({
    // assign default values
    debounce = 300,
    scheduler = asyncScheduler
  } = {}) =>
    this.actions$.pipe(
      // ofType(any),
      debounceTime(debounce, scheduler)
    )
  );

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBook),
      switchMap(() =>
        this.appService.getBooks().pipe(
          map((books) =>
            loadBooksSuccess({ books })
          ),
          catchError((error) =>
            of(loadBooksFailure({ error }))
          )
        )
      )
    )
  );

}
