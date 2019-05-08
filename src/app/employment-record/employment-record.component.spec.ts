import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentRecordComponent } from './employment-record.component';

describe('EmploymentRecordComponent', () => {
  let component: EmploymentRecordComponent;
  let fixture: ComponentFixture<EmploymentRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
