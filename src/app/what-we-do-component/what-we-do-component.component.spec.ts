import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoComponentComponent } from './what-we-do-component.component';

describe('WhatWeDoComponentComponent', () => {
  let component: WhatWeDoComponentComponent;
  let fixture: ComponentFixture<WhatWeDoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatWeDoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeDoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
