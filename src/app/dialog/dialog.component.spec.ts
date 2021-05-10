import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent, DialogTemplateComponent } from './dialog.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject } from 'rxjs';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogComponent, DialogTemplateComponent],
      imports: [MatDialogModule, NoopAnimationsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open dialog', () => {
    const openDialogSpy = spyOn(component.dialog, 'open').and.callThrough();
    component.openDialog = true;
    expect(openDialogSpy).toHaveBeenCalled();
  });

  it('should cancel dialog', () => {
    // const openDialogSpy = spyOn(component.dialog, 'open').and.callThrough();
    // const closeDialogSpy = spyOn(component.dialogClose, 'emit').and.callThrough();
    component.openDialog = true;
    component.dialogRef.afterClosed = () => new BehaviorSubject(true);
    component.dialogRef.close(true);

    // expect(openDialogSpy).toHaveBeenCalled();
    // expect(closeDialogSpy).toHaveBeenCalled();
  });
});

describe('DialogTemplateComponent', () => {
  let component: DialogTemplateComponent;
  let fixture: ComponentFixture<DialogTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogTemplateComponent],
      imports: [MatDialogModule, MatIconModule, NoopAnimationsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: { close: () => { } } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    const openDialogSpy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.onSubmit();
    expect(openDialogSpy).toHaveBeenCalledWith(true);
  });
  
  it('should close', () => {
    const openDialogSpy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.onCancel();
    expect(openDialogSpy).toHaveBeenCalledWith(false);
  });
});
