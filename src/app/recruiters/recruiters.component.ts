import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiters',
  templateUrl: './recruiters.component.html',
  styleUrls: ['./recruiters.component.scss']
})
export class RecruitersComponent implements OnInit {

  showNav = false;
  openDialog: boolean = false;
  currentDate = new Date();
  currentDate2;
  dateFormat = "dd MMM yyyy";
  constructor() { }

  ngOnInit(): void { }

  dialogClose(event) {
    this.openDialog = false;
    console.log('===========dialog response', event);
  }
}
