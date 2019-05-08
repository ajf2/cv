import { Component, OnInit, Input } from '@angular/core';
import { EmploymentRecord } from './employment-record';

@Component({
  selector: 'app-employment-record',
  templateUrl: './employment-record.component.html',
  styleUrls: ['./employment-record.component.scss']
})
export class EmploymentRecordComponent implements OnInit {

  @Input()
  employmentRecord: EmploymentRecord;

  constructor() { }

  ngOnInit() {
  }

}
