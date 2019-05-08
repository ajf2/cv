import { Component, Input, OnInit } from '@angular/core';
import { EmploymentRecord } from '../employment-record/employment-record';

@Component({
  selector: 'app-employment-history',
  templateUrl: './employment-history.component.html',
  styleUrls: ['./employment-history.component.scss']
})
export class EmploymentHistoryComponent implements OnInit {

  @Input()
  employmentHistory: EmploymentRecord[];

  constructor() { }

  ngOnInit() {
  }

}
