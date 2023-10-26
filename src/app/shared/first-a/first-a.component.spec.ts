import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAComponent } from './first-a.component';

describe('FirstAComponent', () => {
  let component: FirstAComponent;
  let fixture: ComponentFixture<FirstAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstAComponent]
    });
    fixture = TestBed.createComponent(FirstAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
