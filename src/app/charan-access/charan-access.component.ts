import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';

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

  constructor() { }

  ngOnInit(): void {
  }

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
  }

  setFocus() {
    this.focusAvatar = true;
  }

}
