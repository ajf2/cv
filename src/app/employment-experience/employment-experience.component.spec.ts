import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentExperienceComponent } from './employment-experience.component';

describe('EmploymentExperienceComponent', () => {
  let component: EmploymentExperienceComponent;
  let fixture: ComponentFixture<EmploymentExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
