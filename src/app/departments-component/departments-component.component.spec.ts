import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsComponentComponent } from './departments-component.component';

describe('DepartmentsComponentComponent', () => {
  let component: DepartmentsComponentComponent;
  let fixture: ComponentFixture<DepartmentsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
