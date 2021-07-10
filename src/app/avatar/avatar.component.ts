import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @ViewChild('buttonRef') buttonRef: MatButton;
  @Input() set setFocus(focus: boolean) {
    if(focus) {
      this.buttonRef.focus();
    }
  }

  // @ViewChild('firstname', {static: true}) firstname:any;

  constructor() { }

  ngOnInit(): void {
    // this.firstname.nativeElement.focus();
  }

}
