import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drag-scroll',
  templateUrl: './drag-scroll.component.html',
  styleUrls: ['./drag-scroll.component.scss']
})
export class DragScrollComponent {
  @ViewChild('nav', {read: DragScrollComponent, static: true}) ds: DragScrollComponent;
  
  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  moveTo(index) {
    this.ds.moveTo(index);
  }

  ngAfterViewInit() {
    // Starting ngx-drag-scroll from specified index(3)
    setTimeout(() => {
      this.ds.moveTo(0);
    }, 0);
  }

}
