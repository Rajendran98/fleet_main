import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetUtilizationComponent } from './asset-utilization.component';

describe('AssetUtilizationComponent', () => {
  let component: AssetUtilizationComponent;
  let fixture: ComponentFixture<AssetUtilizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetUtilizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetUtilizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
