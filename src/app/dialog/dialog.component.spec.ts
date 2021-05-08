import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent, DialogTemplateComponent } from './dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogComponent],
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
});

// describe('DialogTemplateComponent', () => {
//   let component: DialogTemplateComponent;
//   let fixture: ComponentFixture<DialogTemplateComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [DialogTemplateComponent],
//       imports: [MatDialogModule, NoopAnimationsModule]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DialogTemplateComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should submit', () => {
//     const openDialogSpy = spyOn(component.dialogRef, 'close').and.callThrough();
//     component.onSubmit();
//     expect(openDialogSpy).toHaveBeenCalled();
//   });
// });
