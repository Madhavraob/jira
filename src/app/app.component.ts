import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'revanth';

  m = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20]
  ];

  ngOnInit() {
    debugger

    // const maxRi = this.m.length - 1;
    // const maxCi = this.m[0].length - 1;
    // const diagonals = maxRi + maxCi + 1;
    // const diagArray = [];

    // for (let di = 1; di <= diagonals; di++) {
    //   // console.log(di);
    //   const startRi = di - 1 > maxRi ? maxRi : di - 1;
    //   const endCi = di - 1 > maxCi ? maxCi : di - 1;
    //   diagArray[di - 1] = [];
    //   const rowArr = [];

    //   for (let ri = startRi; ri >= 0; ri--) {
    //     for (let ci = di - 1 - ri; ci <= endCi; ci++) {
    //       // console.log(this.m[ri][ci]);
    //       rowArr.push(this.m[ri][ci]);
    //     }
    //   }
    //   diagArray[di - 1] = rowArr.reverse();
    // }

    const rowCount = this.m.length;
    const colCount = this.m[0].length;
    const diagCount = rowCount + colCount - 1;
    const diagArray = [];

    for (let line = 1; line <= diagCount; line++) {
      const startRow = this.min(rowCount, line) - 1;
      let startCol = this.max(0, line - rowCount);

      let count = this.min(this.min(line, (colCount - startCol)), rowCount);
      const rowArr = [];

      for (let j = 0; j < count; j++) {
        rowArr.push(this.m[startRow - j][startCol + j]);
      }

      if (line % 2) {
        diagArray.push(rowArr);
      } else {
        diagArray.push(rowArr.reverse());
      }
    }
    console.log(diagArray);
  }

  min(a, b) {
    return (a < b) ? a : b;
  }
  max(a, b) {
    return (a > b) ? a : b;
  }

}
