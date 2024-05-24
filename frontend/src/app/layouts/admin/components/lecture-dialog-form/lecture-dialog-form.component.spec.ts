import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureDialogFormComponent } from './lecture-dialog-form.component';

describe('LectureDialogFormComponent', () => {
  let component: LectureDialogFormComponent;
  let fixture: ComponentFixture<LectureDialogFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LectureDialogFormComponent]
    });
    fixture = TestBed.createComponent(LectureDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
