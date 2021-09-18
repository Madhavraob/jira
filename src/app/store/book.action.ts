import { createAction, props } from '@ngrx/store';

// import { Book } from '@example-app/books/models';

export const loadBook = createAction(
  '[Book Exists Guard] Load Book',
  // props<{ book: Book }>()
);

export const loadBooksSuccess = createAction(
  '[Book Exists Guard] Load Book success',
  props<{ books: Array<string> }>()
);

export const loadBooksFailure = createAction(
  '[Book Exists Guard] Load Book failure',
  props<{ error: any }>()
);
