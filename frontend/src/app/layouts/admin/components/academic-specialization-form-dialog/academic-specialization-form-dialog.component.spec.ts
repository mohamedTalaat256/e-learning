import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicSpecializationFormDialogComponent } from './academic-specialization-form-dialog.component';

describe('AcademicSpecializationFormDialogComponent', () => {
  let component: AcademicSpecializationFormDialogComponent;
  let fixture: ComponentFixture<AcademicSpecializationFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicSpecializationFormDialogComponent]
    });
    fixture = TestBed.createComponent(AcademicSpecializationFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
