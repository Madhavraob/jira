import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharanComponent } from './charan/charan.component';
import { CharanService } from './charan.service';



@NgModule({
  declarations: [CharanComponent],
  imports: [
    CommonModule,
    NgxGraphModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [CharanService]
})
export class CharanModule { }
// https://stackblitz.com/edit/ngx-graph-simple-example-1haxo3?file=package.json
// https://stackblitz.com/edit/ngx-graph-demo?file=src%2Fapp%2Fapp.component.html
// https://stackblitz.com/edit/ngx-graph-simple-example-1haxo3
