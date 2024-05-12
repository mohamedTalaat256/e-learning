import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniveristyFormDialogComponent } from './univeristy-form-dialog.component';

describe('UniveristyFormDialogComponent', () => {
  let component: UniveristyFormDialogComponent;
  let fixture: ComponentFixture<UniveristyFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniveristyFormDialogComponent]
    });
    fixture = TestBed.createComponent(UniveristyFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
