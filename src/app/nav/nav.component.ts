import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showHelp = false;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  toggleHelp() {
    this.showHelp = !this.showHelp;
    this.appService.toggleHelp.next(this.showHelp);
  }
}
