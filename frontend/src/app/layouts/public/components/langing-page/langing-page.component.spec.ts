import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangingPageComponent } from './langing-page.component';

describe('LangingPageComponent', () => {
  let component: LangingPageComponent;
  let fixture: ComponentFixture<LangingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LangingPageComponent]
    });
    fixture = TestBed.createComponent(LangingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
