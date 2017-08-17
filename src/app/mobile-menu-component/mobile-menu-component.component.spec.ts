import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuComponentComponent } from './mobile-menu-component.component';

describe('MobileMenuComponentComponent', () => {
  let component: MobileMenuComponentComponent;
  let fixture: ComponentFixture<MobileMenuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileMenuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
