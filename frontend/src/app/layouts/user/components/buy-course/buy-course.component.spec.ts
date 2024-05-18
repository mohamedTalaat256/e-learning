import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCourseComponent } from './buy-course.component';

describe('BuyCourseComponent', () => {
  let component: BuyCourseComponent;
  let fixture: ComponentFixture<BuyCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyCourseComponent]
    });
    fixture = TestBed.createComponent(BuyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
