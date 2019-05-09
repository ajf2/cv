import { Component, OnInit, Input } from '@angular/core';
import { EmploymentExperience } from './employment-experience';

@Component({
  selector: 'app-employment-experience',
  templateUrl: './employment-experience.component.html',
  styleUrls: ['./employment-experience.component.scss']
})
export class EmploymentExperienceComponent implements OnInit {

  @Input()
  experience: EmploymentExperience;

  constructor() { }

  ngOnInit() {
  }

}
