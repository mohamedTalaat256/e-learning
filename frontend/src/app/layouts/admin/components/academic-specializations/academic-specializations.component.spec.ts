import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicSpecializationsComponent } from './academic-specializations.component';

describe('AcademicSpecializationsComponent', () => {
  let component: AcademicSpecializationsComponent;
  let fixture: ComponentFixture<AcademicSpecializationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicSpecializationsComponent]
    });
    fixture = TestBed.createComponent(AcademicSpecializationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
