import { Component, OnInit } from '@angular/core';
import { EmploymentRecord } from './employment-record';

@Component({
  selector: 'app-employment-record',
  templateUrl: './employment-record.component.html',
  styleUrls: ['./employment-record.component.scss']
})
export class EmploymentRecordComponent implements OnInit {

  employmentRecord: EmploymentRecord;

  constructor() { }

  ngOnInit() {
  }

}
