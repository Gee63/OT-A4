import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersComponentComponent } from './careers-component.component';

describe('CareersComponentComponent', () => {
  let component: CareersComponentComponent;
  let fixture: ComponentFixture<CareersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
