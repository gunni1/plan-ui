import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlanFormComponent } from './new-plan-form.component';

describe('NewPlanFormComponent', () => {
  let component: NewPlanFormComponent;
  let fixture: ComponentFixture<NewPlanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
