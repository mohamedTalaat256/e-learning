import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseReviewDialogFormComponent } from './review-dialog-form.component';

describe('CourseReviewDialogFormComponent', () => {
  let component: CourseReviewDialogFormComponent;
  let fixture: ComponentFixture<CourseReviewDialogFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseReviewDialogFormComponent]
    });
    fixture = TestBed.createComponent(CourseReviewDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
