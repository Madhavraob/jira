import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-native-scroll',
  templateUrl: './native-scroll.component.html',
  styleUrls: ['./native-scroll.component.scss']
})
export class NativeScrollComponent implements OnInit {

  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }

  onWheel(event: WheelEvent): void {
    (event.target as Element).parentElement.scrollLeft += event.deltaY;
    event.preventDefault();
  }

}
