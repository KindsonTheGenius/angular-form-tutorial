import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TdFormComponent } from './td-form.component';

describe('TdFormComponent', () => {
  let component: TdFormComponent;
  let fixture: ComponentFixture<TdFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TdFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
