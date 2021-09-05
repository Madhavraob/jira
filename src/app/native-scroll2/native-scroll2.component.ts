import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-native-scroll2',
  templateUrl: './native-scroll2.component.html',
  styleUrls: ['./native-scroll2.component.scss']
})
export class NativeScroll2Component {
  @ViewChild('scrollMenu') scrollMenu: ElementRef;
  rightDisabled: boolean = false;
  leftDisabled: boolean = true;
  constructor(){}

  scrollLeft(){
    this.scrollMenu.nativeElement.scrollLeft -= 150;
    this.checkScroll()
  }

  scrollRight(){
    this.scrollMenu.nativeElement.scrollLeft += 150;
        this.checkScroll();
  }
  
  onScroll(e){
      this.checkScroll();
  }

  checkScroll(){
    this.scrollMenu.nativeElement.scrollLeft==0? this.leftDisabled = true :this.leftDisabled = false;

    let newScrollLeft = this.scrollMenu.nativeElement.scrollLeft;
    let width = this.scrollMenu.nativeElement.clientWidth;
    let scrollWidth = this.scrollMenu.nativeElement.scrollWidth;
    scrollWidth - (newScrollLeft+width)==0? this.rightDisabled = true :this.rightDisabled = false;
  }
}
