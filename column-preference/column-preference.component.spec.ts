import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnPreferenceComponent } from './column-preference.component';

describe('ColumnPreferenceComponent', () => {
  let component: ColumnPreferenceComponent;
  let fixture: ComponentFixture<ColumnPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
