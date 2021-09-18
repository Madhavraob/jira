import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDialogComponent } from './template-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

xdescribe('TemplateDialogComponent', () => {
  let component: TemplateDialogComponent;
  let fixture: ComponentFixture<TemplateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateDialogComponent],
      imports: [MatDialogModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
