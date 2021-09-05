import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeScroll2Component } from './native-scroll2.component';

describe('NativeScroll2Component', () => {
  let component: NativeScroll2Component;
  let fixture: ComponentFixture<NativeScroll2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NativeScroll2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeScroll2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
