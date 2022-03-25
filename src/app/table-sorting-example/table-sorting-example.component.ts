import { Component } from '@angular/core';

/**
 * @title Table with sorting
 */
@Component({
  selector: 'table-sorting-example',
  styleUrls: ['table-sorting-example.component.scss'],
  templateUrl: 'table-sorting-example.component.html',
})
export class TableSortingExampleComponent {
  selectedTabChange(event) {
    console.log(event);
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */