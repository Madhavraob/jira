import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from "@angular/common";
import { AppService } from './app.service';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  constructor(public appService: AppService) { }

  transform(value: any, ...args: unknown[]): unknown {
    // return value;
    debugger
    return formatDate(value, this.appService.dateFormat, 'en-US');
    // return null;
  }

}
