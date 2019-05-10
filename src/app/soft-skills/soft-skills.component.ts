import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss']
})
export class SoftSkillsComponent implements OnInit {

  @Input()
  skills: string[];

  constructor() { }

  ngOnInit() {
  }

}
