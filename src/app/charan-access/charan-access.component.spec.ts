import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharanAccessComponent } from './charan-access.component';

describe('CharanAccessComponent', () => {
  let component: CharanAccessComponent;
  let fixture: ComponentFixture<CharanAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharanAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharanAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
