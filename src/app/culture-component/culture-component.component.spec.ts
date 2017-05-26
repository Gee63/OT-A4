import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureComponentComponent } from './culture-component.component';

describe('CultureComponentComponent', () => {
  let component: CultureComponentComponent;
  let fixture: ComponentFixture<CultureComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
