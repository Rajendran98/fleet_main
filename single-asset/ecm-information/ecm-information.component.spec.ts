import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECMInformationComponent } from './ecm-information.component';

describe('ECMInformationComponent', () => {
  let component: ECMInformationComponent;
  let fixture: ComponentFixture<ECMInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECMInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECMInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
