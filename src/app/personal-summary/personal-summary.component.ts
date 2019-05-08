import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-summary',
  templateUrl: './personal-summary.component.html',
  styleUrls: ['./personal-summary.component.scss']
})
export class PersonalSummaryComponent implements OnInit {

  @Input()
  personalSummary: string;

  constructor() { }

  ngOnInit() {
  }

}
