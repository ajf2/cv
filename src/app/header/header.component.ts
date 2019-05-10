import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() name: string;
  @Input() nameSuffix: string;
  @Input() jobTitle: string;
  @Input() telephone: string;
  @Input() email: string;
  @Input() githubLink: string;

  constructor() { }

  ngOnInit() {
  }

}
