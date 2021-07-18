import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDiff'
})
export class DateDiffPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    // return null;
    let dateBack = new Date();
    let day = dateBack.getDay();
    // diff in days ( 1000 * 60 * 60 * 24  = 86400000 )
    const dayDuration = 86400000;
    if(day == 0) {
      dateBack = new Date(dateBack.getTime() - 2 * dayDuration);
    } else if(day == 6 ) {
      dateBack = new Date(dateBack.getTime() - dayDuration);
    }
    return dateBack;



    let dateTo = new Date();
    let dateFrom = new Date('2021-07-16');
    // let dateFrom = new Date('1993-07-16');
    var dateDiff;
    if (dateTo < dateFrom) return -1; // error code if dates transposed
    var dateFromDayOrig = dateFrom.getDay(); // day of week
    var dateToDayOrig = dateTo.getDay();
    var dateFromDay = (dateFromDayOrig == 0) ? 7 : dateFromDayOrig; // change Sunday from 0 to 7
    var dateToDay = (dateToDayOrig == 0) ? 7 : dateToDayOrig;
    dateFromDay = (dateFromDay > 5) ? 5 : dateFromDay; // only count weekdays
    dateToDay = (dateToDay > 5) ? 5 : dateToDay;

    // calculate differnece in weeks (1000mS * 60sec * 60min * 24hrs * 7 days = 604800000)
    var weekDifference = Math.floor((dateTo.getTime() - dateFrom.getTime()) / 604800000);

    if (dateFromDay <= dateToDay) {
        dateDiff = (weekDifference * 5) + (dateToDay - dateFromDay);
    } else {
        dateDiff = ((weekDifference + 1) * 5) - (dateFromDay - dateToDay);
    }

    // fix: remove one day if it's saturday or sunday
    if (dateFromDayOrig >= 6 || dateFromDayOrig == 0) {
    dateDiff--;
    }

    return (dateDiff + 1); // add 1 because dates are inclusive
  }

}
