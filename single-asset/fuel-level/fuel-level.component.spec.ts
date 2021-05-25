import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelLevelComponent } from './fuel-level.component';

describe('FuelLevelComponent', () => {
  let component: FuelLevelComponent;
  let fixture: ComponentFixture<FuelLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
