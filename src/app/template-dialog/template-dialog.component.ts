import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-template-dialog',
  templateUrl: './template-dialog.component.html',
  styleUrls: ['./template-dialog.component.scss']
})
export class TemplateDialogComponent {

  @ViewChild("dialogRef2") dialogRef: TemplateRef<any>;

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(this.dialogRef, { data: "some data", panelClass: 'my-class', ariaLabel:"dialog1Desc" });
  }
}
