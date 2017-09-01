import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyFormComponentComponent } from './apply-form-component.component';

describe('ApplyFormComponentComponent', () => {
  let component: ApplyFormComponentComponent;
  let fixture: ComponentFixture<ApplyFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
