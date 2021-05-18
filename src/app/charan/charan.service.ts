import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class CharanService {
  getData() {
    return of([
      { pk: 'pk1', comp: 'c1' },
      { pk: 'pk2', comp: 'c2' },
      { pk: 'pk3', comp: 'c3' }
    ]);
  }
  getChildData(pk) {
    return of(this.data[pk]);
  }

  public data = {
    pk1: [{ pk: 'pk11', comp: 'c11' }, { pk: 'pk12', comp: 'c12' }],
    pk2: [{ pk: 'pk21', comp: 'c21' }],
    pk3: [],
    pk11: [{ pk: 'pk11', comp: 'c111' }],
    pk12: [],
    pk21: [],
    pk111: []
  };
}
