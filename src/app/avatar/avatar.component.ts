import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @ViewChild('btnRef') buttonRef: MatButton;
  @Input() set setFocus(focus: boolean) {
    this.buttonRef.focus();
  }

  // @ViewChild('firstname', {static: true}) firstname:any;

  constructor() { }

  ngOnInit(): void {
    // this.firstname.nativeElement.focus();
  }

}
