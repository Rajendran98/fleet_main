import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselExhaustFluidComponent } from './diesel-exhaust-fluid.component';

describe('DieselExhaustFluidComponent', () => {
  let component: DieselExhaustFluidComponent;
  let fixture: ComponentFixture<DieselExhaustFluidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieselExhaustFluidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieselExhaustFluidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
