import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarStepComponent } from './var-step.component';

describe('VarStepComponent', () => {
  let component: VarStepComponent;
  let fixture: ComponentFixture<VarStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
