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

}
