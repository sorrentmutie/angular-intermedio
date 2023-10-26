import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRandomUserComponent } from './show-random-user.component';

describe('ShowRandomUserComponent', () => {
  let component: ShowRandomUserComponent;
  let fixture: ComponentFixture<ShowRandomUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowRandomUserComponent]
    });
    fixture = TestBed.createComponent(ShowRandomUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
