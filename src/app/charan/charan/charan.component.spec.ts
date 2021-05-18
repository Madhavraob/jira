import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharanComponent } from './charan.component';

describe('CharanComponent', () => {
  let component: CharanComponent;
  let fixture: ComponentFixture<CharanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
