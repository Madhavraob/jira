import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-var',
  templateUrl: './var.component.html',
  styleUrls: ['./var.component.scss']
})
export class VarComponent implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.data = this.route.snapshot.data;
  }

}
