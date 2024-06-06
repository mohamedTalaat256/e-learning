import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserToolBarComponent } from './user-tool-bar.component';

describe('UserToolBarComponent', () => {
  let component: UserToolBarComponent;
  let fixture: ComponentFixture<UserToolBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserToolBarComponent]
    });
    fixture = TestBed.createComponent(UserToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
