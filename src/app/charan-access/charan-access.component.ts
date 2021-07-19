import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-charan-access',
  templateUrl: './charan-access.component.html',
  styleUrls: ['./charan-access.component.scss']
})
export class CharanAccessComponent implements OnInit {

  officeOptions = of([{ name: '1' }, { name: '2' }]);
  teams = [{ name: '1' }, { name: '2' }];
  profile = { email: '' };
  officeControl = new FormControl();
  focusAvatar = false;
  @ViewChild('signOut') buttonRef: MatButton;

  constructor() { }

  ngOnInit() { }

  officeChange($event) {

  }

  teamChange($event) {

  }

  displayFn(val) {
    return val ? val.name : val;
  }

  logout() {

  }

  resetFocus() {
    this.focusAvatar = false;
    this.buttonRef.focus();
  }

  setFocus() {
    this.focusAvatar = true;
  }

  customSort() {
    let data = [
      { status: 'done', age: 50 },
      { status: 'todo', age: 50 },
      { status: 'inprogress', age: 50 },
      { status: 'todo', age: 51 },
      { status: 'done', age: 50 },
      { status: 'todo', age: 50 }
    ]
    let so = [
      'todo',
      'inprogress',
      'done'
    ]

    data.sort(function (x, y) {
      if (so.indexOf(x.status) < so.indexOf(y.status)) {
        return -1;
      } else if (so.indexOf(x.status) > so.indexOf(y.status)) {
        return 1;
      } else {
        if (x.age < y.age) {
          return -1;
        } else if (x.age > y.age) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  }

}
