import { Component, Inject, Output, Input, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  template: '',
  styleUrls: ['dialog.component.css']
})
export class DialogComponent {
  @Output() dialogClose = new EventEmitter();

  @Input() title: string;
  @Input() contentHeader: string;
  @Input() contentBody: string;
  @Input() btnLabel: string;
  @Input() set openDialog(open: boolean) {
    if (open) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        title: this.title, btnLabel: this.btnLabel,
        contentHeader: this.contentHeader, contentBody: this.contentBody
      };
      dialogConfig.panelClass = 'custom-modalbox';
 
      this.dialogRef = this.dialog.open(DialogTemplateComponent, dialogConfig);

      this.dialogRef.afterClosed().subscribe(response => {
        this.dialogClose.emit(response)
      });
    }
  }

  dialogRef;
  constructor(public dialog: MatDialog) { }
}


@Component({
  selector: 'app-dialog-template',
  templateUrl: 'app-dialog-template.html',
  styleUrls: ['app-dialog-template.css']
})
export class DialogTemplateComponent {

  submitted = false;
  data: any;

  constructor(public dialogRef: MatDialogRef<DialogTemplateComponent>
    , @Inject(MAT_DIALOG_DATA) data) {
    this.data = data;
  }

  onSubmit() {
    this.submitted = true;
    this.dialogRef.close(this.submitted);
  }

  onCancel() {
    this.dialogRef.close(this.submitted);
  }
}
