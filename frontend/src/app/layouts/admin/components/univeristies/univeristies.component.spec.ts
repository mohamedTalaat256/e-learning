import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniveristyComponent } from './univeristies.component';

describe('UniveristyComponent', () => {
  let component: UniveristyComponent;
  let fixture: ComponentFixture<UniveristyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniveristyComponent]
    });
    fixture = TestBed.createComponent(UniveristyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
