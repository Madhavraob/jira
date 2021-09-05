import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeScrollComponent } from './native-scroll.component';

describe('NativeScrollComponent', () => {
  let component: NativeScrollComponent;
  let fixture: ComponentFixture<NativeScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NativeScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
