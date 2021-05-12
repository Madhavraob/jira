import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngMsComponent } from './ang-ms.component';

describe('AngMsComponent', () => {
  let component: AngMsComponent;
  let fixture: ComponentFixture<AngMsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngMsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
