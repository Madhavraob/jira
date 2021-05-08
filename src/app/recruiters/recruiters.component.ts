import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiters',
  templateUrl: './recruiters.component.html',
  styleUrls: ['./recruiters.component.css']
})
export class RecruitersComponent implements OnInit {

  openDialog: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  dialogClose(event) {
    this.openDialog = false;
    console.log('===========dialog response', event);
  }
}
